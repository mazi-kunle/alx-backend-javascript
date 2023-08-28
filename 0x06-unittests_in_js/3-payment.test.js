const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('spy test.', () => {
    const spyUtils = sinon.spy(Utils, 'calculateNumber');
    const spyConsole = sinon.spy(console, 'log');

    sendPaymentRequestToApi(5, 5);

    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;
    expect(spyUtils.calledOnceWithExactly('SUM', 5, 5)).to.be.true;

    spyUtils.restore();
    spyConsole.restore();
  });
});
