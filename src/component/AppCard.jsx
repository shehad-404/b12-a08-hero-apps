import { Link } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export default function AppCard({ app }) {
    return (
        <Link to={`/details/${app.id}`} className="shadow rounded p-4 hover:shadow">
            <img src={app.image} className="h-40 w-full object-cover" />
            <h3 className="mt-2 mb-2 text-left font-semibold">{app.title}</h3>
            <div className="flex justify-between">
                <p className="flex align-middle items-center font-medium px-1 text-gray-500 gap-1 bg-[#eae2e2]">
                <MdOutlineFileDownload className="text-green-500 "/> {app.downloads / 1000000}M
                </p>
                <p className="flex align-middle items-center text-amber-500 font-medium px-1 gap-1 bg-[#FFF0E1]">
                <FaStar className="text-amber-500 "/> {app.ratingAvg}
                </p>
            </div>
        </Link>
    );
}
