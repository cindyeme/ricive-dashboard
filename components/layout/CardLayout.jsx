import React from "react";
import Link from "next/link";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import LineChart from "../shared/charts/LineChart01";
import EditMenu from "../template/EditMenu";

const CardLayout = (props) => {
  const {title,value, children, down, percentage } = props;
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white rounded-[8px] border shadow-custom-2">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h6 className="h6">{title}</h6>
          {/* Menu button */}
          <EditMenu className="relative inline-flex">
            <li>
              <Link
                className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
                href="#0"
              >
                Option 1
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
                href="#0"
              >
                Option 2
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
                href="#0"
              >
                Remove
              </Link>
            </li>
          </EditMenu>
        </header>
      </div>
      <div className="grid grid-cols-2 px-5">
        <div className="mt-6">
          <h1 className="h1 font-semibold">{value}</h1>
          <div className="flex items-center mt-3">
            {down ? (
              <FaArrowDown size={15} className="text-error" />
            ) : (
              <FaArrowUp size={15} className="text-success" />
            )}
            <span className={` ${down ? 'text-error': 'text-primary-500'} text-sm px-1 font-semibold`}>
              {`${percentage}% `}
            </span>
            <span className="text-sm text-black-400 font-semibold">
              vs last month
            </span>
          </div>
        </div>
        {/* Chart built with Chart.js 3 */}
        {children}
      </div>
    </div>
  );
};

export default CardLayout;
