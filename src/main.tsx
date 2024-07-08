import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home from './Home.tsx'
import About from './About.tsx'
import React from 'react'
import Root from './routes/root.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Home />
    element: <Root />
  },
  {
    path: "about",
    element: <About />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
