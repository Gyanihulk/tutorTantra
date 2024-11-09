import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "@theme/colors";

const variants = {
    primary: {
        backgroundColor: colors.primaryGreen,
    },
    secondary: {
        backgroundColor: "#2196f3",
    },
    danger: {
        backgroundColor: "#f44336",
    },
    outline: {
        backgroundColor: "transparent", // No background color for outline
        borderColor: colors.primaryGreen, // Add border color
        borderWidth: 2, // Define border width
    },
};

const sizes = {
    small: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    medium: {
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    large: {
        paddingVertical: 10,
        width: "100%",
    },
    textSizeSmall: {
        fontSize: 14,
    },
    textSizeMedium: {
        fontSize: 18,
    },
    textSizeLarge: {
        fontSize: 22,
    },
};

const Button = ({ onPress, title, variant = "primary", size = "medium", style, textStyle, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.button, variants[variant], sizes[size], style]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text
                style={[
                    styles.buttonText,
                    sizes[`textSize${capitalize(size)}`],
                    variant === "outline" ? { color: colors.primaryGreen } : {},
                    textStyle,
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        alignSelf: "center",
        marginBottom: 20,
    },
    buttonText: {
        color: "#000000",
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default Button;
