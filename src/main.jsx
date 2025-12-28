import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home.jsx';
import MainLayout from './MainLayout.jsx';
import AppDetails from './pages/AppDetails.jsx';
import MyInstallation from './pages/MyInstallation.jsx';

import Errorpage from './pages/ErrorPage.jsx';

const fakeLoader = async () => {
  await new Promise(resolve => setTimeout(resolve, 800)); // simulate loading
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout> </MainLayout>,
    errorElement: <Errorpage> </Errorpage> ,
    loader: fakeLoader, 
    children: [
      {
        path: "/",
        element: <Home> </Home>,
        loader: fakeLoader,  
      },
    
      {
        path: "/all-apps",
        element: <App />,
        loader: fakeLoader, 
      },

      {
        path: "/details/:id",
        element: <AppDetails />,
        loader: fakeLoader, 
      },

      {
        path: "/installation",
        element: <MyInstallation />,
        loader: fakeLoader, 
      },
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
