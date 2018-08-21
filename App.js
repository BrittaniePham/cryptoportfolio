import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import { Provider } from 'react-redux';
import store from './store';
import Auth from './components/Auth';
import Coins from './components/Coins';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <FetchUser>
          <NativeRouter>
            <View style={styles.container}>
              <Switch>
                <ProtectedRoute exact path="/" component={Coins} />
                <Route exact path="/login" render={ (props) => <Auth {...props} type="Login" /> } />
                <Route exact path="/register" render={ (props) => <Auth {...props} type="Register" /> } />
              </Switch>
            </View>
          </NativeRouter>
        </FetchUser>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
