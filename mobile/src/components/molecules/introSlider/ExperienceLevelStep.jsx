// components/ExperienceLevelStep.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateExperienceLevel } from "@stores/formSlice";
import SelectionCardsContainer from "@components/atoms/SelectionCardsContainer";

const ExperienceLevelStep = ({ onNext }) => {
    const dispatch = useDispatch();
    const [selectedExperience, setSelectedExperience] = useState("");

    const experienceOptions = [
        { label: "No Experience", value: "No Experience" },
        { label: "Up to 1 Year", value: "Up to 1 Year" },
        { label: "Up to 3 Years", value: "Up to 3 Years" },
        { label: "Up to 5 Years", value: "Up to 5 Years" },
        { label: "Up to 10 Years", value: "Up to 10 Years" },
        { label: "More than 10 Years", value: "More than 10 Years" },
    ];

    const handleSelect = (value) => {
        setSelectedExperience(value);
        dispatch(updateExperienceLevel(value));
        // onNext(); // Move to the next step
    };

    return (
        <SelectionCardsContainer
            title="What is Your Experience Level?"
            options={experienceOptions}
            selectedOption={selectedExperience}
            onSelect={handleSelect}
            type="textOnly"
            cardVariant="fullLengthIcon"
            customStyles={{ optionText: { marginLeft: 13 } }}
        />
    );
};

export default ExperienceLevelStep;
