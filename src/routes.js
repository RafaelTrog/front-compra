import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Product from "./components/Product";
import Bag from './components/Bag';

import TopBanner from "./components/TopBanner";
import DefaultBanner from "./components/DefaultBar";
import ProductsBar from "./components/ProductsBar";
import BagBar from './components/BagBar';

const DefaultComponents = () => {
  return (
    <>
      <TopBanner />
      <DefaultBanner />
      <ProductsBar />
    </>
  )
}

const HomeAdd = () => {
  return (
    <>
      <DefaultComponents />
      <Home />
    </>
  )
}

const ProductAdd = () => {
  return (
    <>
      <DefaultComponents />
      <Product />
    </>
  )
}

const BagAdd = () => {
  return (
    <>
      <BagBar />
      <Bag />
    </>
  )
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeAdd} />
        <Route path="/produto" exact component={ProductAdd} />
        <Route path="/carrinho" exact component={BagAdd} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
