import React, { useEffect, useState } from 'react';
import '../App.css';
import AppCard from '../component/AppCard.jsx';
import apps from '../data/apps.json';
import HeroImage from '../assets/hero.png';
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

function Home() {
  // State for total downloads
  const [totalDownloads, setTotalDownloads] = useState(0);

  // Calculate total reviews and active apps
  const totalReviews = apps.reduce((sum, app) => sum + (app.reviews || 0), 0);
  const activeApps = apps.length;

  // Calculate total downloads on component mount
  useEffect(() => {
    const total = apps.reduce((sum, app) => sum + (app.downloads || 0), 0);
    setTotalDownloads(total);
  }, []);

  // State for showing all apps
  const [showAll, setShowAll] = useState(false);


  return (
    <div className="bg-[#F5F5F5]">
      {/* Banner / Hero */}
      <section className="px-8 text-center pt-20">
        <h1 className="text-4xl font-bold">
          We Build <span className="text-purple-600">Productive</span> Apps
        </h1>
        <p className="mt-4 text-gray-500">
          Innovative apps to simplify everyday life
        </p>
        <div className="flex justify-center gap-4 mt-6">
          {/* Play Store */}
          <a
            target='_blank'
            href="https://play.google.com"
            className="btn flex items-center gap-2 border border-gray-300 py-2 px-2"
          >
            <FaGooglePlay className="text-xl text-[#47b8ff]" />
            Play Store
          </a>

          {/* App Store */}
          <a
            target='_blank'
            href="https://www.apple.com/app-store/"
            className="btn flex items-center gap-2 border border-gray-300 py-2 px-2"
          >
            <FaAppStoreIos className="text-xl text-[#00BFFC]" />
            App Store
          </a>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="Hero Banner"
            className="mx-auto mt-10 rounded-lg w-full max-w-4xl"
          />
        </div>
      </section>

      {/* Stats Section - Full Width */}
      <section className="bg-linear-to-r from-purple-500 to-indigo-600 text-white py-16 shadow-lg">
        <div className="max-w-6xl mx-auto text-center px-8">
          <h2 className="text-3xl font-bold mb-10">Trusted By Millions, Built For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Total Downloads */}
            <div>
              <p className="text-gray-200">Total Downloads</p>
              <h3 className="text-5xl py-3 font-extrabold mt-2">{totalDownloads / 1_000_000}M</h3>
              <p className="text-gray-300 mt-1 text-sm">21% More Than Last Month</p>
            </div>
            {/* Total Reviews */} 
            <div>
              <p className="text-gray-200">Total Reviews</p>
              <h3 className="text-5xl py-3 font-extrabold mt-2">{totalReviews / 1_00_000}K</h3>
              <p className="text-gray-300 mt-1 text-sm">46% More Than Last Month</p>
            </div>
            {/* Active Apps */}
            <div>
              <p className="text-gray-200">Active Apps</p>
              <h3 className="text-5xl py-3 font-extrabold mt-2">{activeApps}+</h3>
              <p className="text-gray-300 mt-1 text-sm">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Apps */}
      <section >
        <div>
          <h1 className='text-3xl font-bold mt-10 '>Trending Apps</h1>
          <p className="text-gray-500 pt-4">Explore All Trending Apps on the Market deveoped by us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 mb-20 px-20">
          {(showAll ? apps : apps.slice(0, 8)).map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {/* Show All Button */}
        {apps.length > 8 && (
          <div className="flex justify-center pb-20">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
            >
              {showAll ? "Show Less" : "Show All"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
