// from react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// from layouts
import { MainLayout } from "./layouts"

// from pages
import {Categories, Home} from "./pages"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/categories',
          element: <Categories/>
        },
      ]
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App