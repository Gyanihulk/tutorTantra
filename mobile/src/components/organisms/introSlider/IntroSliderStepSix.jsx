import React from "react";
import { Image, StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import { styles as baseStyles } from "@components/organisms/introSlider/styles";

const competitions = [
    {
        id: 1,
        title: "BLVCK SLU",
        subtitle: "FIFA World Cup Qualifying",
        description: "BLVCK SLU is preparing for their next World Cup qualifying match. Stay tuned for live updates, team formations, and match highlights.",
        timestamp: "Now",
        image: require("@assets/images/sliderScreen/football.png"),
    },
    
];

const CompetitionCard = ({ title, subtitle, description, timestamp, image }) => {
    return (
        <View style={styles.card.card}>
            <View style={styles.card.header}>
                <Text style={styles.card.title}>{title}</Text>
                <Text style={styles.card.timestamp}>{timestamp}</Text>
            </View>
            <Text style={styles.card.subtitle}>{subtitle}</Text>
            <Text style={styles.card.description}>{description}</Text>
            
            <View style={styles.card.imageContainer}>
                <Image source={image} style={styles.card.cardImage} />
            </View>
        </View>
    );
};
export const IntroSliderStepSix = () => {
    return (
        <>
            <Text style={styles.title}>Don’t Miss Matches!</Text>
            <Text style={styles.subtitle}>Turn on push notifications to get all the important info about your favorite teams </Text>

            <FlatList
                data={competitions}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CompetitionCard 
                        title={item.title}
                        subtitle={item.subtitle}
                        description={item.description}
                        timestamp={item.timestamp}
                        image={item.image}
                    />
                )}
                contentContainerStyle={styles.competitionList}
            />

            

        </>
    );
};

const styles = StyleSheet.create({
    ...baseStyles,
    card:{card: {
        backgroundColor: "#2C2C2E",
        marginVertical: 10,
        borderRadius: 10,
        padding: 15,
        position: "relative",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    title: {
        color: "#0AD54A", 
        fontSize: 14,
        fontWeight: "bold",
    },
    timestamp: {
        color: "#AAA",
        fontSize: 12,
    },
    subtitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    description: {
        color: "#AAA",
        fontSize: 14,
        marginBottom: 10,
    },
    imageContainer: {
        width: "100%",
        height: 150, 
        borderRadius: 10,
        overflow: "hidden",
    },
    cardImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },}
});

export default IntroSliderStepSix;
