import React from 'react';

import {createBrowserRouter} from "react-router-dom";
import Home from '../Home/Home';
import Main from '../Layouts/Main';
import UpdateData from '../UpdateData/UpdateData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/updateData/:id',
        element:<UpdateData></UpdateData>,
      }
    ]

  },
]);

export default router;