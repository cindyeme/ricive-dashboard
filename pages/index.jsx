import { useState } from "react";
import DashboardCard01 from "../components/shared/dashboard/DashboardCard01";
import DashboardCard02 from "../components/shared/dashboard/DashboardCard02";
import DashboardCard03 from "../components/shared/dashboard/DashboardCard03";
import DashboardCard04 from "../components/shared/dashboard/DashboardCard04";
import DashboardCard05 from "../components/shared/dashboard/DashboardCard05";

import Seo from "../components/template/Seo";
import SideNav from "../components/template/SideNav";
import WelcomeBanner from "../components/template/WelcomeBanner";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(2);
  return (
    <>
      <Seo
        pageTitle="Ricive | Home"
        metaDescriptionContent="This is a technical test for the role of a Frontend Engineer at Ricive"
      />
      <div className="home">
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <SideNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Content area */}
          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-black-100 border-l">
            <main>
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                {/* Welcome banner */}
                <WelcomeBanner />

                {/* Tabs */}
                <div className="border border-black-300 inline-flex rounded-[8px] flex text-black-600 mb-8">
                  <button
                    type="button"
                    className={`${
                      activeTab === 1 && "bg-light-100"
                    } btn font-medium text-[14px] border-r !rounded-none pl-4`}
                    onClick={() => setActiveTab(1)}
                  >
                    12 months
                  </button>
                  <button
                    type="button"
                    className={`${
                      activeTab === 2 && "bg-light-100"
                    } btn font-medium text-[14px] border-r !rounded-none`}
                    onClick={() => setActiveTab(2)}
                  >
                    30 days
                  </button>
                  <button
                    type="button"
                    className={`${
                      activeTab === 3 && "bg-light-100"
                    } btn font-medium text-[14px] border-r !rounded-none`}
                    onClick={() => setActiveTab(3)}
                  >
                    7 days
                  </button>
                  <button
                    type="button"
                    className={`${
                      activeTab === 4 && "bg-light-100"
                    } btn font-medium text-[14px] pr-4`}
                    onClick={() => setActiveTab(4)}
                  >
                    24 hours
                  </button>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-12 gap-6">
                  {activeTab === 2 && (
                    <>
                      {/* Line chart (Users) */}
                      <DashboardCard01 />
                      {/* Line chart (Sessions) */}
                      <DashboardCard02 />
                      {/* Line chart (Session duration) */}
                      <DashboardCard03 />
                    </>
                  )}
                  {/* Line chart (Total balance) */}
                  <DashboardCard04 />
                  {/* Line chart (Recent transactions) */}
                  <DashboardCard05 />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
