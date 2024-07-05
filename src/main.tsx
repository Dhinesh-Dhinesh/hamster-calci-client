import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom"
import { CardDrawerProvider } from './components/cardDrawer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CardDrawerProvider>
        <App />
      </CardDrawerProvider>
    </BrowserRouter>
  </React.StrictMode>,
)