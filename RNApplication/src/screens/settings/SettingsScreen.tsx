import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import MyHeader from "../../components/header/MyHeader";

interface Props { }

const SettingsScreen: FC<Props> = (props) => {

    return <>
        <MyHeader title="Settings" />
        <View style={styles.containerStyle}>
            <Text onPress={() => Actions.home()}> Go To Home </Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default SettingsScreen;