import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRouter from "../Provider/PrivateRouter";
import RoommateDetails from "../Pages/RoommateDetails";
import UpDateRoommateInfo from "../Pages/UpDateRoommateInfo";
import Error from "../Component/Error";
import About from "../Pages/About";
import DashboardLayout from "../Pages/DashboardLayout/DashboardLayout";
import MyProfile from "../Pages/MyPofile/MyProfile";
import AuthLayout from "../Layout/AuthLayout";
import DasHome from "../Pages/DashboardLayout/DasHome";
import AddRoommate from "../Pages/DashboardLayout/AddRoommate";
import BrowseListing from "../Pages/DashboardLayout/BrowseListing";
import MyListings from "../Pages/DashboardLayout/MyListings";
import Loding from "../Component/Shared/Loding";
import Home from '../Pages/Home'
import ContactUs from "../Pages/ContactUs/ContactUs";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<Error></Error>,
    children: [
      { index: true, Component: Home },
      {path:'about',Component:About},
      {path:'contactus',Component:ContactUs}
    ],
  },
  {path:'/auth',Component:AuthLayout,
    children:[
      {path:'login' ,Component:Login},
      {path:'register',Component:Register}
    ]
  },
  {path:'das',Component:DashboardLayout,
    children:[
      {path: '',Component: DasHome},
       {
        path: "addRoommate",
        element: (
          <PrivateRouter>
          <AddRoommate/>
          </PrivateRouter>
        ),
      },
      {
        path: "upDateRoommateInfo/:id",
        loader: ({ params }) =>
          fetch(`https://find-my-roommate-server.vercel.app/roommates/${params.id}`),
        hydrateFallbackElement: <Loding></Loding> ,
        element: (
          <PrivateRouter>
            <UpDateRoommateInfo />
          </PrivateRouter>
        ),
      },
       {
        path: "roommateDetails/:id",
        loader: ({ params }) =>
          fetch(`https://find-my-roommate-server.vercel.app/roommates/${params.id}`),
         hydrateFallbackElement:<Loding/>,
        element: (
          <PrivateRouter>
            <RoommateDetails></RoommateDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "browseListing",
        element: <BrowseListing/>
          ,
      },
       
      {path:'myPofile',Component:MyProfile},
      {path:'/das/my-listings',
      element:<PrivateRouter>
        <MyListings/>
      </PrivateRouter>}
    ]
  }
]);

export default router;
