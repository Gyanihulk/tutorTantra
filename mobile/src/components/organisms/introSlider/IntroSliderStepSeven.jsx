import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MatchesPerDayStep1 from "@components/molecules/introSlider/MatchesPerDayStep1";
import ExperienceLevelStep from "@components/molecules/introSlider/ExperienceLevelStep";
import PredictionInterestStep2 from "@components/molecules/introSlider/PredictionInterestStep2";
import PredictionChartsStep3 from "@components/molecules/introSlider/PredictionChartsStep3";
import DailyBudgetStep4 from "@components/molecules/introSlider/DailyBudgetStep4";
import MonthlyReturnStep5 from "@components/molecules/introSlider/MonthlyReturnStep5";

import { useSelector } from "react-redux";
import Button from "@components/atoms/Button";
import InfoModal from "@components/atoms/InfoModal";
import { styles as baseStyles } from "@components/organisms/introSlider/styles";
import OddsStep6 from "@components/molecules/introSlider/OddsStep6";
import SpecialPredictionStep7 from "@components/molecules/introSlider/SpecialPredictionStep7";
import OwnStrategyStep8 from "@components/molecules/introSlider/OwnStrategyStep8";
const IntroSliderStepSeven = () => {
    const [step, setStep] = useState(7);
    const [isModalVisible, setModalVisible] = useState(false); // Modal visibility
    const { experienceLevel, predictionInterest, dailyBudget, monthlyReturn } = useSelector((state) => state.form);

    const handleNextStep = () => {
        if (step == 3) {
            setStep(step + 1);
            return;
        }
        setModalVisible(true); // Show modal when step is completed
    };

    const handleModalNext = () => {
        setModalVisible(false); // Close the modal

        if (step < 8) {
            setStep(step + 1); // Proceed to next step
        } else {
            // Submit the form when the last step is completed
            const formData = {
                experienceLevel,
                predictionInterest,
                dailyBudget,
                monthlyReturn,
            };
            // API call
            console.log("Submitting form data:", formData);
        }
    };

    const getModalContent = () => {
        switch (step) {
            case 0:
                return {
                    title: "What is Your Experience Level?",
                    heading: "Great!",
                    description: "You have selected your experience level. Let's move forward with your journey.",
                    image: require("@assets/images/sliderScreen/tick.png"), // Replace with your actual image path
                };
            case 1:
                return {
                    title: "How Many Matches Do You Process Per Day",
                    heading: "Done!",
                    description: "You have selected your Number of Matches. Let's continue!",
                    image: require("@assets/images/sliderScreen/thumb_up.png"), // Replace with your actual image path
                };
            case 2:
                return {
                    title: "Your Pridiction Interests",
                    heading: "Loading Statistic...!",
                    description:
                        "You have selected Type of Predictions Are You Interested In. Let's proceed to the next step.",
                    image: require("@assets/images/sliderScreen/loading50.png"), // Replace with your actual image path
                };
            case 4:
                return {
                    title: "What is Your Daily Budget?",
                    heading: "Wow!",
                    description: "We strongly recommended not using the entire budget using Ai predictions",
                    image: require("@assets/images/sliderScreen/wow.png"), // Replace with your actual image path
                };
            case 5:
                return {
                    title: "What is Your Monthly Return Target?",
                    heading: "You Can More!",
                    description: "You have selected your monthly return target. Now you are all set!",
                    image: require("@assets/images/sliderScreen/growth.png"), // Replace with your actual image path
                };
            case 6:
                return {
                    title: "What is Your Monthly Return Target?",
                    heading: "Excellent!",
                    description: "You have selected your monthly return target. Now you are all set!",
                    image: require("@assets/images/sliderScreen/success.png"), // Replace with your actual image path
                };
            case 7:
                return {
                    // title: "What is Your Monthly Return Target?",
                    heading: "Check!",
                    description:
                        "Before using predictions for a specific League our team make sure that AI performs well with them. This can be easily checked by visiting the league or team page and reviewing completed matches.",
                    image: require("@assets/images/sliderScreen/success.png"), // Replace with your actual image path
                };
            case 8:
                return {
                    title: "Do You Have Your Own Strategy?",
                    heading: "Check!",
                    description:
                        "Before using predictions for a specific League our team make sure that AI performs well with them. This can be easily checked by visiting the league or team page and reviewing completed matches.",
                    image: require("@assets/images/sliderScreen/strategy.png"), // Replace with your actual image path
                };
            default:
                return {};
        }
    };

    const renderStep = () => {
        console.log(step);
        switch (step) {
            case 0:
                return <ExperienceLevelStep onNext={handleNextStep} />;
            case 1:
                return <MatchesPerDayStep1 onNext={handleNextStep} />;
            case 2:
                return <PredictionInterestStep2 onNext={handleNextStep} />;
            case 3:
                return <PredictionChartsStep3 onNext={handleNextStep} />;
            case 4:
                return <DailyBudgetStep4 onNext={handleNextStep} />;
            case 5:
                return <MonthlyReturnStep5 onNext={handleNextStep} />;
            case 6:
                return <OddsStep6 onNext={handleNextStep} />;
            case 7:
                return <SpecialPredictionStep7 onNext={handleNextStep} />;
            case 8:
                return <OwnStrategyStep8 onNext={handleNextStep} />;
            default:
                return <Text>All steps completed!</Text>;
        }
    };

    const modalContent = getModalContent();

    return (
        <>
            <Text style={styles.title}>Personal Advisor</Text>
            <Text style={styles.subtitle}>
                The advisor will help you choose the right strategy with AI Football predictions
            </Text>
            {renderStep()}
            <InfoModal
                visible={isModalVisible}
                onClose={() => setModalVisible(false)}
                title={modalContent.title}
                heading={modalContent.heading}
                image={modalContent.image}
                description={modalContent.description}
                onNext={handleModalNext}
            />
            <Button title="Next" onPress={handleNextStep} size="large" textStyle={{ color: "black" }} />
        </>
    );
};
const styles = StyleSheet.create({
    ...baseStyles,
});
export default IntroSliderStepSeven;
