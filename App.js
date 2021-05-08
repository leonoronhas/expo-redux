import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";

import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
}
