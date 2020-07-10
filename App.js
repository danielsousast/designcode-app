if (__DEV__) {
  import("./src/config/ReactotronConfig").then(() =>
    console.log("Reactotron Configured")
  );
}

import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/store";
import Navigator from "./src/navigator";

const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/ldcl3ayg0mhx",
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer 93f3808c25c1f5bdb95476ca8576c6eaa12b5587efb956efb242ceead7cb3840`,
  },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
      <StatusBar barStyle="dark-content" />
    </ApolloProvider>
  );
}
