const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('Test for sendPaymentRequestToApi', () => {
  let spyConsole;
  beforeEach(() => {
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spyConsole.restore();
  });

  it('spy test 1', () => {
    sendPaymentRequestToApi(100, 20);

    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });

  it('spy test 2', () => {
    sendPaymentRequestToApi(10, 10);

    expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });
});
