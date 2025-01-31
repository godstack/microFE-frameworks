import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import AuthApp from './components/AuthApp';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

const App = () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/auth' component={AuthApp} />
                        <Route path='/' component={MarketingApp} />
                    </Switch>
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};

export default App;
