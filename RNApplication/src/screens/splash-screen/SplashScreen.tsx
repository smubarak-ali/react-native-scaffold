import React, { FC, useEffect, useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Text } from "react-native-elements";
import { Actions } from "react-native-router-flux";

import colors from "../../theme/colors";

interface Props { }

const SplashScreen: FC<Props> = (props) => {

    const [hideStatusBar, setHideStatusBar] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setHideStatusBar(false);
            Actions.homeTab();
        }, 1500);

        return () => {
            clearTimeout(timeout);
        }
    })

    return <>
        <StatusBar hidden={hideStatusBar} />
        <View style={styles.containerStyle}>
            <Text style={styles.welcomeTextStyle}>
                Welcome to App
        </Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.secondary
    },
    welcomeTextStyle: {
        fontSize: 20,
        color: colors.white
    }
});

export default SplashScreen;