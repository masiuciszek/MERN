import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="main">{children}</main>
    {/* {children} */}
    <Footer />
  </>
);

export default Layout;
