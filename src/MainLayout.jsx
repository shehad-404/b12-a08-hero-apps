import React from 'react'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'
// import { Outlet } from 'react-router'
import { Toaster } from "react-hot-toast";
// import { useNavigation } from 'react-router-dom';
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from './component/Spinner.jsx';

export default function MainLayout() {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar> </Navbar>
      {/* load main content  */}
      {/* Page loading spinner */}
      {navigation.state === "loading" && <Spinner />}
      
      {/* <Toaster position="top-right" /> */}

      <Outlet> </Outlet>
      <Footer> </Footer>
      <Toaster />
    </div>
  )
}
