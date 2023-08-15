import  Login  from "../pages/login/Login";
import React from 'react';
import ApplicationView from "../pages/dashboard/DataViewDemo";
import PrivateRoute from "./PrivateRoute";
import PageComment from "../pages/dashboard/PageComment";
export const Route =[
    {
        path:"/login",
        element:<Login/>,
    },
    {
        path:"/ApplicationView",
        element:<PrivateRoute><ApplicationView/></PrivateRoute>,
    }
    ,
    {
        path:"/PageComment",
        element:<PageComment/>,
    },
]



