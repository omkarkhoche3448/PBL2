import React from "react";
import { useParams } from "react-router-dom";
import CollegeInfo from "./CollegeInfo";

const Consultancypages = () => {
  const { countryName } = useParams();

  // Dynamic content for different countries
  const renderCountryInfo = (country) => {
    switch (country.toLowerCase()) {
      case "united states":
        return <CollegeInfo countryName={countryName} />;
      // Add more countries here with their respective components
      default:
        return (
          <div className="bg-white w-full rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">
              Coming Soon: {country} Offerings
            </h2>
            <p className="text-gray-600">
              We are currently working on expanding our consultancy services to{" "}
              {country}. Please check back later for updates.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className=" p-8 sm:p-12 ">
      <div className="ml-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Consultancy Offerings in {countryName.toUpperCase()}
        </h1>
        <p className="text-gray-600 mb-8">
          Explore the college programs and affiliated institutions in{" "}
          {countryName} offered by our consultancy.
        </p>
      </div>

        {/* Render country-specific information */}
        {renderCountryInfo(countryName)}
      </div>
    </div>
  );
};

export default Consultancypages;