import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import ChefRecipe from "../Pages/ChefRecipe/ChefRecipe";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/chef-categories/:id',
                loader: ({params}) => fetch(`http://localhost:5000/single-categories/${params.id}`),
                element:<ChefDetails></ChefDetails>
            },
            {
                path: '/premiumpage/:id',
                loader: ({params}) => fetch(`http://localhost:5000/single-categories/${params.id}`),
                element: <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/blog',
                element: <Blog/>
            }
        ]
    }
])