import { Nunito } from 'next/font/google'
import '../public/styles/global.css';

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Isaac Web Technologies',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className='bg-backgroundColor'>
        {children}
          </div>
      </body>
    </html>
  )
}
