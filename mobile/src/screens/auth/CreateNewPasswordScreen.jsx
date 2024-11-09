import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Svg, { G, Mask, Path, Rect } from "react-native-svg";
import TextFields from "../../components/atoms/TextFields";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/DimenstionHelpers";
import Button from "../../components/atoms/Button";

export default function CreateNewPasswordScreen() {
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    return (
        <View style={styles.container}>
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
                <Text style={styles.headerText}>Create New Password</Text>
            </View>

            {/* MainText */}

            <Text style={styles.description}>Your new password must be unique from those previously used.</Text>

            {/* Input Fields */}

            <View style={styles.bodyContainer}>
                <Text style={styles.inputLabel}>New Password</Text>
                <TextFields
                    placeholderValue={"Enter password"}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    styles={styles.input}
                />
                <Text style={styles.inputLabel}>Confirm Password</Text>
                <TextFields
                    placeholderValue={"Enter confirm password"}
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                    styles={styles.input}
                />
                <Button title={"Reset Password"} style={styles.button} size="large" />
            </View>
        </View>
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
        alignContent: "center",
    },
    description: {
        color: "#FFFFFF",
        fontSize: 16,
        marginTop: verticalScale(20),
        lineHeight: verticalScale(22),
        textAlign: "center",
        marginHorizontal: 35,
    },
    bodyContainer: {
        marginTop: verticalScale(45),
        // marginHorizontal: horizontalScale(20),
    },
    inputLabel: {
        alignSelf: "flex-start",
        color: "#FFFFFF",
        marginTop: verticalScale(30),
        fontSize: moderateScale(16),
    },

    input: {
        width: "100%",
        height: verticalScale(42),
        borderRadius: moderateScale(10),
        backgroundColor: "#262628",
        color: "#fff",
        paddingHorizontal: horizontalScale(15),
        marginTop: verticalScale(12),
    },
    button: {
        backgroundColor: "#2BC20E", // Green button
        // height: verticalScale(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: moderateScale(10),
        marginTop: verticalScale(40),
    },
});
