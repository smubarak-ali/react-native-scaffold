import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Text, ListItem, Avatar } from "react-native-elements";
import colors from "../../theme/colors";
import { Actions } from "react-native-router-flux";

interface Props { }

const DrawerContent: FC<Props> = (props) => {

    return (
        <View style={styles.containerStyle}>
            <View style={styles.titleContainer}>
                <Avatar
                    rounded
                    icon={{ name: 'user', type: 'font-awesome' }}
                    activeOpacity={0.7}
                    size="xlarge"
                    containerStyle={{ marginBottom: 8, paddingTop: 8 }}
                />
            </View>
            <View style={styles.menuContainer}>
                <ListItem
                    key="1"
                    title="Home"
                    onPress={() => Actions.home()}
                />
                <ListItem
                    key="3"
                    title="Settings"
                    onPress={() => Actions.settings()}
                />
                <ListItem
                    key="2"
                    title="Login"
                    onPress={() => Actions.login()} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.primary
    },
    titleStyle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    menuContainer: {
        flex: 2,
    }
});

export default DrawerContent;