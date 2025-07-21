import Header from './features/Header'
import Main from './features/Main'
import Footer from './features/Footer'
import { Helmet } from '@dr.pogodin/react-helmet'
import { getBaseUrl } from './helpers/getBaseUrl'

const App = () => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Forum&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
      />
      <link rel="icon" href={getBaseUrl() + 'images/welcome-slider/1.jpg'} />
    </Helmet>
    <Header />
    <Main />
    <Footer />
  </>
)

export default App
