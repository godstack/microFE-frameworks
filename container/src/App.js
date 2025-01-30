import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

const App = () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};

export default App;
