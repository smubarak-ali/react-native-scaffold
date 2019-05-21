import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Divider } from "react-native-elements";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";

import MyHeader from "../../components/header/MyHeader";

interface Props { 
    email: string;
}

interface State { }

class HomeScreen extends PureComponent<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        const { email } = this.props;

        return ([
            // <MyHeader key="1" title="Home" />,
            <View key="2" style={styles.containerStyle}>
                <Text>Welcome, {email}</Text>
                <Divider />

                <Text onPress={() => Actions.info()}>Go to Info</Text>
            </View>
        ])
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

const mapStateToProps = (state: any) => {
    return {
        email: state.authReducer.email
    }
}

export default connect(mapStateToProps)(HomeScreen);