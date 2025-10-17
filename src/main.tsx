import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './lib/i18n'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayouts from './Layouts/MainLayouts.tsx'
import Home from './Pages/Home/Home.tsx'
import Register from './Pages/Register/Register.tsx'
import { LogPage } from './Pages/Login/LogPage.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
        {
            index: true,
            Component: Home,
        }
        
    ]
  },
  { path: "/login" ,element: <LogPage /> },
  { path:"/register", element: <Register /> }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-gradient-to-br from-secondary via-white to-accent'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
