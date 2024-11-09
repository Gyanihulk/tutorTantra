import { StyleSheet } from "react-native";
import { colors } from "@theme/colors";
import { horizontalScale, verticalScale } from "@utils/DimenstionHelpers";
export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "flex-start", 
        backgroundColor: colors.backgroundColor,
        paddingHorizontal: 20,
        paddingVertical: 30, 
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.text,
        textAlign: "center",
        marginVertical:8,
    },
    subtitle: {
        fontSize: 16,
        color: colors.text,
        textAlign: "center",
        marginBottom: 12,
        
    },
    imageContainer: {
        position: "relative",
        width: "100%",
        height: verticalScale(400),
        marginVertical: 30,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    overlapImage: {
        position: "absolute",
        marginVertical: 10,
        top: 0,
        left: 0,
        width: "100%",
        height: "95%",
        resizeMode: "contain",
        zIndex: 1,
    },
    overlappingContainer: {
        position: "absolute",
    },
    search: {
        searchContainer: {
            width: "100%",
            alignSelf: "center",
        },
        searchBox: {
            backgroundColor: colors.white,
            borderRadius: 10,
            paddingVertical: 5,
            paddingHorizontal: 15,
            color: "#000",
            fontSize: 16,
        },
    },
    four: {
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
            width: horizontalScale(60),
            height: verticalScale(60),
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
    },
});
