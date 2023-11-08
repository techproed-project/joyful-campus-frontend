import React from "react";
import AppRouter from "./router";
import { Provider as StoreProvider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <StoreProvider store={store}>
      <AppRouter />
    </StoreProvider>
  );
};

export default App;
