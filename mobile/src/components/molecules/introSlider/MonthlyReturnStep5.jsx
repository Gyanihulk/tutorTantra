import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { updateMatchProcessing } from "@stores/formSlice"; // Make sure to have this action in your Redux slice
import SelectionCardsContainer from "@components/atoms/SelectionCardsContainer";

const MonthlyReturnStep5 = ({ onNext }) => {
    const dispatch = useDispatch();
    const [selectedMatches, setSelectedMatches] = useState("");

    const returnOptions = [
        { label: "Negative Returns", value: "negative_returns" },
        { label: "UP TO 10%", value: "up_to_10" },
        { label: "UP TO 30%", value: "up_to_30" },
        { label: "UP TO 50%", value: "up_to_50" },
        { label: "UP TO 70%", value: "up_to_70" },
        { label: "UP TO 100%", value: "up_to_100" },
        { label: "UP TO 150%", value: "up_to_150" },
        { label: "UP TO 200%", value: "up_to_200" },
    ];

    const handleSelect = (value) => {
        setSelectedMatches(value);
        dispatch(updateMatchProcessing(value)); // Dispatch the selected option
        // onNext(); // Proceed to the next step
    };

    return (
        <SelectionCardsContainer
            title="What Is Your Monthly Return?"
            options={returnOptions}
            selectedOption={selectedMatches}
            onSelect={handleSelect}
            customStyles={{
                card: { padding: 10 },
                optionsContainer: { marginVertical:10 },
                optionsCard: { marginVertical:10 ,paddingVertical:16,justifyContent:"center"},
                optionText:{ textAlign: "center"}
            }}
        />
    );
};

export default MonthlyReturnStep5;
