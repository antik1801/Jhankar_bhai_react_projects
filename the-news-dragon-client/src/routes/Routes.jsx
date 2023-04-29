import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from "./PrivateRoutes";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children:[
           {
                path: "/",
                element: <Navigate to={"/category/0"}></Navigate>
           },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "terms",
                element: <Terms></Terms>,
            },
        ]
    },
    {
        path: "/category",
        element: <Main></Main>,
        children:[
            {
                path: ":id",
                element: <Category></Category>,
                loader: ({params})=> fetch(`https://the-news-dragon-server-antik1801.vercel.app/categories/${params.id}`),
            },
        ]
    },
    {
        path: "/news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({params})=> fetch(`https://the-news-dragon-server-antik1801.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;