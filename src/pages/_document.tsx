import { Html, Head, Main, NextScript } from 'next/document'
import { Header } from '@/components/Header'

export default function Document() {
  
    return (
      <Html>
        <Head>
          <Header />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_GA4}`}></script>
          <script dangerouslySetInnerHTML={{
          __html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GOOGLE_GA4}');
`
}}>
  
</script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
}
