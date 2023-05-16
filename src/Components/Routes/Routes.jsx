import React from 'react';

import {createBrowserRouter} from "react-router-dom";
import BookDetails from '../BookDetails/BookDetails';
import EditBooks from '../EditBooks/EditBooks';
import Home from '../Home/Home';
import Main from '../Layouts/Main';
import ManageBooks from '../ManageBooks/ManageBooks';
import UploadBook from '../UploadBook/UploadBook';


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
        path:'uploadBook',        
        element: <UploadBook></UploadBook>,
      },
      {        
        path:'/uploadBook/:id',
        element: <UploadBook></UploadBook>,
      },
      {        
        path:'manageBooks',
        element: <ManageBooks></ManageBooks>,
      },
      {        
        path:'editBooks/:id',
        element: <EditBooks></EditBooks>
      },
      {        
        path:'bookDetails/:id',
        element: <BookDetails></BookDetails>
      },
      
    ]

  },
]);

export default router;