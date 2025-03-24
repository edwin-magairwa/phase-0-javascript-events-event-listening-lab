require ( './helpers.js' );

const sinon = require('sinon');

describe("index.js", () => {
  let input;

  beforeEach(function() {
    // Set up the HTML structure for the test
    document.body.innerHTML = '<button id="button">Click me</button>';
    input = document.getElementById('button');
    sinon.spy(input, 'addEventListener');
  })

  it("binds an event listener in addingEventListener()", () => {
    addingEventListener();
    expect(input.addEventListener.called).to.be.true;
  })
})
