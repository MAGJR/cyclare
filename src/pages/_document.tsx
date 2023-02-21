import { Html, Head, Main, NextScript } from 'next/document'
import { Header } from '@/components/Header'
export default function Document() {
  return (
    <Html >
      
      <Head>
        <Header />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                const preferDark = window.localStorage.getItem('theme') === 'dark';

                if (preferDark) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              }
            `
          }}
        />
      </body>
    </Html>
  )
}