import { createBrowserRouter, RouterProvider } from "react-router"
import MainLayout from "@/components/Layout/MainLayout"
import HomePage from "@/pages/Homepage"
import DeckDetails from "@/pages/DeckDetails"
import StudySession from "@/pages/StudySession"
import DeckList from "@/pages/DeckList"
import DashboardLayout from "@/components/Layout/DashboardLayout"
import GlobalErrorBoundary from "@/components/Common/GlobalErrorBoundary"

const router = createBrowserRouter([
  {
    element: <DashboardLayout />, 
    children: [
      {
        index: true, 
        element: <HomePage />
      }, 
      {
        path: "decks",
        element: <DeckList />
      }
    ]
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { 
        path: "deck/:id", 
        element: <DeckDetails />,
        errorElement: <GlobalErrorBoundary />
      },
      { 
        path: "study/:id", 
        element: <StudySession />,
        errorElement: <GlobalErrorBoundary />
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App