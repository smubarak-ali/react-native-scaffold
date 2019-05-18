import React, { FC, ReactElement } from "react";
import { Platform, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Header } from "react-native-elements";
import { Actions } from "react-native-router-flux";

import colors from "../../theme/colors";

interface Props {
    title: string;
    showMenu?: boolean;
    showBackBtn?: boolean;
    rightComponent?: ReactElement | null;
}

const MyHeader: FC<Props> = (props) => {

    const MenuIcon = () => {
        if (props.showMenu && !props.showMenu)
            return null;
        
        return <Icon name="ios-menu" size={28} onPress={() => Actions.drawerOpen()} color={colors.white} style={{marginLeft: 5}} />;
    }

    const Search = () => {
        if (props.rightComponent)
            return props.rightComponent;
        return null;
    }

    const onBackIconClick = () => {
        Actions.pop();
    }

    const BackIcon = () => {
        if (props.showBackBtn && !props.showBackBtn) return null;

        return <Icon name="ios-arrow-back" size={28} onPress={onBackIconClick} color={colors.white} style={{marginLeft: 5}} />
    }

    return (
        <Header
            leftComponent={ props.showBackBtn ? <BackIcon /> : <MenuIcon /> }
            centerComponent={{ text: props.title, style: styles.centerComponentStyle }}
            containerStyle={styles.containerStyle}
            rightComponent={<Search />}
        />
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'space-around',
        marginTop: Platform.OS === 'ios' ? 0 : -30
    },
    centerComponentStyle: {
        fontSize: 20,
        color: colors.white
    }
});
export default MyHeader;