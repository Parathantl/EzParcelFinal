import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from "react";
import { getAllTourPlansForUser } from '../../redux/actions/tourPlan';

const TourPlanList = () => {
  const { tourPlans, loading } = useSelector((state) => state.tourPlan);
  const { isSeller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllTourPlansForUser());
  }, [dispatch]);

  const handleSendMessage = (planId) => {
    // Placeholder for sending a message logic
    alert(`Message sent to traveler for tour plan: ${planId}`);
  };

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tour Plans</h2>
      {tourPlans.length === 0 ? (
        <p className="text-center text-lg text-gray-600">No tour plans found</p>
      ) : (
        <ul className="space-y-4">
          {tourPlans.map((plan) => (
            <li
              key={plan._id}
              className="p-4 bg-gray-100 rounded-md shadow-md space-y-2"
            >
              <p className="text-lg font-semibold">
                Country: <span className="font-normal">{plan.country}</span>
              </p>
              <p>
                From:{" "}
                <span className="font-semibold">
                  {new Date(plan.startDate).toLocaleDateString()}
                </span>{" "}
                To:{" "}
                <span className="font-semibold">
                  {new Date(plan.endDate).toLocaleDateString()}
                </span>
              </p>
             { isSeller && <button
                onClick={() => handleSendMessage(plan._id)}
                className="mt-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
              >
                Send Message
              </button> }
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TourPlanList;
