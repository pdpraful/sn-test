const users = require("../users")
const validateUser = require("../Validation/ValidateUser")
const assert = require("assert").strict;

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