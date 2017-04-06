let React = require("react");
let ReactDOM = require("react-dom");
let {Route, Router, IndexRoute, hashHistory} = require("react-router");
let Main = require("Main");

// Load Foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();
// Load application styles
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
    </Router>,
    document.getElementById("app")
);
