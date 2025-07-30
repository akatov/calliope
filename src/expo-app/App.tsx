import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ComponentsNativeProvider } from '../components-native/index';

import App from '../actual-app/index';

export default function Main() {
  return (
    <ComponentsNativeProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <App />
      </View>
    </ComponentsNativeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
