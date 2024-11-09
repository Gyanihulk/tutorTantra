import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SplashScreenLayout = ({ children }) => {
    return <View style={styles.container}>{children || <Text>Loading...</Text>}</View>;
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
});

export default SplashScreenLayout;
