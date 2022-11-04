import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { RiHome6Line, RiCheckboxMultipleLine } from "react-icons/ri";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import {
  FiLayers,
  FiUsers,
  FiLifeBuoy,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { BiPieChartAlt2 } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { Scrollbars } from "react-custom-scrollbars";

import SideNavLinkGroup from "./SideNavLinkGroup";
import { Avatar1, Logo } from "../../public";
import Search from "./Search";
import { Line } from "../ui/progress";

function SideNav({ sidebarOpen, setSidebarOpen }) {
  const { pathname } = useRouter();

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded =
    typeof window !== "undefined"
      ? localStorage.getItem("sidebar-expanded")
      : null;
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );
  const [budget, setBudget] = useState(true);

  // handle budget close
  const handleBudgetOpen = () => {
    setBudget(false);
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar */}
      {/*  ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll overflow-x-hidden lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-[290px] shrink-0 bg-white px-4 transition-all duration-200 ease-in-out  ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* <Scrollbars style={{ height: "100%" }} autoHide> */}
        {/* Sidebar header */}
        <div className="flex justify-between mt-4 mb-7 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <Link href="/" className="block">
            <Image src={Logo} alt="Logo" width={91.03} height={24} />
          </Link>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <div className="mb-4">
              <Search />
            </div>
            <ul className="mt-3">
              {/* Home */}
              <SideNavLinkGroup
                activeCondition={
                  pathname === "/home" || pathname.includes("home")
                }
              >
                {(handleClick) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/home"
                        className={`block truncate transition duration-150 ${
                          (pathname === "/home" || pathname.includes("home")) &&
                          "hover:text-slate-200"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <RiHome6Line
                              size={22}
                              className={`text-black-400 ${
                                (pathname === "/home" ||
                                  pathname.includes("home")) &&
                                "!text-primary-200"
                              }`}
                            />
                            <span
                              className={` font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-black-500 ${
                                (pathname === "/home" ||
                                  pathname.includes("home")) &&
                                "!text-primary-500"
                              }`}
                            >
                              Home
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SideNavLinkGroup>
              {/* Dashboard */}
              <SideNavLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("dashboard")
                }
              >
                {(handleClick) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/dashboard"
                        className={`block truncate transition duration-150 ${
                          (pathname === "/" ||
                            pathname.includes("dashboard")) &&
                          "hover:text-slate-200"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <HiOutlineChartBarSquare
                              size={23}
                              className={`text-black-400 ${
                                (pathname === "/" ||
                                  pathname.includes("dashboard")) &&
                                "!text-primary-200"
                              }`}
                            />
                            <span
                              className={` font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-black-500 ${
                                (pathname === "/" ||
                                  pathname.includes("dashboard")) &&
                                "!text-primary-500"
                              }`}
                            >
                              Dashboard
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SideNavLinkGroup>
              {/* Projects */}
              <SideNavLinkGroup
                activeCondition={
                  pathname === "/projects" || pathname.includes("projects")
                }
              >
                {(handleClick) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/projects"
                        className={`block truncate transition duration-150 ${
                          (pathname === "/projects" ||
                            pathname.includes("projects")) &&
                          "hover:text-slate-200"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <FiLayers
                              size={20}
                              className={`text-black-400 ${
                                (pathname === "/projects" ||
                                  pathname.includes("projects")) &&
                                "!text-primary-200"
                              }`}
                            />
                            <span
                              className={` font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-black-500 ${
                                (pathname === "/projects" ||
                                  pathname.includes("projects")) &&
                                "!text-primary-500"
                              }`}
                            >
                              Projects
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SideNavLinkGroup>
              {/* Tasks */}
              <SideNavLinkGroup
                activeCondition={
                  pathname === "/tasks" || pathname.includes("tasks")
                }
              >
                {(handleClick) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/tasks"
                        className={`block truncate transition duration-150 ${
                          (pathname === "/tasks" ||
                            pathname.includes("tasks")) &&
                          "hover:text-slate-200"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <RiCheckboxMultipleLine
                              size={23}
                              className={`text-black-400 ${
                                (pathname === "/tasks" ||
                                  pathname.includes("tasks")) &&
                                "!text-primary-200"
                              }`}
                            />
                            <span
                              className={` font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-black-500 ${
                                (pathname === "/tasks" ||
                                  pathname.includes("tasks")) &&
                                "!text-primary-500"
                              }`}
                            >
                              Tasks
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SideNavLinkGroup>
              {/* Reporting */}
              <SideNavLinkGroup
                activeCondition={
                  pathname === "/reporting" || pathname.includes("reporting")
                }
              >
                {(handleClick) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/reporting"
                        className={`block truncate transition duration-150 ${
                          (pathname === "/reporting" ||
                            pathname.includes("reporting")) &&
                          "hover:text-slate-200"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <BiPieChartAlt2
                              size={23}
                              className={`text-black-400 ${
                                (pathname === "/reporting" ||
                                  pathname.includes("reporting")) &&
                                "!text-primary-200"
                              }`}
                            />
                            <span
                              className={` font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-black-500 ${
                                (pathname === "/reporting" ||
                                  pathname.includes("reporting")) &&
                                "!text-primary-500"
                              }`}
                            >
                              Reporting
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SideNavLinkGroup>
              {/* Users */}
              <SideNavLinkGroup
                activeCondition={
                  pathname === "/users" || pathname.includes("users")
                }
              >
                {(handleClick) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/users"
                        className={`block truncate transition duration-150 ${
                          (pathname === "/users" ||
                            pathname.includes("users")) &&
                          "hover:text-slate-200"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <FiUsers
                              size={23}
                              className={`text-black-400 ${
                                (pathname === "/users" ||
                                  pathname.includes("users")) &&
                                "!text-primary-200"
                              }`}
                            />
                            <span
                              className={` font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-black-500 ${
                                (pathname === "/users" ||
                                  pathname.includes("users")) &&
                                "!text-primary-500"
                              }`}
                            >
                              Users
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SideNavLinkGroup>
            </ul>
          </div>
          {/* More group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              {/* <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                More
              </span> */}
            </h3>
            <ul className="mt-20">
              {/* Support */}
              <SideNavLinkGroup
                activeCondition={
                  pathname === "/support" || pathname.includes("support")
                }
              >
                {(handleClick) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/support"
                        className={`block truncate transition duration-150 ${
                          (pathname === "/support" ||
                            pathname.includes("support")) &&
                          "hover:text-slate-200"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <FiLifeBuoy
                              size={23}
                              className={`text-black-400 ${
                                (pathname === "/support" ||
                                  pathname.includes("support")) &&
                                "!text-primary-200"
                              }`}
                            />
                            <span
                              className={` font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-black-500 ${
                                (pathname === "/support" ||
                                  pathname.includes("support")) &&
                                "!text-primary-500"
                              }`}
                            >
                              Support
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SideNavLinkGroup>
              {/* Settings */}
              <SideNavLinkGroup
                activeCondition={
                  pathname === "/settings" || pathname.includes("settings")
                }
              >
                {(handleClick) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/settings"
                        className={`block truncate transition duration-150 ${
                          (pathname === "/settings" ||
                            pathname.includes("settings")) &&
                          "hover:text-slate-200"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <FiSettings
                              size={23}
                              className={`text-black-400 ${
                                (pathname === "/settings" ||
                                  pathname.includes("settings")) &&
                                "!text-primary-200"
                              }`}
                            />
                            <span
                              className={` font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-black-500 ${
                                (pathname === "/settings" ||
                                  pathname.includes("settings")) &&
                                "!text-primary-500"
                              }`}
                            >
                              Settings
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SideNavLinkGroup>

              {/* Monthly Budget */}
              {budget && (
                <li className="mt-4 bg-primary-50 p-4 rounded-[8px] hidden lg:block">
                  <div className="flex flex-col space-y-4">
                    <div className="budget">
                      <div className="flex justify-between items-center">
                        <h6 className="text-black-600 font-medium">
                          Monthly budget
                        </h6>
                        <button
                          type="button"
                          className="float-right"
                          onClick={handleBudgetOpen}
                        >
                          <GrClose />
                        </button>
                      </div>
                      <p className="text-black-500 text-sm mt-1">
                        You’re at 80% of your budget.
                      </p>
                    </div>
                    <Line />
                    <div className="flex items-center space-x-4">
                      <button
                        type="button"
                        onClick={handleBudgetOpen}
                        className="text-black-500 font-medium text-[14px]"
                      >
                        Dismiss
                      </button>
                      <Link
                        href="/upgrade"
                        className="text-primary-400 font-medium text-[14px]"
                      >
                        Upgrade plan
                      </Link>
                    </div>
                  </div>
                </li>
              )}

              <li className="mt-10 mb-5 border-t pt-6">
                <div className="flex justify-between">
                  <div className="flex space-x-4">
                    <Image src={Avatar1} alt="Avatar" width={40} height={40} />
                    <div className="flex flex-col space-y-1">
                      <p className="text-black-500 font-medium text-sm">
                        Karen Ijezie
                      </p>
                      <p className="text-black-500 text-sm">Karen@ricive.com</p>
                    </div>
                  </div>
                  <button type="button">
                    <FiLogOut size={20} />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-primary-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-primary-500" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
        {/* </Scrollbars> */}
      </div>
    </div>
  );
}

export default SideNav;
