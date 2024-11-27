import React from "react"

// from react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// from layouts
import { MainLayout } from "./layouts"

// from pages
import {Home} from "./pages"
const Categories = React.lazy(()=> import("./pages/Categories"))
const Game = React.lazy(()=> import("./pages/Game"))

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
          element: <React.Suspense fallback={<div>Loading...</div>}>
            <Categories />
          </React.Suspense>
        },
        {
          path: '/game',
          element: <React.Suspense fallback={<div>Loading...</div>}>
            <Game/>
          </React.Suspense>
        },
      ]
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App