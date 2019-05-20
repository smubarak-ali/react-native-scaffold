import React, { FC } from "react";
import { View, Dimensions, StyleSheet, PixelRatio } from "react-native";
import { Router, Scene, Drawer, Tabs, Stack } from "react-native-router-flux";
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from "react-native-elements";

import DrawerContent from "./drawer/DrawerContent";
import SplashScreen from "../screens/splash-screen/SplashScreen";
import HomeScreen from "../screens/home/HomeScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
import LoginScreen from "../screens/login/LoginScreen";
import colors from "../theme/colors";
import InfoScreen from "../screens/info-screen/InfoScreen";

interface Props {

}

const Routes: FC<Props> = (props) => {

    const TabIcon = (props: any) => {
        const color = props.focused ? colors.primary : colors.secondary;
        // console.log(' TabIcon props: ', props);
        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
                <Icon style={{ color: color, fontSize: 22 }} name={props.iconName} />
                <Text style={{ color: color, fontSize: 12 }}>{props.title}</Text>
            </View>
        );
    }

    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="splash" component={SplashScreen} initial hideNavBar />
                
                <Stack key="auth" hideNavBar>
                    <Scene key="login" component={LoginScreen} hideNavBar initial />
                </Stack>
                
                <Drawer key="drawer" hideNavBar drawer contentComponent={DrawerContent}>
                    <Scene hideNavBar panHandler={null}>
                        <Tabs key="tabbar" swipeEnabled tabBarStyle={styles.tabBar} showLabel={false}>
                            <Scene key="homeTab" title="Home" iconName="ios-home" icon={TabIcon} hideNavBar initial>
                                <Scene key="home" component={HomeScreen} initial hideNavBar />
                                <Scene key="info" component={InfoScreen} hideNavBar />
                            </Scene>

                            <Scene key="settingsTab" title="Settings" iconName="ios-settings" icon={TabIcon} hideNavBar>
                                <Scene key="settings" component={SettingsScreen} hideNavBar />
                            </Scene>
                        </Tabs>
                    </Scene>
                </Drawer>
            </Scene>
        </Router>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        borderTopColor: colors.secondary,
        borderTopWidth: 1 / PixelRatio.get(),
        backgroundColor: colors.white,
        opacity: 1
    },
    navigationBarStyle: {
        backgroundColor: 'red',
    },
    navigationBarTitleStyle: {
        color: 'white',
        fontSize: 14
    },
})

export default Routes;