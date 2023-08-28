const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('spy test.', () => {
    const stubUtils = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spyConsole = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;
    expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    stubUtils.restore();
    spyConsole.restore();
  });
});
