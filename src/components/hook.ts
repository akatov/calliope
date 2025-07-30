import React from "react";

import { ComponentsContext } from './context';

export const useComponents = () => React.useContext(ComponentsContext);
