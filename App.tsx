/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import Message from './src/components/Message';
import Users from './src/components/Users';
import Home from './src/routes/Home';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Message />
      <Users />
      {/* <Home /> */}
    </Provider>
  );
};

export default App;
