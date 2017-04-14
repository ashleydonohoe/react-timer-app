let React = require("react");
let ReactDOM = require("react-dom");
let expect = require("expect");
let $ = require("jquery");
let TestUtils = require("react-addons-test-utils");

let Countdown = require("Countdown");

describe("Countdown", () => {
    it("should exist", () => {
       expect(Countdown).toExist();
    });

    describe("handleSetCountdown", (done) => {
        it("should set state to started and count down", (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe("started");

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

       it("should not count down past 0", (done) => {
           let countdown = TestUtils.renderIntoDocument(<Countdown/>);
           countdown.handleSetCountdown(1);

           setTimeout(() => {
               expect(countdown.state.count).toBe(0);
               done();
           }, 3001);
       });

       it("should pause countdown on paused status", (done) => {
           let countdown = TestUtils.renderIntoDocument(<Countdown/>);
           countdown.handleSetCountdown(3);
           countdown.handleStatusChange("paused");

           setTimeout(() => {
              expect(countdown.state.count).toBe(3);
              expect(countdown.state.countdownStatus).toBe("paused");
              done();
           }, 1001);
       });

        it("should stop countdown on stopped status", (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange("stopped");

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe("stopped");
                done();
            }, 1001);
        });
    }); // End Describe
});