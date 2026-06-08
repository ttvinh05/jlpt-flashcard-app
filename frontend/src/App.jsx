import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "@/pages/Homepage";
import DeckDetails from "@/pages/DeckDetails";
import StudyFlashcard from "@/pages/StudyFlashcard";
import DeckList from "@/pages/DeckList";
import MainLayout from "@/components/Layout/MainLayout";
import GlobalErrorBoundary from "@/components/Common/GlobalErrorBoundary";
import StudyLayout from "@/components/Layout/StudyLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <GlobalErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "decks",
        element: <DeckList />,
      },
      {
        path: "deck/:id",
        element: <DeckDetails />,
      },
    ],
  },
  {
    path: "/study",
    element: <StudyLayout />,
    errorElement: <GlobalErrorBoundary />,
    children: [
      {
        path: ":id",
        element: <StudyFlashcard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
