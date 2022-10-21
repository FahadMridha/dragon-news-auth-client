import { createBrowserRouter } from "react-router-dom";
import Login from "../createUser/login/Login";
import Register from "../createUser/register/Register";
import Main from "../Layout/Main";
import Category from "../pages/Category/Category/Category";
import Home from "../pages/home/Home";
import News from "../pages/news/News/News";
import TermsAndCondition from "../pages/others/tremsAndCondition/TermsAndCondition";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermsAndCondition></TermsAndCondition>,
      },
    ],
  },
]);
