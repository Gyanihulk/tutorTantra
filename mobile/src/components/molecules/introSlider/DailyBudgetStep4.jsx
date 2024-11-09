import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateExperienceLevel } from "@stores/formSlice";
import SelectionCardsContainer from "@components/atoms/SelectionCardsContainer";

const DailyBudgetStep4 = ({ onNext }) => {
    const dispatch = useDispatch();
    const [selectedExperience, setSelectedExperience] = useState("");


    const budgetOptions = [
        { label: "UP TO $50", value: "UP TO $50" },
        { label: "UP TO $100", value: "UP TO $100" },
        { label: "UP TO $150", value: "UP TO $150" },
        { label: "UP TO $200", value: "UP TO $200" },
        { label: "MORE THAN $350", value: "MORE THAN $350" },
    ];

    const handleSelect = (value) => {
        setSelectedExperience(value);
        dispatch(updateExperienceLevel(value));
        // onNext(); // Move to the next step
    };

    return (
        <SelectionCardsContainer
             title="What Is Your Daily Budget?"
            options={budgetOptions}
            selectedOption={selectedExperience}
            onSelect={handleSelect}
            type="textOnly"
            cardVariant="fullLengthIcon"
            customStyles={{ optionText: { marginLeft: 13 } }}
        />
    );
};

export default DailyBudgetStep4;
