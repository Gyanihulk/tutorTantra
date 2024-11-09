import React from "react";
import { Image, StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "@theme/colors";
import Button from "@components/atoms/Button";
import { styles as baseStyles } from "@components/organisms/introSlider/styles";


const teams = [
    {
        id: 1,
        name: "PSV Eindhoven",
        country: "Netherlands",
        image: require("@assets/images/sliderScreen/team-1.png"),
    },
    {
        id: 2,
        name: "Newcastle United",
        country: "England",
        image: require("@assets/images/sliderScreen/team-2.png"),
    },
    {
        id: 3,
        name: "Inter Miami",
        country: "USA",
        image: require("@assets/images/sliderScreen/team-3.png"),
    },
    {
        id: 4,
        name: "Manchester United",
        country: "England",
        image: require("@assets/images/sliderScreen/team-4.png"),
    },
    {
        id: 5,
        name: "Aston Villa",
        country: "England",
        image: require("@assets/images/sliderScreen/team-5.png"),
    }
];

const TeamCard = ({ name, country, image }) => {
    return (
        <View style={styles.card}>
            {/* Competition Image */}
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.cardImage} />
            </View>

            {/* Competition Details */}
            <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>{name}</Text>
                <Text style={styles.cardSubtitle}>{country}</Text>
            </View>

            {/* Favorite Icon */}
            <TouchableOpacity style={styles.favoriteIcon}>
                <Icon name="star-o" size={16} color="rgba(255, 255, 255, 0.5)" />
            </TouchableOpacity>
        </View>
    );
};
export const IntroSliderStepFive = () => {
    return (
        <>
            <Text style={styles.title}>Favorite teams</Text>
            <Text style={styles.subtitle}>Turn on push notifications to get all the important info about your favorite teams </Text>

            {/* Search Box */}
            <View style={styles.search.searchContainer}>
                <TextInput
                    style={styles.search.searchBox}
                    placeholder="Search Team"
                    placeholderTextColor={colors.black}
                />
            </View>

            {/* Competition Cards */}
            <FlatList
                data={teams}
                renderItem={({ item }) => (
                    <TeamCard name={item.name} country={item.country} image={item.image} />
                )}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.competitionList}
            />
            <Button
                title="View More ▼"
                onPress={() => {}}
                size="large"
                variant={"outline"}
                style={{ borderColor: "#262628" }}
                textStyle={{ color: colors.text, fontWeight: "200", fontSize: 15 }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    ...baseStyles,
    competitionList: {
        justifyContent: "center",
        paddingHorizontal: 0,
        marginVertical: 10,
        width: "100%",
    },
    card: {
        flexDirection: "row", 
        backgroundColor: "#2C2C2E",
        marginVertical: 10,
        borderRadius: 10,
        alignItems: "center",
        padding: 15,
        position: "relative",
        height: 80, 
    },
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: "black",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15, 
    },
    cardImage: {
        width: "70%",
        height: "70%",
        resizeMode: "contain",
    },
    textContainer: {
        flex: 1, 
        justifyContent: "center",
    },
    cardTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 3,
    },
    cardSubtitle: {
        color: "#aaa",
        fontSize: 14,
    },
    favoriteIcon: {
        position: "absolute",
        top: 15,
        right: 15,
        backgroundColor: "#1C1C1E",
        borderRadius: 50,
        padding: 6,
    },
    viewMoreButton: {
        backgroundColor: "#1C1C1E",
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: "center",
        marginHorizontal: "30%",
        marginVertical: 15,
    },
    viewMoreText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default IntroSliderStepFive;
