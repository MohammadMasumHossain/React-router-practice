import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './components/Home/Home.jsx';
import Root from './components/Root/Root.jsx';
import Mobile from './components/Mobiles/Mobile.jsx';
import Laptop from './components/Laptop/Laptop.jsx';
import User from './components/User/User.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true, Component:Home},
      {
        path:"/mobiles",Component:Mobile
      },
      {path:"laptop", Component:Laptop},
      {
        path:"user",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component:User},
        {
          path:"user/:userId",
          loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          Component:UserDetails
        }
       
    ]
  },
  {
    path:"/about",
    element:<div>about me </div>
  },
  {
    path:"/blogs",
    element:<div>you can write something here !</div>
  },
  {
    path:"app",
    Component:App
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
