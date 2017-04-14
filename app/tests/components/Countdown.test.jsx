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
        it("should set state to started and count down", () => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe("started");

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

       it("should not count down past 0", () => {
           let countdown = TestUtils.renderIntoDocument(<Countdown/>);
           countdown.handleSetCountdown(1);

           setTimeout(() => {
               expect(countdown.state.count).toBe(0);
               done();
           }, 3001);
       });
    });
});