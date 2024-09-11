import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App/App'
import './index.css'
import { store } from './App/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
