import React from "react";
import { ReactDOM } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Deliverybar from "./components/DeliveryBAr/Deliverybar";
import Home from "./components/Home";
import Men from "./components/Men/Men";
import Women from "./components/Men/Women";
import Kurti from "./components/Men/Kurti";
import Footer from "./components/Footer";
import { Routes as Switch, Route } from "react-router-dom";
import "./components/Home.css";
import Navbaar from "./components/navbar/Navbaar";

import RefExample, { MyComponent } from "./components/ref";
import ReducerExample from "./components/ref";
import Calculator from "./components/ref";
function App() {
  return (
    <>
      <Switch>
        <Route
          path="/"
          element={
            <>
              <Deliverybar />
              <Navbaar />
              <Home />
              <MyComponent />
              <Footer />
            </>
          }
        />

        <Route
          path="/men"
          element={
            <>
              <Navbaar />
              <Men />
              <Footer />
            </>
          }
        />

        <Route
          path="/women"
          element={
            <>
              <Navbaar />
              <Women />
              <Footer />
            </>
          }
        />

        <Route
          path="/kurti"
          element={
            <>
              <Navbaar />
              <Kurti />
              <Footer />
            </>
          }
        />
      </Switch>
    </>
  );
}

export default App;
