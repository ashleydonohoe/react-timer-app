let React = require("react");
let ReactDOM = require("react-dom");
let expect = require("expect");
let $ = require("jquery");
let TestUtils = require("react-addons-test-utils");

let Controls = require("Controls");

describe("Controls", () => {
   it("should exist", () => {
      expect(Controls).toExist();
   });

   describe("render", () => {
       it("should render pause when started", () => {
           let controls = TestUtils.renderIntoDocument(<Controls countdownOrTimerStatus="started"/>);
           let $el = $(ReactDOM.findDOMNode(controls));
           let $pauseButton = $el.find("button:contains(Pause)");

           expect($pauseButton.length).toBe(1);
       });

       it("should render start when paused", () => {
           let controls = TestUtils.renderIntoDocument(<Controls countdownOrTimerStatus="paused"/>);
           let $el = $(ReactDOM.findDOMNode(controls));
           let $startButton = $el.find("button:contains(Start)");

           expect($startButton.length).toBe(1);
       });
   });
});