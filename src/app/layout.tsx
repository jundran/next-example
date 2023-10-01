import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/themeContext'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({ children }: { children: React.ReactNode}) {

  return (
    <html lang="en">
      <body className={inter.className}>
				<ThemeProvider>
					<Header />
						{children}
					<Footer />
				</ThemeProvider>
			</body>
    </html>
  )
}

// TODO - on FF favicon does not show for bookmark, chromium ok
