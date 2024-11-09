import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    experienceLevel: "",
    predictionInterest: [],
    dailyBudget: 0,
    monthlyReturn: 0,
    matchesPerDay: "",
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        updateExperienceLevel(state, action) {
            state.experienceLevel = action.payload;
        },
        updatePredictionInterest(state, action) {
            state.predictionInterest = action.payload;
        },
        updateDailyBudget(state, action) {
            state.dailyBudget = action.payload;
        },
        updateMonthlyReturn(state, action) {
            state.monthlyReturn = action.payload;
        },
        updateMatchProcessing(state, action) {
            state.matchesPerDay = action.payload;
            console.log(state);
        },
        resetForm(state) {
            return initialState;
        },
    },
});

export const {
    updateExperienceLevel,
    updatePredictionInterest,
    updateMatchProcessing,
    updateDailyBudget,
    updateMonthlyReturn,
    resetForm,
} = formSlice.actions;

export default formSlice.reducer;
