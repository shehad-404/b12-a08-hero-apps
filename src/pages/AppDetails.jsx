import { useParams } from "react-router-dom";
import { useState } from "react";
import apps from "../data/apps";
import { saveApp, isInstalled } from "../utils/localStorage";
import toast from "react-hot-toast";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

export default function AppDetails() {
  const { id } = useParams();
  const app = apps.find((a) => a.id === Number(id));

  if (!app) return <p className="text-center mt-20">App Not Found</p>;

  // Reactive install state
  const [installed, setInstalled] = useState(isInstalled(app.id));

  const handleInstall = () => {
    if (installed) {
      toast.error("App already installed!");
      return;
    }

    saveApp(app);
    setInstalled(true); // update UI immediately
    toast.success("App Installed Successfully");
  };

  return (
    <div className="px-20 py-10 bg-[#F5F5F5]">
      {/* ================= App Details ================= */}
      <div className=" flex flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-10 border-b  border-gray-300 pb-10">
        {/* App Image */}
        <img
          src={app.image}
          alt={app.title}
          className="w-72 rounded-lg"
        />

        {/* App Info */}
        <div className="text-left">
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <p className="text-gray-500 mt-1">
            Developed by{" "}
            <span className="text-purple-600">{app.companyName}</span>
          </p>

          <hr className="my-4 text-gray-300" />

          {/* Stats */}
          <div className="flex gap-10 mt-6">
            <div>
              <MdOutlineFileDownload className="text-green-500 text-4xl" />
              <p className="text-gray-500 text-sm py-1">Downloads</p>
              <p className="font-bold text-3xl">{app.downloads / 1_000_000}M</p>
            </div>
            <div>
              <FaStar className="text-amber-500 text-4xl" />
              <p className="text-gray-500 text-sm py-1">Average Ratings</p>
              <p className="font-bold text-3xl">{app.ratingAvg}</p>
            </div>
            <div>
              <GrLike className="text-purple-500 text-4xl" />
              <p className="text-gray-500 text-sm py-1">Total Reviews</p>
              <p className="font-bold text-3xl">{app.reviews / 1_00_000}K</p>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={installed}
            className={` cursor-pointer mt-6 px-6 py-3 rounded text-white font-medium transition ${installed
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
              }`}
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* ================= RATINGS ================= */}
      <div className="mt-12 border-b border-gray-300 pb-12">
        <h2 className="text-left text-xl font-bold mb-6">Ratings</h2>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={app.ratings}
              margin={{ left: 0 }}
            >
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" reversed />
              <Tooltip />
              <Bar dataKey="count" fill="#fb923c" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ================= DESCRIPTION ================= */}
      <div className="mt-12 text-left">
        <h2 className="text-xl font-bold mb-4">Description</h2>
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {app.description}
        </p>
      </div>
    </div>
  );
}
