import React, { FC } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { Router, Scene, Drawer } from "react-native-router-flux";

import DrawerContent from "./drawer/DrawerContent";
import SplashScreen from "../screens/splash-screen/SplashScreen";
import HomeScreen from "../screens/home/HomeScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
import LoginScreen from "../screens/login/LoginScreen";

interface Props {

}

const Routes: FC<Props> = (props) => {

    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Drawer key="drawer" hideNavBar drawer contentComponent={DrawerContent}>
                    <Scene key="splash" component={SplashScreen} initial hideNavBar />
                    <Scene key="home" component={HomeScreen} hideNavBar />
                    <Scene key="settings" component={SettingsScreen} hideNavBar />
                    <Scene key="login" component={LoginScreen} hideNavBar />
                </Drawer>
            </Scene>
        </Router>
    );
}

const styles = StyleSheet.create({

})

export default Routes;