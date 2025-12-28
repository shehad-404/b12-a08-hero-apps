import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/error-404.png"; // optional image

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <img
        src={errorImg}
        alt="404 Not Found"
        className="w-72 mb-6"
      />

      <h1 className="pt-6 text-3xl font-bold text-gray-800">
        Oops, page not found!
      </h1>

      <p className="text-gray-500 mt-2">
        The page you are looking for is not available.
      </p>

      {/* {error && (
        <p className="text-sm text-red-500 mt-2">
          {error.statusText || error.message}
        </p>
      )} */}

      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorPage;
