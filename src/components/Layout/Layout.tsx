import React, { ReactNode } from 'react';
import Navbar from '../Navbar';
import Chart from '../Chart';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Chart/>
      <main>{children}</main>
    </>
  );
};

export default Layout;
