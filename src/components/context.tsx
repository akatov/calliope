/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export const ComponentsContext = React.createContext({
  Container: ({children}: {children: any}) => (<>{children}</>),
  Button: ({title}: any) => (<>{title}</>),
  H1: ({children}: any) => (<>{children}</>),
});
