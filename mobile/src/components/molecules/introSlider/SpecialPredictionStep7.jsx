// components/OddsStep6.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateExperienceLevel } from "@stores/formSlice";
import SelectionCardsContainer from "@components/atoms/SelectionCardsContainer";
import { moderateScale } from "../../../utils/DimenstionHelpers";

const SpecialPredictionStep7 = ({ onNext }) => {
    const dispatch = useDispatch();
    const [selectedOdds, setSelectedOdds] = useState("");

    const specialPridiction = [
        { label: "ONLY SPECIFIC ONES", value: "ONLY SPECIFIC ONES" },
        { label: "IT DOESN’T MATTER", value: "IT DOESN’T MATTER" },
    ];

    const handleSelect = (value) => {
        setSelectedOdds(value);
        dispatch(updateExperienceLevel(value));
        // onNext(); // Uncomment if you want to proceed automatically after selection
    };

    return (
        <SelectionCardsContainer
            title="Do You Want To Use Predictions For Specific Leagues and teams, or does it not matter?"
            options={specialPridiction}
            selectedOption={selectedOdds}
            onSelect={handleSelect}
            type="textOnly"
            cardVariant="fullLengthCenterText"
            customStyles={{
                optionText: { marginLeft: 13 },
                optionsCard: { width: "100%", padding: 15, justifyContent: "center"},
                optionText:{ fontSize: moderateScale(15),fontWeight:600 }
            }}
        />
    );
};

export default SpecialPredictionStep7;
