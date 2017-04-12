let React = require("react");
let ReactDOM = require("react-dom");
let expect = require("expect");
let $ = require("jquery");
let TestUtils = require("react-addons-test-utils");

let Clock = require("Clock");

describe("Clock", () => {
    it("should exist", () => {
        expect(Clock).toExist();
    });

    describe("render", () => {
       it("should render clock to output", () => {
           let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
           let $el = $(ReactDOM.findDOMNode(clock));
           let actualText = $el.find(".clock-text").text();

           expect(actualText).toBe("01:02");
       });
    });

    describe("formatSeconds", () => {
        it("should format seconds", () => {
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            const seconds = 615;
            const expected = "10:15";
            let actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });

        it("should format seconds when min/sec are less than 10", () => {
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            const seconds = 61;
            const expected = "01:01";
            let actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
    });
});

