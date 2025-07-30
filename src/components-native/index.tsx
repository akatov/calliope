/* eslint-disable @typescript-eslint/no-explicit-any */
import { StyleSheet, Text, View, Button } from 'react-native';
import { ComponentsProvider } from "../components";

export const ComponentsNativeProvider = ({children}: {children: any}) => (
  <ComponentsProvider value={{
    Container: ({children}: {children: any}) => (<View style={styles.container}>{children}</View>),
    Button: ({title, onClick}: any) => (
      <Button onPress={onClick} title={title} />
    ),
    H1: ({children}: any) => (<Text style={styles.h1}>{children}</Text>),
  }}>{children}</ComponentsProvider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 24,
  }
});
