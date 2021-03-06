let React = require("react");
let ReactDOM = require("react-dom");
let {Route, Router, IndexRoute, hashHistory} = require("react-router");
let Main = require("Main");
let Countdown = require("Countdown");
let Timer = require("Timer");

// Load Foundation
$(document).foundation();
// Load application styles
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="timer" component={Timer}/>
            <Route path="countdown" component={Countdown}/>
            <IndexRoute component={Timer}/>
        </Route>
    </Router>,
    document.getElementById("app")
);
