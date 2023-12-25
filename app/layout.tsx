import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/themeprovider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Disney+ Clone',
  description: 'Leaning Next.js Education Purpose Only',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1A1C29]">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header/>
   
      {children}
      </ThemeProvider>
      </body>
    </html>
  )
}
