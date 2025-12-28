import { useState } from "react";
import "./App.css";
import AppCard from "./component/AppCard.jsx";
import apps from "./data/apps.json";
import AppError from "./assets/App-Error.png";
import { Link } from "react-router-dom";

function App() {
  // App data states
  // State for search query
  const [search, setSearch] = useState(apps);
  const [loading, setLoading] = useState(false); //  loader state

  // Handle search input
  const handleSearch = (e) => {
     // set the search text
    const searchText = e.target.value;
    setLoading(true); // start loader

    setTimeout(() => {
      const result = apps.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );

      // set the filtered result to Apps state
      setSearch(result);
      setLoading(false); // stop loader
    }, 400); // simulate delay
  };

  return (
    <div>
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold mt-10">Our All Applications</h1>
        <p className="text-gray-500 pt-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Count + Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-20 mt-10 gap-4">
        {/* Apps Count */}
        <p className="font-bold">
          ({search.length}) Apps Found
        </p>

        {/* Search Bar */}
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search Apps..."
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
        />
      </div>

      {/* Apps Grid / Loader / Error */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 mb-20 px-20">
        {loading ? (
          // Loading Spinner
          <div className="col-span-4 flex justify-center py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-600 border-t-transparent"></div>
          </div>
        ) : search.length > 0 ? (
          // Apps List
          search.map(app => (
            <AppCard key={app.id} app={app} />
          ))
        ) : (
          // No Apps Found
          <div className="col-span-4 flex flex-col items-center justify-center text-center py-20">
            <img className="mb-6 w-64" src={AppError} alt="app not found" />
            <h2 className="uppercase font-bold text-3xl">
              Oops!! App Not Found
            </h2>
            <p className="mb-4 text-gray-500">No Apps Found</p>
            <Link to="/">
              <button className="cursor-pointer bg-purple-600 text-white py-3 rounded w-32">
                Go Back
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
