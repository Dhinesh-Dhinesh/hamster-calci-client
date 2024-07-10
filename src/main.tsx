import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom"
import { CardDrawerProvider } from './components/cardDrawerContext.tsx'
import { CardDataProvider } from './components/cardDataContext.tsx'
import { UserProvider } from './components/userDataContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CardDataProvider>
          <CardDrawerProvider>
            <App />
          </CardDrawerProvider>
        </CardDataProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)