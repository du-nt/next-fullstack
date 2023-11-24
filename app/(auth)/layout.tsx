'use client'

import { PropsWithChildren } from 'react'

import EmptyLayout from '@/components/templates/EmptyLayout'

export default function RedirectHomeRoute({ children }: PropsWithChildren) {
  return <EmptyLayout>{children}</EmptyLayout>
}
