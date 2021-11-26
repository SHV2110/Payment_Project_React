import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './Components/Form';
import Login from './Components/Login';
const GetRoutes = () => {
    return (
            <div>
                <Router>
                    <div>
                        <div>
                            <Switch>
                                <Route exact path="/"> <Login /> </Route>
                                <Route path="/login"> <Login /> </Route>
                                <Route path="/tranactionform"> <Form/> </Route>
                                <Route path="/*"> <Login /> </Route>
                                
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
    );
}
export default GetRoutes;