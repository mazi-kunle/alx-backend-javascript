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
});
