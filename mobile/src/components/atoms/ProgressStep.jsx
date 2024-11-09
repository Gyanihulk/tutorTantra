import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { colors } from "@theme/colors";

const ProgressStep = ({ isActive, stepNumber }) => {
    return (
        <View style={[styles.step, isActive ? styles.activeStep : styles.inactiveStep]}>
            {isActive ? (
                <Icon name="check" size={15} color={colors.backgroundDark} />
            ) : (
                <Text style={styles.stepText}>{stepNumber}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    step: {
        width: 25,
        height: 25,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
    },
    activeStep: {
        backgroundColor: colors.primaryGreen,
        borderColor: colors.primaryGreen,
    },
    inactiveStep: {
        backgroundColor: "transparent",
        borderColor: colors.arsenic,
    },
    stepText: {
        color: colors.arsenic,
        fontWeight: "bold",
    },
});

export default ProgressStep;
