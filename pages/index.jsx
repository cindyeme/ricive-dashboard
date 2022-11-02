import { useState } from 'react';

import Seo from "../components/template/Seo";
import SideNav from '../components/template/SideNav';

export default function Home() {
const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Seo
        pageTitle="Ricive | Home"
        metaDescriptionContent="This is a test for the role of a Frontend Engineer at Ricive"
      />
      <div className="home">
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <SideNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Content area */}
          
        </div>
      </div>
    </>
  );
}
