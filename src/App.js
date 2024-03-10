import "./App.css";
import Header from "./components/common/header";
import Main from "./main";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Blogs from "./pages/blogs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "blogs",
          element: <Blogs />,
        },
      ],
    },
  ]);
  return (
    <div className="font-inter bg-neutral-950 text-white!">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
