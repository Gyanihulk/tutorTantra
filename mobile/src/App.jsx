import React from "react";

import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from "react-native";

import Navigation from "@navigation";
import { ThemeProvider } from "@rneui/themed";
import { theme as appTheme } from "@theme/theme";
import store from "@stores";
import { Provider } from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={appTheme}>
                <Navigation />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
