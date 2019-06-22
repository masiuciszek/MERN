import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Navbar />

    <main className="main">{children}</main>
    <Footer />
  </>
);

export default Layout;
