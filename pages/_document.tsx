import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='description' content='Portfolio' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
        {/* No Google Analytics */}
        {/* No Brevo/Sendinblue */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
