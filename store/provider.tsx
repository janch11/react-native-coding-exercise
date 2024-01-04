import { Provider as StoreProvider } from "react-redux";
import { store } from "./store";
import { FC, PropsWithChildren } from "react";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return <StoreProvider store={store}>{children}</StoreProvider>;
};
