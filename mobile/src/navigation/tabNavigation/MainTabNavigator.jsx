import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@screens/main/HomeScreen";
import ProfileScreen from "@screens/main/ProfileScreen";
import Icon from "react-native-vector-icons/Ionicons"; // Import vector icons
import { colors } from "@theme/colors";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Matches") {
                        iconName = focused ? "football" : "football-outline";
                    } else if (route.name === "Favorite") {
                        iconName = focused ? "star" : "star-outline";
                    } else if (route.name === "News") {
                        iconName = focused ? "newspaper" : "newspaper-outline";
                    } else if (route.name === "Competition") {
                        iconName = focused ? "trophy" : "trophy-outline";
                    } else if (route.name === "Premium") {
                        iconName = focused ? "diamond" : "diamond-outline";
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: colors.tabBarActive,
                tabBarInactiveTintColor: colors.tabBarInactive,
            })}
        >
            <Tab.Screen name="Matches" component={HomeScreen} />
            <Tab.Screen name="Favorite" component={ProfileScreen} />
            <Tab.Screen name="News" component={HomeScreen} />
            <Tab.Screen name="Competition" component={ProfileScreen} />
            <Tab.Screen name="Premium" component={HomeScreen} />
        </Tab.Navigator>
    );
};

export default MainTabNavigator;
