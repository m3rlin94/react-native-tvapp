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
import {Text, StatusBar, Platform, View} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            fontSize: 26,
            fontWeight: '900',
          }}>{`This is a ${Platform.isTV ? 'TV' : 'Mobile device'}`}</Text>
      </View>
    </>
  );
};

export default App;
