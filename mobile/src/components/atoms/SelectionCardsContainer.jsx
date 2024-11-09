import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { colors } from "@theme/colors";
import { horizontalScale, verticalScale } from "@utils/DimenstionHelpers";
import { moderateScale } from "@utils/DimenstionHelpers";
import { LineChart } from "react-native-chart-kit";
import { width } from "../../utils/DimenstionHelpers";

const SelectionCardsContainer = ({
    title,
    options,
    selectedOption,
    onSelect,
    type,
    cardVariant,
    customStyles = {},
}) => {
    return (
        <View style={[styles.card, customStyles.card]}>
            <Text style={styles.title}>{title}</Text>
            <View style={[styles.optionsContainer, customStyles.optionsContainer]}>
                {options.map((option) => (
                    <TouchableOpacity
                        key={option.value}
                        style={[
                            styles.option,
                            selectedOption === option.value && styles.selectedOption,
                            cardVariant === "fullLengthIcon" && styles.fullLengthOption,
                            cardVariant === "fullLengthCharts" && styles.fullLengthOption,
                            customStyles.optionsCard,
                        ]}
                        onPress={() => onSelect(option.value)}
                    >
                        {type === "withImage" && option.image && (
                            <View style={styles.optionImageContainer}>
                                <Image source={option.image} style={styles.optionImage} />
                            </View>
                        )}
                        <Text style={[styles.optionText, customStyles.optionText]}>{option.label}</Text>
                        {cardVariant === "fullLengthIcon" && (
                            <View style={styles.iconContainer}>
                                <Icon
                                    name="arrowright"
                                    size={16}
                                    color={selectedOption === option.value ? "#0AD54A" : "rgba(255, 255, 255, 0.5)"}
                                    style={styles.icon}
                                />
                            </View>
                        )}
                        {cardVariant === "fullLengthCharts" && (
                            <View  style={styles.chartContainer}>
                            <Text style={[styles.optionText, customStyles.optionText]}>{option.title}</Text>
                            <Text style={[styles.optionText, customStyles.optionLabel]}>{option.averageAccuracy + " " + option.accuracyValue}</Text>
                            <LineChart
                                data={{
                                    labels: option.labels || [],
                                    datasets: [
                                        {
                                            data: option.data || [],
                                        },
                                    ],
                                }}
                                width={width * 0.7}
                                height={verticalScale(150)}
                                chartConfig={{
                                    backgroundColor: colors.white,
                                    backgroundGradientFrom: colors.backgroundDark,
                                    backgroundGradientTo: colors.backgroundDark,
                                    decimalPlaces: 0,
                                    color: (opacity = 1) => `rgba(10, 213, 74, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    style: {
                                        borderRadius: 16,
                                      
                                    },
                                    propsForBackgroundLines: {
                                        strokeWidth: 0, 
                                        paddingLeft: 0, 
                                    },
                                }}
                                
                                style={{
                                    borderRadius: 16,
                                    marginLeft: -25, 
                                    marginRight: -25, 
                                }}
                            />
                        </View>
                        )}
                        
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.darkGray,
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        alignItems: "center",
    },
    title: {
        color: colors.text,
        fontSize: moderateScale(22),
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    optionsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    option: {
        backgroundColor: colors.backgroundDark,
        padding: 7,
        borderRadius: 8,
        marginBottom: 10,
        width: "48%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    fullLengthOption: {
        width: "100%",
    },
    selectedOption: {
        borderColor: colors.primaryGreen,
        borderWidth: 1,
    },
    optionText: {
        color: colors.text,
        fontSize: moderateScale(14),

        textAlign: "center",
    },
    optionImageContainer: {
        backgroundColor: colors.darkGray,
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",

        marginVertical: 15,
    },
    optionImage: {
        width: horizontalScale(30),
        height: verticalScale(30),
    },
    iconContainer: {
        backgroundColor: colors.darkGray,
        borderRadius: 20,
        padding: 8,
        alignItems: "center",
        justifyContent: "center",
        transform: [{ rotate: "-45deg" }],
    },
    chartContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
});

export default SelectionCardsContainer;
