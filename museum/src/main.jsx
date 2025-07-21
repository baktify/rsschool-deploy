import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme.js'
import App from './App.jsx'
import GlobalStyles from './styles/GlobalStyles.jsx'
import { HelmetProvider } from '@dr.pogodin/react-helmet'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ThemeProvider>
  </StrictMode>
)
