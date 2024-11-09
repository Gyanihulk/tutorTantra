// components/OddsStep6.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateExperienceLevel } from "@stores/formSlice";
import SelectionCardsContainer from "@components/atoms/SelectionCardsContainer";
import { moderateScale } from "@utils/DimenstionHelpers";

const OwnStrategyStep8 = ({ onNext }) => {
    const dispatch = useDispatch();
    const [selectedOdds, setSelectedOdds] = useState("");

    const strategyOption = [
        { label: "NO, I RELY ON LUCK", value: "NO, I RELY ON LUCK" },
        { label: "YES, I STICK TO IT", value: "YES, I STICK TO IT" },
    ];

    const handleSelect = (value) => {
        setSelectedOdds(value);
        dispatch(updateExperienceLevel(value));
        // onNext(); // Uncomment if you want to proceed automatically after selection
    };

    return (
        <SelectionCardsContainer
            title="Do You Have Your Own Strategy?"
            options={strategyOption}
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

export default OwnStrategyStep8;
