let React = require("react");
let Nav = require("Nav");

let Main = (props) => {
    return (
        <div>
            <div>
                <div>
                    <Nav />
                    <p>Main component rendered</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;
