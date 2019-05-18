import React, { FC, useState } from "react";
import { StyleSheet, KeyboardAvoidingView, View } from "react-native";
import { Avatar, Input, Button } from "react-native-elements";
import Ionicon from "react-native-vector-icons/Ionicons";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import Loader from "../../components/shared/loader/Loader";
import colors from "../../theme/colors";
import { AuthActions } from "../../store/action/AuthActions";
import { User } from "../../utils/objects/user/User";
import { Actions } from "react-native-router-flux";

interface Props {
    login: (data: User) => void;
}

interface State {
    email: string;
    loading: boolean;
}

const LoginScreen: FC<Props> = (props) => {

    const [state, setState] = useState({ email: "", loading: false } as State);

    const onLogin = () => {
        setState({ ...state, loading: true });
        props.login({ email: state.email });
        setTimeout(() => {
            setState({ ...state, loading: false });
            Actions.home();
        }, 1500);
    }

    return (
        <>
            <Loader loading={state.loading} />
            <KeyboardAvoidingView behavior="padding" key="3" style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Avatar
                        rounded
                        icon={{ name: 'user', type: 'font-awesome' }}
                        activeOpacity={0.7}
                        size="xlarge"
                        containerStyle={{ marginBottom: 8, paddingTop: 8 }}
                    />
                </View>

                <View style={styles.formContainer}>
                    <Input
                        containerStyle={styles.input}
                        inputContainerStyle={styles.inputContainerStyle}
                        keyboardType="email-address"
                        placeholder="Email address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        value={state.email}
                        onChangeText={(text) => setState({ ...state, email: text })}
                        leftIcon={<Ionicon name="ios-mail" size={20} style={styles.iconStyle} />}
                    />

                    <Button title="Signin" onPress={onLogin} />

                </View>
            </KeyboardAvoidingView>
        </>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    logo: {
        width: 270,
        height: 270
    },
    formContainer: {
        flex: 3,
        padding: 20,
    },
    inputContainerStyle: {
        borderColor: "transparent"
    },
    input: {
        marginBottom: 12,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: colors.grey_black
    },
    iconStyle: {
        paddingRight: 8
    },
});

const mapActionToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ login: AuthActions.loginAction }, dispatch);
}

export default connect(null, mapActionToProps)(LoginScreen);