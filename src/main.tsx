import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraBaseProvider, ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App'
import theme from './theme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
)
