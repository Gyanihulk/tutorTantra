import React, { useState } from "react";
import { Image, View, StyleSheet, Text, SafeAreaView, Touchable, TouchableOpacity } from "react-native";
import TextFields from "../../components/atoms/TextFields";
import Button from "../../components/atoms/Button";
import { horizontalScale, verticalScale, moderateScale } from "../../utils/DimenstionHelpers.js";
const RegisterScreen = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPaasword] = useState("");
    return (
        <>
            <View style={styles.headContainer}>
                <Image
                    source={{
                        uri: "https://s3-alpha-sig.figma.com/img/9fba/7e02/4295145092d3a7449062e091973c9382?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hO5MnOOmKL~AEx54pynpaJJb3XbEv1ejkmZIJoudsWSZgbn-YOHjx703~fvqiW1PQo6JRIF0rPgAOMnaLCR9XqcPgQ1pSQ8OdZNjyxm76UveQORyHzG~CfLBDpz89oqW5H-64ZY~VlfL3GWXMFsMe4EaiJRiMlnZ3lMx0PaQCEitkWETngUXGFqL2~LbJ5Gfa-7-FIDT8qTSuhL7cC8mBQu0JHjIgPq9izuNTHIKb8i~VNnavXesvvdjipF-fvIo7mg1DLWkhMHPSRAnvtl2--cuCsfS0oX-5y6b38Z8lGhgFcOOvJzQ5EZHl227ZPYm9foH-AZNBmjpRhYskgP1xw__",
                    }}
                    style={styles.logo}
                />
                <View style={styles.headingTexts}>
                    <Text style={styles.firstName}>TUTOR </Text>
                    <Text style={styles.lastName}>TANTA</Text>
                </View>
            </View>

            <View style={styles.bodyContainer}>
                <Text style={styles.title}>Register</Text>
                <Text style={styles.subtitle}>Enter your personal information</Text>
                <Text style={styles.inputLabel}>User Name</Text>
                <TextFields
                    placeholderValue={"Enter your name"}
                    value={userName}
                    onChangeText={(text) => setUserName(text)}
                    keyboardType={"default"}
                    styles={styles.input}
                />
                <Text style={styles.inputLabel}>Email</Text>
                <TextFields
                    placeholderValue={"Enter your email"}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    styles={styles.input}
                />
                <Text style={styles.inputLabel}>Password</Text>
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
                    onChangeText={(text) => setConfirmPaasword(text)}
                    styles={styles.input}
                />
                <Button
                    title={"Register"}
                    size="large"
                    style={styles.btn}
                    onPress={() => console.log(userName, email, password, confirmPassword)}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    headContainer: {
        alignItems: "center",
        marginTop: verticalScale(52),
        // justifyContent: "center",
    },
    logo: {
        width: horizontalScale(98),
        height: verticalScale(72),
    },
    headingTexts: {
        marginTop: verticalScale(16),
        flexDirection: "row",
    },
    firstName: {
        color: "#FFFFFF",
        fontSize: moderateScale(22),
        // fontWeight: "bold",
        fontFamily: "Signika-Bold",
    },
    lastName: {
        color: "#2BC20E",
        fontSize: moderateScale(22),
        // fontWeight: "bold",
        fontFamily: "Signika-Bold",
    },

    bodyContainer: {
        marginTop: verticalScale(25),
        marginHorizontal: horizontalScale(20),
    },
    inputLabel: {
        alignSelf: "flex-start",
        color: "#fff",
        marginTop: verticalScale(22),
        fontSize: moderateScale(16),
    },
    btn: {
        marginTop: verticalScale(28),
    },
    title: {
        fontSize: moderateScale(22),
        fontWeight: "bold",
        color: "#fff",
        marginTop: verticalScale(28),
        // fontFamily:'Roboto'
    },
    subtitle: {
        fontSize: moderateScale(14),
        color: "#bdc3c7",
        marginTop: verticalScale(12),
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
});
export default RegisterScreen;
