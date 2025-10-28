import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './lib/i18n'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayouts from './Layouts/MainLayouts.tsx'
import Home from './Pages/Home/Home.tsx'
import Register from './Pages/Register/Register.tsx'
import { LogPage } from './Pages/Login/LogPage.tsx'
import { AboutDoctor } from './Pages/About/About.tsx'
import { Services } from './Pages/Services/Services.tsx'
import FAQ from './Pages/FAQ/FAQ.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
          path: "/services",
          Component: Services,
        },
        {
          path: "/about",
          Component: AboutDoctor,
        },
        {
          path: "/testimonials",
          element: <FAQ></FAQ>,
        }
        
    ]
  },
  { path: "/login" ,element: <LogPage onBack={function (): void {
    throw new Error('Function not implemented.')
  } } /> },
  { path:"/register", element: <Register /> }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-gradient-to-br from-secondary via-white to-accent'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
