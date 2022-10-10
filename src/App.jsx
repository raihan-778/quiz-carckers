import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Root from "./Layouts/Root";
import Quiz from "./components/Quiz/Quiz";
import Blog from "./components/Blog/Blog";
import Statistics from "./components/Statistics/Statistics";
import Subjects from "./components/Subjects/Subjects";
import Error from "./components/Error/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "home",
          element: <Home></Home>,
        },
        {
          path: "quiz",
          element: <Quiz></Quiz>,
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
        {
          path: "statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "subjects",
          element: <Subjects></Subjects>,
        },
      ],
    },
    {
      path: "*",
      element: <Error></Error>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
