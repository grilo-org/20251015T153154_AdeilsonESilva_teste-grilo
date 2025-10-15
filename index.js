import {AppRegistry} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import Routes from './src';
import {name as appName} from './app.json';
import {store, persistor} from './src/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {ActivityIndicator} from 'react-native';

const APP = () => (
  <Provider store={store}>
    <PersistGate
      loading={<ActivityIndicator size={'small'} />}
      persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => APP);
