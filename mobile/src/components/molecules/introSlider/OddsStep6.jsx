// components/OddsStep6.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateExperienceLevel } from "@stores/formSlice";
import SelectionCardsContainer from "@components/atoms/SelectionCardsContainer";

const OddsStep6 = ({ onNext }) => {
    const dispatch = useDispatch();
    const [selectedOdds, setSelectedOdds] = useState("");

    const oddsOptions = [
        { label: "1.00 - 1.10", value: "1.00 - 1.10" },
        { label: "1.10 - 1.20", value: "1.10 - 1.20" },
        { label: "1.20 - 1.30", value: "1.20 - 1.30" },
        { label: "1.40 - 1.50", value: "1.40 - 1.50" },
        { label: "1.50 - 1.60", value: "1.50 - 1.60" },
        { label: "1.60 - 1.70", value: "1.60 - 1.70" },
        { label: "1.70 - 1.80", value: "1.70 - 1.80" },
        { label: "1.80 - 1.90", value: "1.80 - 1.90" },
        { label: "More Than 1.90", value: "More Than 1.90" },
    ];

    const handleSelect = (value) => {
        setSelectedOdds(value);
        dispatch(updateExperienceLevel(value));
        // onNext(); // Uncomment if you want to proceed automatically after selection
    };

    return (
        <SelectionCardsContainer
            title="What Odds Do You Use?"
            options={oddsOptions}
            selectedOption={selectedOdds}
            onSelect={handleSelect}
            type="textOnly"
            cardVariant="fullLengthIcon"
            customStyles={{ optionText: { marginLeft: 13 } }}
        />
    );
};

export default OddsStep6;
