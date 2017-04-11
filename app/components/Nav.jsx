const React = require("react");
const {Link, IndexLink} = require("react-router");

const Nav = (props) => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Timer App</li>
                    <li><Link to="/timer" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Timer</Link></li>
                    <li><Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Countdown</Link></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">Created by <a href="#">Ashley Donohoe</a></li>
                </ul>
            </div>
        </div>
    );
};

module.exports = Nav;