import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { history } from '../_helpers';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <div className="container">
                    <Router history={history}>
                        <Switch>
                            <PrivateRoute exact path="/" component={HomePage} />
                            <Route path="/login" component={LoginPage} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}
