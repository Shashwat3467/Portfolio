import Head from 'next/head'
import { about, skills } from '../data/portfolio'
import { ThemeProvider } from '../contexts/theme'
import '../styles/index.css'
import '../styles/App.css'
import '../styles/About.css'
import '../styles/Contact.css'
import '../styles/Footer.css'
import '../styles/Navbar.css'
import '../styles/ProjectCard.css'
import '../styles/Projects.css'
import '../styles/ScrollToTop.css'
import '../styles/Skills.css'
import 'animate.css'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <title>Shashwat Kadam</title>
    <meta name='description' content='Shashwat Kadam, passionate software developer specializing in full-stack web development and modern JavaScript frameworks.' />
    <meta name='keywords' content='Shashwat Kadam, Software Developer, Full Stack, Web Development, Portfolio, React, Node.js, JavaScript' />
    <meta name='author' content='Shashwat Kadam' />
    <meta name='robots' content='index, follow' />
        <script type="application/ld+json">
          {`
            {
              "@context": "",
              "@type": "Person",
              "name": "Shashwat Kadam",
              "jobTitle": "",
              "url": "",
              "image": "",
              "description": "",
              "sameAs": [
                ${about.social.github ? `"${about.social.github}"` : ''}
              ]
            }
          `}
        </script>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
