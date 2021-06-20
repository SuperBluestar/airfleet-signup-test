import * as React from "react";
import { hot } from "react-hot-loader";
import Favicon from 'react-favicon'

import MainLayout from "./layouts/MainLayout";

import { SignUpPage } from "./pages/SignUpPage";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <Favicon url='dist/favicon-32x32.png' />
        <MainLayout>
          <SignUpPage></SignUpPage>
        </MainLayout>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
