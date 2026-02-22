import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";

import SigninAndLogin from "./components/SigninAndLogin";
import Browse from "./pages/Browse";
import SearchMovieCard from "./components/SearchMovieCard";
import Hedder from "./components/Hedder";
import MoviePlay from "./pages/moviespages/MoviePlay";

function MainLayout() {
  return (
    <>
      <Hedder />
      <Outlet />
    </>
  );
}

function NoHeaderLayout() {
  return <Outlet />;
}

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <SigninAndLogin /> },
        { path: "/browse", element: <Browse /> },
        { path: "/search", element: <SearchMovieCard /> },
      ],
    },

    {
      element: <NoHeaderLayout />,
      children: [{ path: "/moviePlay", element: <MoviePlay /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
