import { Metadata } from 'next'
import AuthLayout from '@/components/auth/Layout/AuthLayout'

export const metadata: Metadata = {
  title: '4X Trading Platform - Authentication',
  description: 'Sign in or create an account to access the 4X Trading Platform',
  keywords: ['trading', 'forex', 'authentication', 'login', 'register'],
  robots: 'noindex, nofollow', // Don't index auth pages
}

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: AuthLayoutProps) {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  )
} 