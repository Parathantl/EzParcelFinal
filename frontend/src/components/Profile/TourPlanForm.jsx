import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Country } from "country-state-city";
import { createTourPlan } from "../../redux/actions/tourPlan";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const TourPlanForm = ({ travelerId }) => {
  const { user } = useSelector((state) => state.user);
  const { success, error } = useSelector((state) => state.tourPlan);
  const [country, setCountry] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error);      
    }
    if (success) {
      toast.success("Tour Plan created successfully!");
      setCountry("");
      setStartDate("");
      setEndDate("")
    }
  }, [dispatch, error, navigate, success]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      createTourPlan({
        traveler: user._id,
        country,
        startDate,
        endDate,
      })
    );
    
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create Tour Plan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="w-[100%]">
              <label className="block pb-2">Country</label>
              <select
                className="w-[95%] border h-[40px] rounded-[5px]"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option value="">Choose your country</option>
                {Country.getAllCountries().map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
          >
            Create Tour Plan
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default TourPlanForm;
