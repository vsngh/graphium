import React, { ReactNode } from 'react';
import Navbar from '../Navbar';
import Middle from '../Middle';
import { Divider } from '@chakra-ui/react';
import Chart from '../Chart';
import Footer from '../Footer';
 


const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Divider orientation='horizontal'/>
      <main>{children}</main>
      <Divider/>
      <Footer/>
    </div>
  );
};

export default Layout;
