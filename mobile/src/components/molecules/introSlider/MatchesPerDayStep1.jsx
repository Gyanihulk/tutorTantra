import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { updateMatchProcessing } from "@stores/formSlice"; // Make sure to have this action in your Redux slice
import SelectionCardsContainer from "@components/atoms/SelectionCardsContainer";

const MatchesPerDayStep1 = ({ onNext }) => {
    const dispatch = useDispatch();
    const [selectedMatches, setSelectedMatches] = useState("");

    const matchOptions = [
        { label: "1-2 Matches", value: "1-2" },
        { label: "3-5 Matches", value: "3-5" },
        { label: "3-5 Matches", value: "5-8" },
        { label: "6-10 Matches", value: "8-10" },
        { label: "11-15 Matches", value: "11-15" },
        { label: "16-20 Matches", value: "16-20" },
        { label: "I Don't Process", value: "I Don't Process" },
    ];

    const handleSelect = (value) => {
        setSelectedMatches(value);
        dispatch(updateMatchProcessing(value)); // Dispatch the selected option
        // onNext(); // Proceed to the next step
    };

    return (
        <SelectionCardsContainer
            title="How Many Matches Do You Process Per Day?"
            options={matchOptions}
            selectedOption={selectedMatches}
            onSelect={handleSelect}
            type="withImage" 
            customStyles={{
                card: { padding: 10 },
                optionsContainer: { marginVertical:10 },
                optionsCard: { marginVertical:10 ,paddingVertical:16,justifyContent:"center"},
                optionText:{ textAlign: "center"}
            }}
        />
    );
};

export default MatchesPerDayStep1;
