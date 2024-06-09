import { useState } from "react";
import Statistics from "./Statistics";
import SiteServices from "./SiteServices";
import Faq from "./Faq";

const Services = () => {
  const [activeTab, setActiveTab] = useState("stats");
  return (
    <div>
      <div className="mt-16">
        <h1 className="text-2xl md:text-3xl mt-16 mb-8 text-center font-sans font-bold dark:text-gray-200">
          <span className="border-l-4 border-slate-900 pl-2">
            Sites Performance
          </span>
        </h1>
      </div>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5 md:mb-10 lg:mb-20">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select tab
          </label>
          <select
            id="tabs"
            className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setActiveTab(e.target.value)}
          >
            <option value="stats">Statistics</option>
            <option value="about">Services</option>
            <option value="faq">FAQ</option>
          </select>
        </div>
        <ul
          className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse"
          id="fullWidthTab"
          role="tablist"
        >
          <li className="w-full">
            <button
              type="button"
              role="tab"
              aria-controls="stats"
              aria-selected={activeTab === "stats"}
              className={`inline-block w-full p-4 rounded-ss-lg ${
                activeTab === "stats"
                  ? "bg-slate-900 text-white"
                  : "bg-gray-50 text-black hover:bg-gray-100"
              } focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-lg font-semibold`}
              onClick={() => setActiveTab("stats")}
            >
              Statistics
            </button>
          </li>
          <li className="w-full">
            <button
              type="button"
              role="tab"
              aria-controls="about"
              aria-selected={activeTab === "about"}
              className={`inline-block w-full p-4 ${
                activeTab === "about"
                  ? "bg-slate-900 text-white"
                  : "bg-gray-50 text-black hover:bg-gray-100"
              } focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-lg font-semibold`}
              onClick={() => setActiveTab("about")}
            >
              Services
            </button>
          </li>
          <li className="w-full">
            <button
              type="button"
              role="tab"
              aria-controls="faq"
              aria-selected={activeTab === "faq"}
              className={`inline-block w-full p-4 rounded-se-lg ${
                activeTab === "faq"
                  ? "bg-slate-900 text-white"
                  : "bg-gray-50 text-black hover:bg-gray-100"
              } focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-lg font-semibold`}
              onClick={() => setActiveTab("faq")}
            >
              FAQ
            </button>
          </li>
        </ul>
        <div className="border-t border-gray-200 dark:border-gray-600">
          <div
            className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${
              activeTab === "stats" ? "block" : "hidden"
            }`}
            id="stats"
            role="tabpanel"
            aria-labelledby="stats-tab"
          >
            <Statistics />
          </div>
          <div
            className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${
              activeTab === "about" ? "block" : "hidden"
            }`}
            id="about"
            role="tabpanel"
            aria-labelledby="about-tab"
          >
            <SiteServices />
          </div>
          <div
            className={`p-4 bg-white rounded-lg dark:bg-gray-800 ${
              activeTab === "faq" ? "block" : "hidden"
            }`}
            id="faq"
            role="tabpanel"
            aria-labelledby="faq-tab"
          >
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
