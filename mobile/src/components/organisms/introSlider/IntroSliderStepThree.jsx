import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { styles } from "@components/organisms/introSlider/styles";

export const IntroSliderStepThree = () => {
    return (
        <>
            <Text style={styles.title}>Summary</Text>
            <Text style={styles.subtitle}>Convenient filtering to find suitable matches</Text>
            <View style={styles.imageContainer}>
                <Image source={require("@assets/images/sliderScreen/3.png")} style={styles.overlapImage} />
                <Image source={require("@assets/images/sliderScreen/mobileDesign.png")} style={styles.image} />
            </View>
        </>
    );
};
