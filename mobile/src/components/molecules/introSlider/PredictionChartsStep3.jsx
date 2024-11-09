// components/ExperienceLevelStep.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateExperienceLevel } from "@stores/formSlice";
import SelectionCardsContainer from "@components/atoms/SelectionCardsContainer";
import { colors } from "../../../theme/colors";
const generateRandomArray = (length, min, max) => {
  return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
};
const PredictionChartsStep3 = ({ onNext }) => {
    const dispatch = useDispatch();
    const [selectedExperience, setSelectedExperience] = useState("");

    const chartData = [
        {
          value: "Match Winner",
          title: "Match Winner",
          averageAccuracy: "Average Accuracy",
          accuracyValue: "70%",
          data: generateRandomArray(10, 10, 100), 
          labels: ["","","","","","","","","",], 
          yAxisRange: { min: 10, max: 50 }, 
          color: "green"
        },
        {
          value: "Double Chance",
          title: "Double Chance",
          averageAccuracy: "Average Accuracy",
          accuracyValue: "76%",
          data: generateRandomArray(10, 10, 100), 
          labels: ["","","","","","","","",""], 
          yAxisRange: { min: 10, max: 50 }, 
          color: "green"
        },
        {
          value: "Goals Over Under",
          title: "Goals Over Under",
          averageAccuracy: "Average Accuracy",
          accuracyValue: "60%",
          data: generateRandomArray(10, 10, 100), 
          labels: ["","","","","","","","",""], 
          yAxisRange: { min: 10, max: 50 }, 
          color: "green"
        }
      ];
      

    const handleSelect = (value) => {
        setSelectedExperience(value);
        dispatch(updateExperienceLevel(value));
        // onNext(); // Move to the next step
    };

    return (
        <SelectionCardsContainer
            title="What Type of Predictions Are You Interested in?"
            options={chartData}
            selectedOption={selectedExperience}
            onSelect={handleSelect}
            cardVariant="fullLengthCharts"
            customStyles={{ optionText: { fontSize: 25,fontWeight:600 } ,optionLabel:{color:colors.primaryGreen}}}
        />
    );
};

export default PredictionChartsStep3;
