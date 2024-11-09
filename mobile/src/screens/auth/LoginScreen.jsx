import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import TextFields from "../../components/atoms/TextFields";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/DimenstionHelpers";
import Button from "../../components/atoms/Button";
import Svg, { ClipPath, Defs, G, Path, Pattern, Rect, Use } from "react-native-svg";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <View style={styles.headContainer}>
                <Image
                    source={{
                        // eslint-disable-next-line quotes
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
                <Text style={styles.title}>Login</Text>
                <Text style={styles.subtitle}>Login to continue usnig the app</Text>

                <Text style={styles.inputLabel}>Email</Text>
                <TextFields
                    placeholderValue={"Enter your email"}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType={"default"}
                    styles={styles.input}
                />
                <Text style={styles.inputLabel}>Password</Text>
                <TextFields
                    placeholderValue={"Enter password"}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    keyboardType={"default"}
                    styles={styles.input}
                />

                <View style={{ alignItems: "flex-end", marginTop: verticalScale(15) }}>
                    <Text style={{ color: "#FFFFFF" }}>Forgot Password ?</Text>
                </View>

                <Button title={"Login"} size="large" style={styles.btn} onPress={() => console.log(email, password)} />

                <View style={{ alignItems: "center", marginTop: verticalScale(10) }}>
                    <Text style={{ color: "#FFFFFF" }}>Or Login With</Text>
                </View>

                <View style={styles.socialContainer}>
                    <TouchableOpacity>
                        <Svg width="83" height="46" viewBox="0 0 83 46" fill="none">
                            {/* Background rectangle */}
                            <Rect width="83" height="46" rx="10" fill="#262628" />

                            {/* Logo Path */}
                            <Path
                                d="M14.405 16.1893L15.2039 10.9806H10.2063V7.60042C10.2063 6.17542 10.9044 4.7864 13.1428 4.7864H15.4151V0.351933C15.4151 0.351933 13.3529 0 11.3814 0C7.2654 0 4.57524 2.49455 4.57524 7.01068V10.9806H0V16.1893H4.57524V28.7811C5.50664 28.9271 6.44801 29.0002 7.39078 29C8.34863 29 9.28889 28.925 10.2063 28.7811V16.1893H14.405Z"
                                fill="#429AFD"
                                transform="translate(30,9)"
                            />
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Svg width="83" height="46" viewBox="0 0 83 46" fill="none">
                            {/* Background */}
                            <Rect width="83" height="46" rx="10" fill="#262628" />

                            {/* Logo */}
                            <G transform="translate(28, 8)">
                                <Svg width="27" height="31" viewBox="0 0 27 31" fill="none">
                                    <G clipPath="url(#clip0_2026_671)">
                                        <Path
                                            d="M25.5647 24.1584C25.0958 25.2415 24.5409 26.2384 23.898 27.155C23.0216 28.4045 22.304 29.2694 21.751 29.7497C20.8937 30.5381 19.9753 30.9418 18.9917 30.9648C18.2856 30.9648 17.4341 30.7639 16.4429 30.3563C15.4484 29.9506 14.5345 29.7497 13.6989 29.7497C12.8225 29.7497 11.8826 29.9506 10.8772 30.3563C9.87033 30.7639 9.05919 30.9763 8.43901 30.9973C7.49584 31.0375 6.55573 30.6223 5.61734 29.7497C5.0184 29.2273 4.26926 28.3318 3.37182 27.0631C2.40893 25.7084 1.61731 24.1374 0.997136 22.3463C0.332953 20.4117 0 18.5384 0 16.7248C0 14.6472 0.448912 12.8554 1.34808 11.3539C2.05474 10.1478 2.99485 9.19639 4.17148 8.49795C5.3481 7.79952 6.61945 7.4436 7.98857 7.42083C8.73771 7.42083 9.72012 7.65256 10.9409 8.10798C12.1583 8.56493 12.94 8.79666 13.2827 8.79666C13.5389 8.79666 14.4073 8.5257 15.8794 7.98551C17.2715 7.48455 18.4464 7.27713 19.4089 7.35883C22.017 7.56932 23.9764 8.59746 25.2795 10.4497C22.947 11.8631 21.7931 13.8426 21.8161 16.382C21.8371 18.3601 22.5547 20.0061 23.965 21.313C24.6041 21.9196 25.3178 22.3884 26.1119 22.7214C25.9397 23.2208 25.7579 23.6992 25.5647 24.1584ZM19.583 0.620177C19.583 2.17053 19.0166 3.61809 17.8876 4.95794C16.5252 6.55075 14.8773 7.47116 13.0902 7.32592C13.0674 7.13993 13.0542 6.94418 13.0542 6.73847C13.0542 5.25013 13.7022 3.65732 14.8528 2.35497C15.4272 1.69558 16.1578 1.14729 17.0437 0.70992C17.9278 0.279071 18.764 0.0408025 19.5505 0C19.5734 0.207258 19.583 0.414549 19.583 0.620177Z"
                                            fill="#B3B3B3"
                                        />
                                    </G>
                                    <Defs>
                                        <ClipPath id="clip0_2026_671">
                                            <Rect width="26.1119" height="31" fill="white" />
                                        </ClipPath>
                                    </Defs>
                                </Svg>
                            </G>
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Svg width="83" height="46" viewBox="0 0 83 46" fill="none">
                            {/* Background */}
                            <Rect width="83" height="46" rx="10" fill="#262628" />

                            {/* Logo */}
                            <G transform="translate(28, 8)">
                                <Svg width="27" height="31" viewBox="0 0 27 31" fill="none">
                                    <G clipPath="url(#clip0_2026_671)">
                                        <Path
                                            d="M25.5647 24.1584C25.0958 25.2415 24.5409 26.2384 23.898 27.155C23.0216 28.4045 22.304 29.2694 21.751 29.7497C20.8937 30.5381 19.9753 30.9418 18.9917 30.9648C18.2856 30.9648 17.4341 30.7639 16.4429 30.3563C15.4484 29.9506 14.5345 29.7497 13.6989 29.7497C12.8225 29.7497 11.8826 29.9506 10.8772 30.3563C9.87033 30.7639 9.05919 30.9763 8.43901 30.9973C7.49584 31.0375 6.55573 30.6223 5.61734 29.7497C5.0184 29.2273 4.26926 28.3318 3.37182 27.0631C2.40893 25.7084 1.61731 24.1374 0.997136 22.3463C0.332953 20.4117 0 18.5384 0 16.7248C0 14.6472 0.448912 12.8554 1.34808 11.3539C2.05474 10.1478 2.99485 9.19639 4.17148 8.49795C5.3481 7.79952 6.61945 7.4436 7.98857 7.42083C8.73771 7.42083 9.72012 7.65256 10.9409 8.10798C12.1583 8.56493 12.94 8.79666 13.2827 8.79666C13.5389 8.79666 14.4073 8.5257 15.8794 7.98551C17.2715 7.48455 18.4464 7.27713 19.4089 7.35883C22.017 7.56932 23.9764 8.59746 25.2795 10.4497C22.947 11.8631 21.7931 13.8426 21.8161 16.382C21.8371 18.3601 22.5547 20.0061 23.965 21.313C24.6041 21.9196 25.3178 22.3884 26.1119 22.7214C25.9397 23.2208 25.7579 23.6992 25.5647 24.1584ZM19.583 0.620177C19.583 2.17053 19.0166 3.61809 17.8876 4.95794C16.5252 6.55075 14.8773 7.47116 13.0902 7.32592C13.0674 7.13993 13.0542 6.94418 13.0542 6.73847C13.0542 5.25013 13.7022 3.65732 14.8528 2.35497C15.4272 1.69558 16.1578 1.14729 17.0437 0.70992C17.9278 0.279071 18.764 0.0408025 19.5505 0C19.5734 0.207258 19.583 0.414549 19.583 0.620177Z"
                                            fill="#B3B3B3"
                                        />
                                    </G>
                                    <Defs>
                                        <ClipPath id="clip0_2026_671">
                                            <Rect width="26.1119" height="31" fill="white" />
                                        </ClipPath>
                                    </Defs>
                                </Svg>
                            </G>
                        </Svg>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        alignItems: "center",
                        marginTop: verticalScale(30),
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ color: "#FFFFFF" }}>Dont't have an account? </Text>
                    <TouchableOpacity style={{ flexDirection: "row" }}>
                        <Text style={{ color: "#2BC20E" }}>Register</Text>
                    </TouchableOpacity>
                </View>
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
    socialContainer: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        color: "#FFFFFF",
        marginTop: verticalScale(25),
    },
});
export default LoginScreen;
