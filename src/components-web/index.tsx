/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentsProvider } from "../components";
import './index.css';

export const ComponentsWebProvider = ({children}: {children: any}) => (
  <ComponentsProvider value={{
    Container: ({children}: {children: any}) => (
      <div className="container">{children}</div>
    ),
    Button: ({title, onClick}: any) => (
      <button className="button" onClick={onClick}>{title}</button>
    ),
    H1: ({children}: any) => (
      <h1 className="h1">{children}</h1>
    ),
  }}>{children}</ComponentsProvider>
)
