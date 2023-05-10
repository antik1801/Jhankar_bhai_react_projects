import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddChocolates from "../components/AddChocolates";
import EditChocolate from "../components/EditChocolate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/addChocolates",
        element: <AddChocolates></AddChocolates>,
    },
    {
        path:"/addChocolate",
        element: <AddChocolates />,
    },
    {
        path: '/editChocolate/:id',
        element: <EditChocolate></EditChocolate>,
        loader: ({params})=>fetch(`http://localhost:5000/chocolates/${params.id}`)
    }
])

export default router;