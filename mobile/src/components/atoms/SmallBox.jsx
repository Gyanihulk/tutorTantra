import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SmallBox = ({ label, percentage, odds, backgroundColor, positionStyles, type = "default" }) => {
    return (
        <View style={[styles.box, { backgroundColor }, positionStyles]}>
            {type === "default" ? (
                <>
                    <Text style={styles.label}>{label}</Text>
                    <View style={styles.divider} />
                    <View style={styles.bottomRow}>
                        <Text style={styles.percentage}>{percentage}%</Text>
                        <Text style={styles.odds}>{odds}</Text>
                    </View>
                </>
            ) : (
                <View style={styles.horizontalBox}>
                    <Text style={styles.label}>{label}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 10,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        width: 100,
        height: 55,
    },
    label: {
        color: "#fff",
        fontWeight: "250",
        fontSize: 13,
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        marginVertical: 3,
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    percentage: {
        color: "#fff",
        fontSize: 14,
    },
    odds: {
        color: "#fff",
        fontSize: 14,
    },
});

export default SmallBox;
