const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const user = require("../service/2.js");

    describe("addUser", function() {
      it("should add a user", function() {
        user1 = new user();
        sinon.spy(user1, "addUser");
        user1.addUser('John Doe');
        expect(user1.addUser.calledOnce).to.be.true;
      });
    });