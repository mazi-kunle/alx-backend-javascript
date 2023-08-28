const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('test for getPaymentTokenFromApi', () => {
  it('async test 1', (done) => {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.equal({ data: 'Successful response from the API' });
      });
    done();
  });
});
