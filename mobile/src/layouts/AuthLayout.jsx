import React from "react";
import { Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { colors } from "@theme/colors";

const AuthLayout = ({ title, children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flexGrow: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.darkGray,
        textAlign: "center",
        marginBottom: 20,
    },
});

export default AuthLayout;
