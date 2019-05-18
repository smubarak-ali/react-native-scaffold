import React, { FC } from "react";
import { Modal, ActivityIndicator, StyleSheet, View, Dimensions } from "react-native";
import { Text } from "react-native-elements";
import colors from "../../../theme/colors";


interface LoaderProps {
    loading: boolean;
    backdropColor?: string;
}

const Loader: FC<LoaderProps> = (props) => {

    return <Modal
        transparent={true}
        animationType="none"
        visible={props.loading}
        onRequestClose={() => null}
    >
        <View style={[styles.modalBackground, {backgroundColor: props.backdropColor ? props.backdropColor : colors.backdrop}]}>
            <View style={[styles.activityIndicatorWrapper]}>
                <ActivityIndicator
                    animating={props.loading}
                    size={48}
                    style={styles.activityIndicatorMargin}
                />
                <Text style={[styles.textStyle, styles.marginStyle]}>
                    Please Wait...
                </Text>
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    activityIndicatorWrapper: {
        backgroundColor: colors.white,
        height: 85,
        width: Dimensions.get("window").width / 1.2,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    textStyle: {
        fontSize: 16,
        fontFamily: "Bitter-Bold"
    },
    activityIndicatorMargin: {
        marginLeft: 25
    },
    marginStyle: {
        marginLeft: 20
    }
});

export default Loader;
