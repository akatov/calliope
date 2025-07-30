import React from "react";

import { ComponentsContext } from './context';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ComponentsProvider = ({children, value}: {children: React.ReactNode, value: any}) => (<ComponentsContext.Provider value={value}>{children}</ComponentsContext.Provider>)
