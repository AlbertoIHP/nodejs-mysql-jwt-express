const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const userController = require('../src/controllers/Users.controller');
let server = require('../bin/www');
let httpServer = require('chai-http');
let should = chai.should();
chai.use(httpServer);
describe("UserController test", () => {
    
  it("testing all methods on the controller...", (done) => {
    let req = {
        body : {
            email : 'tomas@gmail.com',
            password : '123456'
        }
    }
    chai.request(server).get('/users')
    .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
    });
  });
});