import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function TextFields({
    placeholderValue,
    secureTextEntry,
    inputMode,
    value,
    onChangeText,
    keyboardType,
    styles,
    key,
    onBlur,
    onFocus,
    ref,
    onKeyPress,
    autoFocus,
    maxLength,
}) {
    return (
        <TextInput
            maxLength={maxLength}
            onKeyPress={onKeyPress}
            autoFocus={autoFocus}
            ref={ref}
            key={key}
            value={value}
            onChangeText={onChangeText}
            placeholder={`${placeholderValue}`}
            secureTextEntry={secureTextEntry}
            inputMode={inputMode}
            style={styles}
            placeholderTextColor={"#FFFFFF"}
            keyboardType={keyboardType}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    );
}

// const styles = StyleSheet.create({
//     textFieldSize: {
//         color: "#FFFFFF",
//         height: 50,
//         borderRadius: 10,
//         backgroundColor: "#262628",
//         paddingLeft: 8,
//     },
// });
