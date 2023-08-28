const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  const url = 'http://localhost:7865/cart';

  it('test id is a number', (done) => {
    request(`${url}/2`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 2');
      done();
    });
  });

  it('test id is not a number', (done) => {
    request(`${url}/aa`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
