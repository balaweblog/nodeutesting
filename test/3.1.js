const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const Book = require("../service/3.js");

  describe("mock index page", function() {
    it("should send hey when user is logged in", function() {
        book = new Book();

      let user = {
        isLoggedIn: function(){}
      }

      const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);

      let req = {
        user: user
      }

      let res = {
        send: function(){}
      }

      // mock res
      const mock = sinon.mock(res);
      // build how we expect it t work
      mock.expects("send").once().withExactArgs("Hey");

      book.getIndexPage(req, res);
      expect(isLoggedInStub.calledOnce).to.be.true;

      // verify that mock works as expected
      mock.verify();
    });
    it("should send hey when user is not logged in", function() {
        book = new Book();

      let user = {
        isLoggedIn: function(){}
      }

      const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(false);

      let req = {
        user: user
      }

      let res = {
        send: function(){}
      }

      // mock res
      const mock = sinon.mock(res);
      // build how we expect it t work
      mock.expects("send").once().withExactArgs("Ooops. You need to log in to access this page");

      book.getIndexPage(req, res);
      expect(isLoggedInStub.calledOnce).to.be.true;

      // verify that mock works as expected
      mock.verify();
    });
  });