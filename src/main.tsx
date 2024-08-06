import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home from './Home.tsx'
import About from './About.tsx'
import React from 'react'
import Root, {loader as rootLoader, action as rootAction} from './routes/root.tsx'
import ErrorPage from './error-page.tsx'
import PasswordInput from './pages/PasswordInput.tsx'
import Contact from './routes/contact.tsx'
import EnvironmentConfirm from './pages/EnvironmentConfirm.tsx'
import ExampleGetAPIComponent from './pages/ExampleGetAPIComponent/ExampleGetAPIComponent.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Home />
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction, 
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
      },
      {
        path: "/env-confirm",
        element: <EnvironmentConfirm />
      },
      {
        path: "/example-get-api-component",
        element: <ExampleGetAPIComponent />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
