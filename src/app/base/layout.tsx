'use client'
import BaseLayout from '@/layouts/base/layout'
import { axeCoreReports } from '@/utils/axeCoreReports'
import { useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  useEffect(() => {
    axeCoreReports()
  }, [])
  return <BaseLayout>{children}</BaseLayout>
}
