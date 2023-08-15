import {RouterProvider} from "react-router-dom";

import {PrivateRouter, PublicRouter, Router} from "./Router";
import React from "react";

export const Routes = () => {
    return (<RouterProvider router={Router} />)
}
