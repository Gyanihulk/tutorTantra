import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import SplashScreenLayout from "@layouts/SplashLayout";
import { colors } from "@theme/colors";

const SplashScreen = () => {
    return (
        <SplashScreenLayout>
            <View style={styles.circleContainer}>
                <Image source={require("@assets/images/logo.png")} style={styles.logo} />
                <Image source={require("@assets/images/fontLogo.png")} style={styles.fontLogo} />
            </View>
        </SplashScreenLayout>
    );
};

const styles = StyleSheet.create({
    circleContainer: {
        width: 227,
        height: 227,
        borderRadius: 200,
        backgroundColor: colors.darkGray,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 30,
        transform: [{ scale: 1.85 }],
        marginVertical: 20,
    },
    fontLogo: {
        width: "150%",
        height: 50,
        transform: [{ scale: 0.45 }],
    },
});

export default SplashScreen;
