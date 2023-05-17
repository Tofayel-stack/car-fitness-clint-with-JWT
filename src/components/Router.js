import { createBrowserRouter } from "react-router-dom";
import About from "./About/About";
import AuthorPage from "./AuthorPage/AuthorPage";
import CheckOut from "./CheckOutPage/CheckOut";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Main from "./Layout/Main";
import MyOrder from "./OrderPage/MyOrder";
import PrivateRouter from "./PrivateRouter";
import Service from "./Service/Service";
import Register from "./SignIn/Register";
import SignIn from "./SignIn/SignIn";
import UpdateService from "./UpdateService/UpdateService";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/About',
                element:<About></About>
            },
            {
                path:'/services',
                element:<Service></Service>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/author',
                element:<AuthorPage></AuthorPage>
            },
            {
                path:'/checkout/:id',
                loader:({params})=>fetch(`http://localhost:5000/checkout/${params.id}`),
                element:<PrivateRouter><CheckOut></CheckOut></PrivateRouter>
            },
            {
                path:'/userOrder',
                element:<PrivateRouter><MyOrder></MyOrder></PrivateRouter>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/update/:id',
                loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`),
                element:<UpdateService></UpdateService>
            }
        ]
    }
])