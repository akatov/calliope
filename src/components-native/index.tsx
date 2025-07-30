/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text, View, Button } from 'react-native';
import { ComponentsProvider } from "../components/provider";

export const ComponentsNativeProvider = ({children}: {children: any}) => (
  <ComponentsProvider value={{
    Container: ({children}: {children: any}) => (<View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }}>{children}</View>),
    Button: ({title, onClick}: any) => (
      <Button onPress={onClick} title={title} />
    ),
    H1: ({children}: any) => (<Text>{children}</Text>),
  }}>{children}</ComponentsProvider>
)
