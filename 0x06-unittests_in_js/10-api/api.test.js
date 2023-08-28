const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('test correct status', (done) => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('test corerct result', (done) => {
    request(url, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('test id is a number', (done) => {
    request(`${url}/cart/2`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 2');
      done();
    });
  });

  it('test id is not a number', (done) => {
    request(`${url}/cart/aa`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('test available_payments', (done) => {
    request(`${url}/available_payments`, (err, res, body) => {
      const obj = {"payment_methods":{"credit_cards":true,"paypal":false}}
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(obj);
      done();
    });
  });

  it('test login', (done) => {
    request.post(
      `${url}/login`,
      { json: {userName: 'Betty'} },
      (err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome Betty');
        done();
    });
  });
});
