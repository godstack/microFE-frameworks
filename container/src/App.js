import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import Progress from './components/Progress';

const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header
                        isSignedIn={isSignedIn}
                        onSignOut={() => setIsSignedIn(false)}
                    />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path='/auth'>
                                <AuthLazy
                                    onSignIn={() => setIsSignedIn(true)}
                                />
                            </Route>
                            <Route path='/'>
                                <MarketingLazy isSignedIn={isSignedIn} />
                            </Route>
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};

export default App;
