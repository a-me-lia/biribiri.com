import './globals.css'
import { Inter, Contrail_One} from 'next/font/google'

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});
const contrail_one = Contrail_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-contrail' 
  });

export const metadata = {
  title: 'BiriBiri',
  description: 'The Railgun of Tokiwadai',
    icons: {
      icon: '/icon.png',
    },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/favicon.ico" sizes="any" />
      <link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/></head>
      <body className={`${inter.variable} font-sans  ${contrail_one.variable} font-contrail`}>{children}</body>
    </html>
  )
}
