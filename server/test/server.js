import http from 'http';
import assert from 'assert';

import '../src/server.js';

describe('Test - API Users', () => {
  it('Should return status 200', done => {
    http.get('http://127.0.0.1:3000/api/users', res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
