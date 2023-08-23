import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Upload from '../pages/Upload';
import Loading from './../components/Loading';

const RouterApp = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/upload', element: <Upload /> },
    { path: '/*', element: <ErrorPage /> },
  ]);

  return <RouterProvider router={router} fallbackElement={<Loading />} />;
};

export default RouterApp;
