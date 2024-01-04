import { Inter } from 'next/font/google'
import './globals.css'
import Favicon from "../../public/favicon.ico"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aaron Anablon Portfolio',
  description: 'Aaron anablon Portfolio1',
  icons: [{ rel: 'icon', url: Favicon.src }],
  verification: {
    google: "hIjirSgOXU2TNGYRlajftvngJ3Os6fyauSrQhzNzWxc",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
