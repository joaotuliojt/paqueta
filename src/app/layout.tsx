import { Metadata } from 'next'
import Providers from './providers'
import { Poppins, Montserrat } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Paquetá | Home',
  description: 'Loja de Calçados e Moda Online',
  icons: '/assets/favicon.ico',
}

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
})

const montserrat = Montserrat({
  weight: ['600', '400'],
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
