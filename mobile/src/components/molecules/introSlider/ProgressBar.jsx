import React from "react";
import { View, StyleSheet } from "react-native";
import ProgressStep from "@components/atoms/ProgressStep";
import { colors } from "@theme/colors";

const ProgressBar = ({ currentStep, totalSteps }) => {
    const stepsArray = Array.from({ length: totalSteps }, (_, index) => index + 1);

    return (
        <View style={styles.progressBar}>
            {stepsArray.map((step, index) => (
                <React.Fragment key={step}>
                    <ProgressStep isActive={step < currentStep} stepNumber={step} />
                    {index !== totalSteps - 1 && <View style={styles.connector} />}
                </React.Fragment>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    progressBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
    connector: {
        width: 25,
        height: 4,
        backgroundColor: colors.arsenic,
    },
});

export default ProgressBar;
