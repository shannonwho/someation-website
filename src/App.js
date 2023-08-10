
import "./App.css";
import React from 'react';
import Home from "./pages/Home/Home";
import About from "./pages/Home/About";
import { Router, Route, Switch } from 'wouter'; // Import Router and Route from Wouter

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    {/* Add more routes if needed */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
