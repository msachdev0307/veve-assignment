import "./App.css";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ComicPage from "./pages/Comic";
import ErrorPage from "./pages/Error";
import Comics from "./components/Comics/Comics";
import Brands from "./components/Brands/Brands";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/Comic/:comicId", element: <ComicPage /> },
      { path: "/Comics", element: <Comics /> },
      { path: "/Brands", element: <Brands /> },
    ],
  },
]);
function App() {
  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
}

export default App;
