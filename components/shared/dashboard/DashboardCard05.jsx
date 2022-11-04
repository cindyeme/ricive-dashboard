import { useState } from "react";
import Image from 'next/image'
import { FiDownloadCloud, FiEdit2 } from "react-icons/fi";
import { DefaultButton } from "../../ui/buttons";
import { Spotify, Visa } from "../../../public";

function DashboardCard05() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="col-span-full xl:col-span-12 bg-white shadow-custom-2 rounded-[8px]">
      <header className="px-5 pt-4 pb-3 border-b border-slate-100 flex justify-between items-center">
        <h2 className="font-semibold text-slate-800">Recent transactions</h2>
        <div className="flex items-center space-x-3">
          <DefaultButton text="Download">
            <FiDownloadCloud />
          </DefaultButton>
          <DefaultButton text="View report" />
        </div>
      </header>
      <div className="p-3">
        {/* Tabs */}
        <div className="border border-black-300 inline-flex rounded-[8px] flex text-black-600 mb-7">
          <button
            type="button"
            className={`${
              activeTab === 1 && "bg-light-100"
            } btn font-medium text-[14px] border-r !rounded-r-none pl-4`}
            onClick={() => setActiveTab(1)}
          >
            View all
          </button>
          <button
            type="button"
            className={`${
              activeTab === 2 && "bg-light-100"
            } btn font-medium text-[14px] border-r !rounded-none`}
            onClick={() => setActiveTab(2)}
          >
            Monitored
          </button>
          <button
            type="button"
            className={`${
              activeTab === 2 && "bg-light-100"
            } btn font-medium text-[14px] !rounded-none`}
            onClick={() => setActiveTab(3)}
          >
            Unmonitored
          </button>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-sm text-black-400">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Transaction</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Amount</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Date</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Category</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Cards</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left"></div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex space-x-3 items-center">
                    {/* icon */}
                    <Image src={Spotify} alt="Spotify" width={40} height={40} />
                    <div className="text-black-800">Spotify</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-left">$-18.99</div>
                </td>
                <td className="p-2">
                  <div className="text-">Wed 1:00pm</div>
                </td>
                <td className="p-2">
                  <div className="text-left">Subscription</div>
                </td>
                <td className="p-2">
                  <div className="flex items-center space-x-4">
                    {/* visa */}
                    <Image src={Visa} alt="Visa" width={46} height={32} />
                    <div className="flex flex-col space-y-1.5 items-start">
                      <p className="text-sm text-black-500">Visa 123</p>
                      <p className="text-xs text-black-400">Expiry 06/2024</p>
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <button type="button" className="text-left"><FiEdit2 size={18} /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard05;
