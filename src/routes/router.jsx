import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddRoommate from "../Pages/AddRoommate";

const router=createBrowserRouter([
{path:'/',Component:MainLayout, 
    children:[
        {index:true , Component:Home},
        { path:'/login', Component:Login},
        {path:'/register', Component: Register},
        {path:'/addRoommate', Component: AddRoommate }
    ]
},

]);

export default router;