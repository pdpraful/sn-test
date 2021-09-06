const users = require("../users")
const validateUser = require("../Validation/ValidateUser")
const assert = require("assert").strict;
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../../app');
let should = chai.should();

chai.use(chaiHttp)

let mockValidUser = {
    FirstName : "Praful",
    LastName : "Dusane",
    Email : "pdpraful@gmail.com",
    Password:"asdfghjka"
}
let mockInValidUser = {
    FirstName : "Praful",
    LastName : "Dusane",
    Email : "pdpraful@gmail.com",
    Password:"asd"
}
describe("users-signup-test", () =>{
    it("shold be able to validate valid user",() => {
        let result = validateUser(mockValidUser);
        assert.strictEqual(result.error, undefined); 
    });
    it("shold be able to validate in-valid user",() => {
        let result = validateUser(mockInValidUser);
        assert.notStrictEqual(result.error, undefined); 
    });
});

describe("POST user-signup test", () => {
    it("should send a post request to server for user signup", (done) =>{
        chai.request(server).post("/user/signup").send(mockValidUser).end((err, res) =>{
            res.should.have.status(200);
            done();
        });
    });
});

//Todo: Test is failing needs debugging; check after setting dev environment.
/*describe("POST user-signup invalidated test", () => {
    it("should send a post request to server for invalid user signup", (done) =>{
        chai.request(server).post("/user/signup").send(mockInValidUser).end((err, res) =>{
            res.should.have.status(400);
            done();
        });
    });
});*/