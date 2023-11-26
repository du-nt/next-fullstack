import { cookies } from 'next/headers'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware'

import { DEFAULT_LOCALE, LOCALE_COOKIE_NAME, LOCALES } from './constants'
import { Locale } from './types'

export const getLocale = () => {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')?.value
  const lang = cookieStore.get(LOCALE_COOKIE_NAME)?.value || DEFAULT_LOCALE

  const isValidLocale = Object.keys(LOCALES).some((cur) => cur === lang)

  const locale = isValidLocale ? lang : DEFAULT_LOCALE
  const longLocale = LOCALES[locale as Locale]

  return { locale, theme, longLocale }
}

function intlMiddleware(request: NextRequest) {
  const { locale, longLocale } = getLocale()

  const requestHeaders = new Headers(request.headers)
  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })

  // Full locale (e.g. `en-US`)
  response.headers.set('x-locale', longLocale)

  // Set header to simulate correct response for `next-intl`
  response.headers.set('X-NEXT-INTL-LOCALE', longLocale)

  // Set cookie to simulate correct response for `next-intl`
  response.cookies.set('NEXT_LOCALE', locale)

  return response
}

export default async function middleware(
  req: NextRequestWithAuth,
  event: NextFetchEvent
) {
  const { pathname, origin } = req.nextUrl
  const token = await getToken({ req })

  if (['/login', '/register', '/forgot-password'].includes(pathname)) {
    if (token) {
      return NextResponse.redirect(origin)
    }

    return intlMiddleware(req)
  }

  const authMiddleware = await withAuth(
    function onSuccess(req) {
      return intlMiddleware(req)
    },
    {
      pages: {
        signIn: '/login'
      },
      callbacks: {
        authorized: ({ token, req }) => {
          const { pathname } = req.nextUrl

          if (['/', '/about'].includes(pathname)) {
            return true
          }

          return !!token
        }
      }
    }
  )

  return authMiddleware(req, event)
}

export const config = {
  matcher: [
    '/((?!register|forgot-password).*)',
    '/((?!api|_next|_vercel|favicon.ico\\..*).*)'
  ]
}
