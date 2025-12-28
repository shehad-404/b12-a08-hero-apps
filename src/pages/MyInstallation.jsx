import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { removeApp } from "../utils/localStorage";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export default function MyInstallation() {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("high"); // default: high to low

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(data);
  }, []);

  const handleUninstall = (id) => {
    removeApp(id);
    const updatedApps = installedApps.filter(app => app.id !== id);
    setInstalledApps(updatedApps);
    toast.success("App Uninstalled Successfully");
  };

  // Sorting by app size
  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "high") return b.size - a.size; // high to low
    else return a.size - b.size; // low to high
  });

  if (installedApps.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-gray-600">
          No Installed Apps
        </h2>
        <p className="text-gray-400 mt-2">
          Install apps to see them here
        </p>
      </div>
    );
  }

  return (
    <section className="px-6 md:px-12 py-10 bg-[#F5F5F5] min-h-screen">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500 mt-1">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Counter & Sort */}
      <div className="flex justify-between items-center mb-6">
        {/* Counter */}
        <p className="text-gray-700 font-medium">
          {installedApps.length} App{installedApps.length > 1 ? "s" : ""} Found
        </p>

        {/* Sort */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="high">Size: High to Low</option>
          <option value="low">Size: Low to High</option>
        </select>
      </div>

      {/* Installed Apps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
        {sortedApps.map(app => (
          <div
            key={app.id}
            className="flex gap-20 justify-between shadow rounded-xl p-4 hover:shadow-lg transition bg-white"
          >
            <div className="grid grid-cols-2">
              <img
                src={app.image}
                alt={app.title}
                className="h-20 w-20 object-cover rounded-lg"
              />

              <div>
                <h3 className="text-left mt-3 font-semibold text-lg text-purple-600">
                  {app.title}
                </h3>

                {/* <p className="text-sm text-gray-500 mt-1 gap-3">
                  ⭐ {app.ratingAvg}   ⬇ {app.downloads / 1_000_000}M  📦 {app.size} MB
                </p> */}
                <p className="flex text-sm text-gray-500 mt-1 gap-3">
                 <span className="flex items-center gap-1"><FaStar className="text-amber-500 "/>  {app.ratingAvg} </span>   
                 <span className="flex items-center gap-1"><MdOutlineFileDownload className="text-green-500 "/> {app.downloads / 1_000_000}M </span>
                <span>{app.size} MB</span>
                </p>

              </div>
            </div>

            <button
              onClick={() => handleUninstall(app.id)}
              className="cursor-pointer h-12 mt-4 px-2 bg-green-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
