import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/styles/App.css'
import{ Home,AboutUs,Contact, Experience, HomeLanding } from './pages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLanding/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact", 
        element: <Contact />,
      },
      {
        path: "experience",
        element: <Experience />
      },

    ]
  }
]);
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
