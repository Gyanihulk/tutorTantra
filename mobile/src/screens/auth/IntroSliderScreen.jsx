import React, { useState } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressBar from "@components/molecules/introSlider/ProgressBar";
import Button from "@components/atoms/Button";

import { IntroSliderStepOne } from "@components/organisms/introSlider/IntroSliderStepOne";
import { IntroSliderStepTwo } from "@components/organisms/introSlider/IntroSliderStepTwo";
import { IntroSliderStepThree } from "@components/organisms/introSlider/IntroSliderStepThree";
import { IntroSliderStepFour } from "@components/organisms/introSlider/IntroSliderStepFour";
import { IntroSliderStepFive } from "@components/organisms/introSlider/IntroSliderStepFive";
import { IntroSliderStepSix } from "@components/organisms/introSlider/IntroSliderStepSix";
import IntroSliderStepSeven from "@components/organisms/introSlider/IntroSliderStepSeven";
import { colors } from "@theme/colors";

export const IntroSliderScreen = () => {
    const [currentStep, setCurrentStep] = useState(7);

    const handleNextStep = () => {
        if (currentStep < 7) {
            setCurrentStep(currentStep + 1);
        }
    };

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return <IntroSliderStepOne />;
            case 2:
                return <IntroSliderStepTwo />;
            case 3:
                return <IntroSliderStepThree />;
            case 4:
                return <IntroSliderStepFour />;
            case 5:
                return <IntroSliderStepFive />;
            case 6:
                return <IntroSliderStepSix />;
                case 7:
                    return <IntroSliderStepSeven />;
            default:
                return <IntroSliderStepOne />;
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <ProgressBar currentStep={currentStep} totalSteps={7} />
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            {renderCurrentStep()}
            </ScrollView>
           
            {currentStep <7 && <Button title="Next" onPress={handleNextStep} size="large" textStyle={{ color: "black" }} />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 20,
        backgroundColor: colors.backgroundDark
    },
    scrollViewContainer: {
        flexGrow: 1, // Ensures ScrollView takes up remaining space
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.text,
        textAlign: "center",
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 16,
        color:  colors.text,
        textAlign: "center",
        marginBottom: 20,
    },
    image: {
        width: "100%",
        height: 300,
        resizeMode: "contain",
        marginVertical: 20,
    },
    smallBoxContainer: {
        position: "absolute",
        top: "40%", 
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-around",
    },
});
