import { ThemeProvider } from 'next-themes'
import React from 'react' // Ensure React is imported if using JSX

export default function ThemeProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
    >
      <div>{children}</div>
    </ThemeProvider>
  )
}
