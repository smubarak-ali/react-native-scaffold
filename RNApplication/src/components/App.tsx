import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import { PersistGate } from 'redux-persist/integration/react';

import store from '../store';
import { customTheme } from '../theme';
import Routes from './Routes';
import colors from '../theme/colors';

interface Props { }

export default class App extends Component<Props> {
  render() {
    return (
      <StoreProvider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <ThemeProvider theme={customTheme}>
            <>
              <StatusBar backgroundColor={colors.primary} translucent={false} />
              <Routes />
            </>
          </ThemeProvider>
        </PersistGate>
      </StoreProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});