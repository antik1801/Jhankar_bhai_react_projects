import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error";
import Contact from "./routes/contact";
import About from "./components/About/About";
import Contacts from "./components/Contact/Contacts";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import First from "./components/First/First";
import Friends from "./components/Friends/Friends";
import Accordings from "./components/Accordings/Accordings";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Posts from "./components/Posts/Posts";
import PostDetail from "./components/PostDetail/PostDetail";



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "contacts/:contactId",
//         element: <Contact />,
//       },
//     ],
//   },
//   {
//     path: '/about',
//     element: <About></About>,
//   },
//   {
//     path: '/contact',
//     element: <Contacts></Contacts>
//   }
// ]);

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <First></First>
      },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
      },
      {
        path: 'friend/:friendId',
        element: <FriendDetail></FriendDetail>,
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`), 
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/posts',
        element: <Posts></Posts>,
        loader: ()=> fetch(`https://jsonplaceholder.typicode.com/posts`),
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path:'/accordings',
        element: <Accordings></Accordings>,
      },
      {
        path : 'post/:postId',
        element: <PostDetail></PostDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`), 
      },
      {
        path: '*',
        element: <h1 className="text-5xl font-extrabold">404 not found.</h1>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Header></Header> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
