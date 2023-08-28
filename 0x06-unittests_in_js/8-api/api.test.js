const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('test correct status', () => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });

  it('test corerct result', () => {
    request(url, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
    });
  });
});
