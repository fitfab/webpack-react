import React from "react";
import ReactDOM from "react-dom";

import Content from "./app";

/**
 * Warning: render(): Rendering components directly into
 * document.body is discouraged,
 * since its children are often manipulated
 * by third-party scripts and browser extensions.
 * This may lead to subtle reconciliation issues.
 * Try rendering into a container element
 * created for your app.
 */
let root = document.getElementById('root');

/**
 * Warning: React.render is deprecated.
 * Please use ReactDOM.render
 * from require('react-dom') instead.
 */
ReactDOM.render(
  <Content name="Mundito Loco" />,
  root
)