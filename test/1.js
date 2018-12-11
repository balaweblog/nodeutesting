const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const indexPage = require("../service/1.js");

describe("getIndexPage", function() {
  it("should return index page", function() {
    let req = {}
    let res = {
      send: sinon.spy()
    }

    indexPage.getIndexPage(req, res);
    expect(res.send.calledOnce).to.be.true;
    expect(res.send.firstCall.args[0]).to.equal("Hello");
  });
});