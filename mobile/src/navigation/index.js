import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "@navigation/stackNavigator/Auth";
import { theme as appTheme } from "@theme/theme";

import DrawerNavigator from "./drawerNavigation/DrawerNavigation";

const RootStack = createStackNavigator();

const Navigation = () => {
    const isAuthenticated = false;
    return (
        <NavigationContainer theme={appTheme}>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                {isAuthenticated ? (
                    <RootStack.Screen name="Main" component={DrawerNavigator} />
                ) : (
                    <RootStack.Screen name="Auth" component={AuthStack} />
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
