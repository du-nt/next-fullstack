import type { Metadata } from 'next'
import './globals.css'
import RootProvider from '@/providers/RootProvider'
import { PropsWithChildren } from 'react'
import { getServerSession } from 'next-auth'
import { getTranslations } from '@/i18n'
import { NextIntlClientProvider } from 'next-intl'
import ThemeRegistry from '@/providers/ThemeRegistry'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.ico'
  }
}

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await getServerSession()
  const { messages, locale, theme } = await getTranslations()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <RootProvider savedTheme={theme} session={session}>
            <ThemeRegistry>{children}</ThemeRegistry>
          </RootProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
