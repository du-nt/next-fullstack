'use client'

import { PropsWithChildren } from 'react'

import DefaultLayout from '@/components/templates/DefaultLayout'

export default function ProtectRoute({ children }: PropsWithChildren) {
  return <DefaultLayout>{children}</DefaultLayout>
}
