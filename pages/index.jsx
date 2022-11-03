import { useState } from 'react';
import DashboardCard01 from '../components/layout/DashboardCard01';
import Header from '../components/template/Header';

import Seo from "../components/template/Seo";
import SideNav from '../components/template/SideNav';
import WelcomeBanner from '../components/template/WelcomeBanner';

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
          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-black-100">
            {/*  Site header */}
            {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

            <main>
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                {/* Welcome banner */}
                <WelcomeBanner />

               

                {/* Cards */}
                <div className="grid grid-cols-12 gap-6">
                  {/* Line chart (Acme Plus) */}
                  <DashboardCard01 />
                </div>
              </div>
            </main>

          </div>
        </div>
      </div>
    </>
  );
}
