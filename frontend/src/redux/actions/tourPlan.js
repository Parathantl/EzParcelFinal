import axios from "axios";
import { server } from "../../server";

export const createTourPlan = (tourPlan) => async (dispatch) => {
  try {
    dispatch({
      type: "tourPlanCreateRequest",
    });

    // Make the API request
    const { data } = await axios.post(`${server}/tour-plan`, tourPlan,         
    { withCredentials: true }
  );

    dispatch({
      type: "tourPlanCreateSuccess",
      payload: data.tourPlan,
    });

  } catch (error) {
    dispatch({
      type: "tourPlanCreateFail",
      payload: error.response.data.message,
    });
  }
};

// get All Tour Plans
export const getAllTourPlansForUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllTourPlansForUserRequest",
    });

    const { data } = await axios.get(`${server}/tour-plan`,
      { withCredentials: true }
    );

    dispatch({
      type: "getAllTourPlansForUserSuccess",
      payload: data.tourPlan,
    });
  } catch (error) {
    dispatch({
      type: "getAllTourPlansForUserFailed",
      payload: error.response.data.message,
    });
  }
};

// get all products
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProductsRequest",
    });

    const { data } = await axios.get(`${server}/product/get-all-products`);
    dispatch({
      type: "getAllProductsSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "getAllProductsFailed",
      payload: error.response.data.message,
    });
  }
};
