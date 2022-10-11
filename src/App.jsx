import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Root from "./Layouts/Root";
import Quiz from "./components/Quiz/Quiz";
import Blog from "./components/Blog/Blog";
import Statistics from "./components/Statistics/Statistics";

import Error from "./components/Error/Error";
import QuizDetail from "./components/QuizDetail/QuizDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "home",
          loader: async () =>
            fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Home></Home>,
        },
        {
          path: "/quiz/:quizId",
          loader: async ({ params }) => {
            console.log(params.quizId);
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <QuizDetail></QuizDetail>,
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
        {
          path: "statistics",
          element: <Statistics></Statistics>,
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
