import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from "../pages/HomePage"
import ProductList from "../pages/ProductList"
import ProductPage from "../pages/ProductPage"
import Contact from "../pages/Contact"
import Admin from "../pages/Admin"
import ErrorPage from '../pages/ErrorPage';
import Login from "../pages/Login"
const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/products" component={ProductList} />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/contact" component={Contact} />
                <Route path="/admin" component={Admin} />
                <Route path="/login" component={Login} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;