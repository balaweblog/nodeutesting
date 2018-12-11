const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const Book = require("../service/3.js");

  describe("getIndexPage", function() {
    it("should send hey when user is logged in", function() {

     book = new Book
      let user = {
        isLoggedIn: function(){}
      }

      // Stub isLoggedIn function and make it return true always
      const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);

      let req = {
        user: user
      }

      let res = {
        send: sinon.spy()
      }

      book.getIndexPage(req, res);

      expect(res.send.calledOnce).to.be.true;
      expect(res.send.firstCall.args[0]).to.equal("Hey");

      // assert that the stub is logged in at least once
      expect(isLoggedInStub.calledOnce).to.be.true;
    });

    it("should send hey when user is not logged in", function() {

        book = new Book();
         let user = {
           isLoggedIn: function(){}
         }
   
         // Stub isLoggedIn function and make it return true always
         const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(false);
   
         let req = {
           user: user
         }
   
         let res = {
           send: sinon.spy()
         }
   
         book.getIndexPage(req, res);
   
         expect(res.send.calledOnce).to.be.true;
         expect(res.send.firstCall.args[0]).to.equal("Ooops. You need to log in to access this page");
   
         // assert that the stub is logged in at least once
         expect(isLoggedInStub.calledOnce).to.be.true;
       });

  });