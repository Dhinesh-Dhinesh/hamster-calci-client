import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom"
import { CardDrawerProvider } from './components/cardDrawerContext.tsx'
import { CardDataProvider } from './components/cardDataContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CardDrawerProvider>
        <CardDataProvider>
          <App />
        </CardDataProvider>
      </CardDrawerProvider>
    </BrowserRouter>
  </React.StrictMode>,
)