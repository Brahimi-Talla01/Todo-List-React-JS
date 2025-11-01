import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeContextProvider } from './contexts/theme.context.jsx'
import { TaskContextProvider } from './contexts/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
