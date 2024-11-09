import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import SmallBox from "@components/atoms/SmallBox";
import { styles } from "@components/organisms/introSlider/styles";

export const IntroSliderStepOne = () => {
    return (
        <>
            <Text style={styles.title}>Ai Prediction</Text>
            <Text style={styles.subtitle}>Use the power of AI to your advantage</Text>
            <View style={styles.imageContainer}>
                <Image source={require("@assets/images/sliderScreen/1.png")} style={styles.overlapImage} />
                <Image source={require("@assets/images/sliderScreen/mobileDesign.png")} style={styles.image} />
            </View>
            <View style={styles.overlappingContainer}>
                <SmallBox
                    label="Under 5.5"
                    percentage="12"
                    odds="3.50"
                    backgroundColor="green"
                    positionStyles={{ top: 290, left: 35 }}
                />
                <SmallBox
                    label="Over"
                    percentage="55"
                    odds="3.25"
                    backgroundColor="green"
                    positionStyles={{ top: 350, left: 225 }}
                />
                <SmallBox
                    label="NO"
                    percentage="6"
                    odds="1.45"
                    backgroundColor="red"
                    positionStyles={{ top: 420, left: 35 }}
                />
            </View>
        </>
    );
};
