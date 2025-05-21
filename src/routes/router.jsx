import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddRoommate from "../Pages/AddRoommate";
import PrivateRouter from "../Provider/PrivateRouter";
import BrowseListing from "../Pages/BrowseListing";
import RoommateDetails from "../Pages/RoommateDetails";
import UpDateRoommateInfo from "../Pages/UpDateRoommateInfo";
import MyListings from "../Pages/MyListings";
import Loding from "../Component/Loding";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      {
        path: "/addRoommate",
        element: (
          <PrivateRouter>
            <AddRoommate></AddRoommate>
          </PrivateRouter>
        ),
      },
      {
        path: "/browseListing",
        element: <BrowseListing></BrowseListing>
          ,
      },
      {
        path: "/roommateDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/roommates/${params.id}`),
         hydrateFallbackElement: <Loding></Loding> ,
        element: (
          <PrivateRouter>
            <RoommateDetails></RoommateDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/upDateRoommateInfo/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/roommates/${params.id}`),
        hydrateFallbackElement: <Loding></Loding> ,
        element: (
          <PrivateRouter>
            <UpDateRoommateInfo />
          </PrivateRouter>
        ),
      },
      {path:'/myListings',
      element:<PrivateRouter>
        <MyListings></MyListings>
      </PrivateRouter>}
    ],
  },
]);

export default router;
