import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-900">404</h1>
        <p className="text-2xl md:text-3xl font-light text-gray-600 mt-4">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <p className="text-gray-500 mt-2">
          It seems you&apos;ve hit a broken link or the page has been removed.
        </p>
        <Link to="/" className="mt-6 inline-block">
          <button className="mt-4 px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Go Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
