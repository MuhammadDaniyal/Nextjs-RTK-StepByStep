'use client'
import { Provider } from "react-redux";
import { store } from "./store";

// Configure Provider
// Children - all the component of your app - puri app

export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
