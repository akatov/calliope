/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentsProvider } from "../components/provider";

export const ComponentsWebProvider = ({children}: {children: any}) => (
  <ComponentsProvider value={{
    Container: ({children}: {children: any}) => (<>{children}</>),
    Button: ({title, onClick}: any) => (<button onClick={onClick}>{title}</button>),
    H1: ({children}: any) => (<h1>{children}</h1>),
  }}>{children}</ComponentsProvider>
)
