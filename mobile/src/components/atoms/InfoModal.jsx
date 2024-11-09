// components/InfoModal.js
import React from "react";
import { Modal, View, Text, StyleSheet, Image } from "react-native";
import Button from "@components/atoms/Button";
import { colors } from "@theme/colors";
import { moderateScale } from "@utils/DimenstionHelpers";
const InfoModal = ({ visible, onClose, title, heading, image, description, onNext }) => {
    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    {/* Title */}
                    <Text style={styles.title}>{title}</Text>

                    {/* Image */}
                    {image &&  <View style={styles.imageContainer}><Image source={image} style={styles.modalImage} /></View>}

                    {/* Heading */}
                    <Text style={styles.heading}>{heading}</Text>

                    {/* Description */}
                    <Text style={styles.description}>{description}</Text>

                    {/* Next Button */}
                    <Button title="Next" onPress={onNext} size="large" textStyle={{ color: "black" }} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    modalContainer: {
        width: "80%",
        backgroundColor: colors.darkGray,
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
    },
    title: {
        fontSize: moderateScale(24),
        color: colors.text,
        marginBottom: 10,
        fontWeight: "bold",
        textAlign:"center"
    },
    imageContainer: {
        backgroundColor: colors.backgroundDark, 
        borderRadius: 50, 
        padding: 20, 
        alignItems: "center",
        justifyContent: "center",
    },
    modalImage: {
        width: 50,
        height: 50
    },
    heading: {
        fontSize: 20,
        color: colors.text,
        fontWeight: "bold",
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color:colors.text,
        textAlign: "center",
        marginBottom: 20,
    },
});

export default InfoModal;
