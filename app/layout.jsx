import './globals.css'
import { Sansita_Swashed } from "@next/font/google"
import Link from 'next/link'

const sanista = Sansita_Swashed({
  weight: ["400", "700"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav>
          <Link href="/">Home</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
