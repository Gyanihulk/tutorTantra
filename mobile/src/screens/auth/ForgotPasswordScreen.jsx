import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import Svg, { G, Mask, Path, Rect } from "react-native-svg";
import TextFields from "../../components/atoms/TextFields";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/DimenstionHelpers";
import Button from "../../components/atoms/Button";
// import * from "../../assets/images/forgotPassword.png"

export default function ForgotPasswordScreen() {
    const [email, setEmail] = useState("");
    return (
        <>
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
                    <Text style={styles.headerText}>Forget Password</Text>
                </View>

                {/* Illustration Image */}
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../../assets/images/forgotPassword.png")} // replace with your actual image path
                        style={styles.image}
                    />
                </View>

                {/* Main Text */}
                <Text style={styles.title}>Forget Password?</Text>
                <Text style={styles.description}>
                    Don’t worry! It occurs. Please enter the email address linked with your account
                </Text>

                {/* Input Field */}
                <TextFields
                    placeholderValue={"Enter your email"}
                    styles={styles.input}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                {/* Send Code Button */}
                <Button title={"Send Code"} size="large" style={styles.button} />
            </View>
        </>
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
        marginTop: verticalScale(58),
    },
    description: {
        color: "#FFFFFF",
        fontSize: 14,
        marginTop: verticalScale(10),
        lineHeight: verticalScale(22),
    },
    input: {
        height: verticalScale(45),
        backgroundColor: "#262628",
        borderRadius: moderateScale(10),
        paddingHorizontal: horizontalScale(15),
        color: "#FFFFFF",
        fontSize: moderateScale(16),
        marginTop: verticalScale(30),
    },
    button: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 50,
    },
});
