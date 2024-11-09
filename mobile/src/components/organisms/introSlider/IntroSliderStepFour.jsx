import React from "react";
import { Image, StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "@theme/colors";
import Button from "@components/atoms/Button";
import { styles as baseStyles } from "@components/organisms/introSlider/styles";

const competitions = [
    {
        id: 1,
        name: "Primeira Liga",
        country: "Portugal",
        image: require("@assets/images/sliderScreen/competition-4.png"),
    },
    {
        id: 2,
        name: "Eredivisie",
        country: "Germany",
        image: require("@assets/images/sliderScreen/competition-1.png"),
    },
    {
        id: 3,
        name: "La Liga",
        country: "Italy",
        image: require("@assets/images/sliderScreen/competition-3.png"),
    },
    {
        id: 4,
        name: "Ligue 1",
        country: "Netherlands",
        image: require("@assets/images/sliderScreen/competition-2.png"),
    },
];

const CompetitionCard = ({ name, country, image }) => {
    return (
        <View style={styles.card}>
            {/* Favorite Icon */}
            <TouchableOpacity style={styles.favoriteIcon}>
                <Icon name="star-o" size={12} color="rgba(255, 255, 255, 0.5)" />
            </TouchableOpacity>

            {/* Competition Image */}
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.cardImage} />
            </View>

            {/* Competition Name and Country */}
            <Text style={styles.cardTitle}>{name}</Text>
            <Text style={styles.cardSubtitle}>{country}</Text>
        </View>
    );
};
export const IntroSliderStepFour = () => {
    return (
        <>
            <Text style={styles.title}>Favorite Competitions</Text>
            <Text style={styles.subtitle}>Receive notifications about matches of your favorite competitions.</Text>

            {/* Search Box */}
            <View style={styles.search.searchContainer}>
                <TextInput
                    style={styles.search.searchBox}
                    placeholder="Search Competitions"
                    placeholderTextColor={colors.black}
                />
            </View>

            {/* Competition Cards */}
            <FlatList
                data={competitions}
                renderItem={({ item }) => (
                    <CompetitionCard name={item.name} country={item.country} image={item.image} />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
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
        justifyContent: "space-between",
        marginVertical: 10,
        width: "100%",
        paddingHorizontal: 0,
        gap: 10,
    },
    card: {
        flex: 1,
        backgroundColor: "#2C2C2E",
        borderRadius: 10,
        alignItems: "center",
        padding: 15,
        position: "relative",
        marginHorizontal: 5,
    },
    imageContainer: {
        display: "flex",
        width: 60,
        height: 60,
        backgroundColor: "black",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 7,
    },
    cardImage: {
        width: "50%",
        height: "50%",
    },
    cardTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    cardSubtitle: {
        color: "#aaa",
        fontSize: 14,
    },
    favoriteIcon: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "black",
        borderRadius: 100,
        padding: 3,
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

export default IntroSliderStepFour;
