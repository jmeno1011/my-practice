import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home from './Home.tsx'
import About from './About.tsx'
import React from 'react'
import Root from './routes/root.tsx'
import ErrorPage from './error-page.tsx'
import PasswordInput from './pages/PasswordInput.tsx'
import Contact from './routes/contact.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Home />
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "/password",
        element: <PasswordInput />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
