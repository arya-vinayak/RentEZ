import { GeistSans } from 'geist/font'
import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'RentEZ',
  description: 'Manage rents',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        
        <main className="min-h-screen flex flex-col ">
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          </ThemeProvider>
        </main>

      </body>
    </html>
  )
}
