import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <SEOHead
        title="404 - Page Not Found | SOLARQUENCH"
        description="The page you are looking for does not exist on SOLARQUENCH. Return to the homepage to explore our solar solutions."
        keywords="solarquench 404, page not found"
        url={`https://solarquench.com${location.pathname}`}
        type="article"
        robots="noindex, nofollow"
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Page Not Found</h1>
        <p className="mb-4 text-xl text-gray-600">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
