import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  tourPlans: [],
  error: null,
  success: false,
};

export const tourPlanReducer = createReducer(initialState, {
  tourPlanCreateRequest: (state) => {
    state.isLoading = true;
  },
  tourPlanCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.tourPlans = action.payload;
    state.success = true;
  },
  tourPlanCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // get all products
  getAllTourPlansForUserRequest: (state) => {
    state.isLoading = true;
  },
  getAllTourPlansForUserSuccess: (state, action) => {
    state.isLoading = false;
    state.tourPlans = action.payload;
  },
  getAllTourPlansForUserFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  
  clearErrors: (state) => {
    state.error = null;
  },
});
