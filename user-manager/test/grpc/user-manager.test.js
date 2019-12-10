process.env.NODE_ENV = 'test';
require('../../src/program').start();
const { describe, it, before } = require('mocha');
const { expect } = require('chai');
const { UserModel } = require('../../src/models');
const users = require('../users.json');
const client = require('./client');

describe('UserManager', () => {
  before((done) => {
    Promise.all([
      UserModel.deleteMany({}),
    ]).then(result => done()).catch(done);
  });

  describe('create', () => {
    it('[OK] --> User information', (done) => {
      client.request('create', users[0])
        .then(user => {
          expect(user).to.haveOwnProperty('_id');
          expect(user).to.haveOwnProperty('createdAt').to.be.a('string');
          expect(user).to.haveOwnProperty('updatedAt').to.be.a('string');
          done();
        })
        .catch(done);
    });
  });
});