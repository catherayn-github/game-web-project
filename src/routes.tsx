import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import GameGrid from "./components/Main/GameGrid/GameGrid";
import HomePageLayout from "./components/HomePageLayout";
import GameDetailPage from "./components/Main/GameDetailPage/GameDetailPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePageLayout /> },
      { path: "game-detail/:slug", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
