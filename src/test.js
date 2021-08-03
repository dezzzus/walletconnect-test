import React from 'react';
import { Platform, Text, TouchableOpacity } from 'react-native';
import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TestScreen = () => {
  const connector = useWalletConnect();

  const onPress = () => {
    connector.connect();
  };

  console.log("===================", connector);

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>AAAAAAAAAAAAAAa</Text>
    </TouchableOpacity>
  )
};

export default withWalletConnect(TestScreen,  {
  redirectUrl: Platform.OS === 'web' ? window.location.origin : 'yourappscheme://',
  storageOptions: {
    asyncStorage: AsyncStorage,
  },
});