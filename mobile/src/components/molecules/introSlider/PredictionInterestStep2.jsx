// components/PredictionInterestStep.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePredictionInterest } from "@stores/formSlice";
import SelectionCardsContainer from "@components/atoms/SelectionCardsContainer"; 

const PredictionInterestStep2 = ({ onNext }) => {
    const dispatch = useDispatch();
    const [selectedPrediction, setSelectedPrediction] = useState("");

    const predictionOptions = [
        { label: "Match Winner", value: "Match Winner", image: require("@assets/images/sliderScreen/prediction1.png") },
        { label: "Double Chance", value: "Double Chance", image: require("@assets/images/sliderScreen/prediction2.png") },
        { label: "Both Teams Score", value: "Both Teams Score", image: require("@assets/images/sliderScreen/prediction3.png") },
        { label: "Goals Over/Under", value: "Goals Over/Under", image: require("@assets/images/sliderScreen/prediction4.png") },
        { label: "Other", value: "Other", image: require("@assets/images/sliderScreen/prediction5.png") },
    ];

    const handleSelect = (value) => {
        setSelectedPrediction(value);
        dispatch(updatePredictionInterest(value));
        // onNext(); 
    };

    return (
        <SelectionCardsContainer
            title="What Type of Predictions Are You Interested In?"
            options={predictionOptions}
            selectedOption={selectedPrediction}
            onSelect={handleSelect}
            type="withImage" 
            customStyles={{
                card: { padding: 10 ,display:"flex",flexDirection:"column",justifyContent:"center"},
                optionsContainer: { padding: 10 },
                optionsCard: { display:"flex",flexDirection:"column"
                },
            }}
        />
    );
};

export default PredictionInterestStep2;
