let React = require("react");
let Clock = require("Clock");
let Controls = require("Controls");
let TimerForm = require("TimerForm");

let Timer = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            timerStatus: "stopped"
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        if(this.state.timerStatus != prevState.timerStatus) {
            switch(this.state.timerStatus) {
                case "started":
                    this.startTimer();
                    break;
                case "stopped":
                    this.setState({
                        count: 0
                    });
                case "paused":
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    handleStatusChange: function (newStatus) {
        this.setState({
            timerStatus: newStatus
        });
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            let newCount = this.state.count + 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });

            if(newCount === 0) {
                this.setState({
                    timerStatus: "stopped"
                });
            }

        }, 1000);
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = undefined;
    },

    handleSetTimer: function (seconds) {
        console.log("Handle set timer");
        this.setState({
            count: seconds,
            timerStatus: "started"
        });
    },
    render: function () {

        let {count, timerStatus} = this.state;

        let renderControlArea = () => {
            if(timerStatus !== "stopped") {
                return <Controls countdownOrTimerStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            } else {
                return <TimerForm onSetTimer={this.handleSetTimer}/>
            }
        };

        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        )
    }
});

module.exports = Timer;