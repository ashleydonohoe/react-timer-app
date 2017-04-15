let React = require("react");
let ReactDOM = require("react-dom");
let expect = require("expect");
let $ = require("jquery");
let TestUtils = require("react-addons-test-utils");

let Timer= require("Timer");

describe("Timer", () => {
    it("should exist", () => {
        expect(Timer).toExist();
    });

    describe("handleSetTimer", (done) => {
        it("should set state to started and count up", (done) => {
            let timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleSetTimer();

            expect(timer.state.timerStatus).toBe("started");

            setTimeout(() => {
                expect(timer.state.count).toBe(1);
                done();
            }, 1001);
        });


        it("should pause timer on paused status", (done) => {
            let timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleSetTimer();
            timer.handleStatusChange("paused");

            setTimeout(() => {
                expect(timer.state.count).toBe(0);
                expect(timer.state.timerStatus).toBe("paused");
                done();
            }, 1001);
        });

        it("should stop timer on stopped status", (done) => {
            let timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleSetTimer();
            timer.handleStatusChange("stopped");

            setTimeout(() => {
                expect(timer.state.count).toBe(0);
                expect(timer.state.timerStatus).toBe("stopped");
                done();
            }, 1001);
        });
    }); // End Describe
});
