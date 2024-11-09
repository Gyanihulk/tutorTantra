import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import Svg, { G, Mask, Path, Rect } from "react-native-svg";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/DimenstionHelpers";
import { TextInput } from "react-native-gesture-handler";
import Button from "../../components/atoms/Button";

export default function OtpVerificationScreen() {
    // const [otpValue, setOtpValue] = useState("");
    const [otpValue, setOtpValue] = useState(Array(6).fill(""));
    const inputRef = useRef([]);

    const focusInput = (index) => {
        if (index >= 0 && index < inputRef.current.length) {
            inputRef.current[index].focus();
        }
    };
    const handleChange = (val, index) => {
        const newOtpValue = [...otpValue]; // Copy current OTP values
        newOtpValue[index] = val; // Set the new value at the current index
        setOtpValue(newOtpValue); // Update OTP values in state
        if (val && index < 5) {
            focusInput(index + 1); // Move to next input field if value is entered and it's not the last field
        }
    };

    const handleBackspace = (val, index) => {
        if (!val && index > 0) {
            const newOtpValue = [...otpValue]; // Copy the OTP array
            newOtpValue[index - 1] = ""; // Clear the previous input value
            setOtpValue(newOtpValue); // Update the state
            focusInput(index - 1); // Move to the previous input field on backspace if current field is empty
        }
    };

    const isAllFieldsFilled = () => otpValue.every((val) => val !== "");
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton}>
                        {/* <Icon name="arrow-back" size={30} color="#fff" /> */}
                        <Svg xmlns="http://www.w3.org/2000/svg" width="34" height="31" fill="none" viewBox="0 0 34 31">
                            <Rect width="33" height="30" x="0.5" y="0.5" stroke="#fff" strokeOpacity="0.2" rx="6.5" />
                            <Mask id="mask0" width="24" height="24" x="5" y="4" maskUnits="userSpaceOnUse">
                                <Path fill="#D9D9D9" d="M5 4h24v24H5z" />
                            </Mask>
                            <G mask="url(#mask0)">
                                <Path fill="#fff" d="m19 22-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6z" />
                            </G>
                        </Svg>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>OTP Verification</Text>
                </View>

                {/* Illustration Image */}
                <View style={styles.imageContainer}>
                    <Image source={require("../../assets/images/otpVerification.png")} style={styles.image} />
                </View>
                {/* Main Text */}
                <Text style={styles.title}>Enter Code</Text>
                <Text style={styles.description}>Enter the verification code we just sent to your email address</Text>

                {/* OTP Input Fields */}
                <View style={styles.otpContainer}>
                    {[...Array(6)].map((_, index) => (
                        <TextInput
                            key={index}
                            style={[styles.otpInput, otpValue[index] ? styles.filledInput : styles.otpInput]}
                            placeholder=""
                            ref={(ref) => (inputRef.current[index] = ref)}
                            keyboardType="number-pad"
                            maxLength={1}
                            onChangeText={(text) => handleChange(text, index)}
                            onKeyPress={({ nativeEvent }) => {
                                if (nativeEvent.key === "Backspace") {
                                    handleBackspace(otpValue[index], index); // Handle backspace navigation
                                }
                            }}
                            value={otpValue[index] || ""}
                        />
                    ))}
                </View>

                {/* Verify Button */}
                <Button
                    title={"Verify"}
                    size="large"
                    disabled={!isAllFieldsFilled()}
                    onPress={() => console.log(otpValue)}
                />

                {/* Resend Option */}
                <Text style={styles.resendText}>
                    Didn’t receive the code? <Text style={styles.resendLink}>Resend</Text>
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: horizontalScale(20),
        marginTop: verticalScale(40),
    },
    header: {
        height: moderateScale(50),
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    backButton: {
        position: "absolute",
        left: horizontalScale(0),
        top: verticalScale(10),
    },
    headerText: {
        color: "#FFFFFF",
        fontSize: moderateScale(22),
        fontWeight: "bold",
        textAlign: "center",
    },
    imageContainer: {
        alignItems: "center",
        marginTop: verticalScale(60),
    },
    image: {
        width: horizontalScale(252),
        height: verticalScale(284),
        resizeMode: "contain",
    },
    title: {
        color: "#FFFFFF",
        fontSize: moderateScale(22),
        fontWeight: "bold",
        marginTop: verticalScale(45),
    },
    description: {
        color: "#FFFFFF",
        fontSize: 14,
        marginTop: verticalScale(8),
        lineHeight: verticalScale(22),
    },
    verifyButton: {
        height: verticalScale(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: moderateScale(10),
        marginTop: verticalScale(50),
    },
    otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: verticalScale(20),
        marginBottom: verticalScale(30),
    },
    otpInput: {
        width: horizontalScale(50),
        height: verticalScale(50),
        backgroundColor: "#262829",
        borderRadius: moderateScale(10),
        textAlign: "center",
        fontSize: moderateScale(18),
        color: "#fff",
        borderColor: "#333", // Default border color
        borderWidth: moderateScale(2),
    },
    activeOtpInput: {
        borderColor: "#00C853", // Green border when there is input
    },
    focusedOtpInput: {
        borderColor: "#00C853", // Green border when input is focused
    },
    button: {
        backgroundColor: "#2BC20E", // Green button
        height: verticalScale(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: moderateScale(10),
        marginTop: verticalScale(8),
    },
    resendText: {
        color: "#FFFFFF",
        fontSize: moderateScale(14),
        textAlign: "center",
        marginTop: verticalScale(20),
    },
    resendLink: {
        color: "#2BC20E", // Green color for Resend link
        fontWeight: "bold",
    },
    filledInput: {
        borderColor: "#2BC20E", // Green border if the field is filled
    },

    activeButton: {
        backgroundColor: "#28a745", // Active green background
    },
});
