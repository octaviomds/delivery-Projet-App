'use client'

import { Outfit } from 'next/font/google'
import './globals.css'
import ThemeProviders from '@/hooks/themeProviders'

import { Provider } from 'react-redux'
import store from '@/redux/store'

const outfit = Outfit({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressContentEditableWarning
    >
      <head></head>
      <body
        className={`bg-[#f3f9fc] text-black dark:bg-boxdark-2 dark:text-white ${outfit.className}`}
      >
        <ThemeProviders>
          <Provider store={store}>
            <main className='dark:prose-invert'>{children}</main>
          </Provider>
        </ThemeProviders>
      </body>
    </html>
  )
}
