import { useState } from 'react';
import { BrowserRouter, Routes,Route, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from './modules/shared/components/AuthLayout/AuthLayout';
import Login from './modules/authentication/components/login/Login';
import Registeration from './modules/authentication/components/registeration/Registeration';
import ForgetPass from './modules/authentication/components/forgetPass/ForgetPass';
import ResetPass from './modules/authentication/components/resetPass/ResetPass'
import './App.css';
import NotFound from './modules/shared/components/notFound/NotFound';
import MasterLayout from './modules/shared/components/MasterLayout/MasterLayout';
import Dashboard from './modules/dashboard/components/Dashboard/Dashboard';
import RecipesList from './modules/recipes/components/recipesList/RecipesList';
import RecipeData from './modules/recipes/components/recipeData/RecipeData';
import CatgoriesList from './modules/categories/components/categoriesList/CatgoriesList';
import CategoryData from './modules/categories/components/categoryData/CategoryData';
import UsersList from './modules/users/components/usersList/UsersList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const routes = createBrowserRouter([
    {
      path: '',
      element:<AuthLayout/>,
      errorElement:<NotFound/>,
      children: [
        {index:true, element:<Login/>},
        {path:'login',element:<Login/>},
        {path:'register',element:<Registeration/>},
        {path:'forget-pass',element:<ForgetPass/>},
        {path:'reset-pass',element:<ResetPass/>},
        
      ]
    },{
      path: 'dashboard',
      element:<MasterLayout/>,
      errorElement:<NotFound/>,
      children: [
        {index:true, element:<Dashboard/>},
        {path:'recipes',element:<RecipesList/>},
        {path:'recipe-data',element:<RecipeData/>},
        {path:'categories',element:<CatgoriesList/>},
        {path:'category-data',element:<CategoryData/>},
        {path:'users',element:<UsersList/>},
      ]

    }
  ])
  

  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
