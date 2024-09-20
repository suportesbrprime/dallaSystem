import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import PainelGeral from './PainelGeral';

function cardLogin() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/painelGeral" component={PainelGeral} />
                <Route path="/" exact component={Login} />
            </Switch>
        </Router>
    );
}

export default cardLogin;