import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import SmallBox from "@components/atoms/SmallBox";
import { styles } from "@components/organisms/introSlider/styles";

export const IntroSliderStepTwo = () => {
    return (
        <>
            <Text style={styles.title}>Line Ups</Text>
            <Text style={styles.subtitle}>Use the power of AI to your advantage</Text>
            <View style={styles.imageContainer}>
                <Image source={require("@assets/images/sliderScreen/2.png")} style={styles.overlapImage} />
                <Image source={require("@assets/images/sliderScreen/mobileDesign.png")} style={styles.image} />
            </View>
            <View style={styles.overlappingContainer}>
                <SmallBox
                    label="Prediction type"
                    backgroundColor="green"
                    positionStyles={{ top: 290, left: 35, width: 150, height: 35, paddingVertical: 0 }}
                    type="onlyLabel"
                />
                <SmallBox
                    label="Average odd"
                    backgroundColor="green"
                    positionStyles={{ top: 350, left: 225, width: 110, height: 35, paddingVertical: 0 }}
                    type="onlyLabel"
                />
                <SmallBox
                    label="Probability according to AI"
                    backgroundColor="red"
                    positionStyles={{ top: 420, left: 35, width: 200, height: 35, paddingVertical: 0 }}
                    type="onlyLabel"
                />
            </View>
        </>
    );
};
