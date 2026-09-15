import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import TodoApp from "../pages/TodoApp"
import CalculatorApp from "../pages/CalculatorApp";
import FormReactApp from "../pages/FormReactApp";
import FormFormikApp from "../pages/FormFormikApp";
import FormFormikTagApp from "../pages/FormFormikTagApp";
import CrudApp from "../pages/CRUD"
import TodoReducerApp from "../pages/TodoReducerApp";
import LoginApp from "../pages/LoginApp";
import InfiniteScroll from "../pages/InfiniteScroll";
import InfiniteScrollApp from "../pages/InfiniteScrollApp";
import Pagination1 from "../pages/Pagination1";
import Pagination2 from "../pages/Pagination2.tsx";
import MemoCallbackApp from "../pages/MemoCallbackApp";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { 
        path: "/",
        element: <Home />
     },
      {
        path: "/todo",
        element: <TodoApp />
      },
      {
        path: "calculator",
        element: <CalculatorApp />
      },

      {
        path: "/form-react",
        element: <FormReactApp />
      },
      {
        path: "/form-formik",
        element: <FormFormikApp />
      },
      {
        path: "/form-formik-tag",
        element: <FormFormikTagApp />
      },
      {
        path: "/crud",
        element: <CrudApp />
      },
      { 
        path: "/todo-reducer",
         element: <TodoReducerApp /> 
        },

        { path: "/login", element: <LoginApp /> },

        {
          path: "/infinite-scroll",
          element: <InfiniteScroll />
        },
        {
          path: "/infinite-scroll-pkg",
          element: <InfiniteScrollApp />
        },
        {
          path: "pagination",
          element: <Pagination1 />
        },
        {
          path: "/usememocallback",
          element: <MemoCallbackApp />
        },
        {
          path: "/pagination2",
          element: <Pagination2 />
        }

    ],
  },
]);