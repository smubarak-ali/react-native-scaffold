import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Divider } from "react-native-elements";
import { Actions } from "react-native-router-flux";

import MyHeader from "../../components/header/MyHeader";
import colors from "../../theme/colors";

interface Props { }

const InfoScreen: FC<Props> = (props) => {

    return (
        <>
            {/* <MyHeader title="Information" showBackBtn /> */}
            <View style={styles.containerStyle}>
                <Text>Welcome to Information!</Text>
                <Divider />
                <Text onPress={() => Actions.pop()}>Go Back</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.backdrop
    }
});

export default InfoScreen;