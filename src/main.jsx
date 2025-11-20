import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import Main from './routes/main/index.jsx';
import Register from './routes/register/index.jsx';

const router = createBrowserRouter(
  [
    {
      path:"/Projeto_Integrador_APH",
      element: <Main />
    },
    {
      path:"/Projeto_Integrador_APH/register",
      element: <Register />
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
