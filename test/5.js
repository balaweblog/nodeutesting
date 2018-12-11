const chai = require("chai");
const expect = chai.expect;
const ServiceClass = require("../service/5.js");

chai.use(require("chai-as-promised"));

// Added the `only` tag to have only this set of tests to run
describe.only("AsyncTest Call back Promise ", function()  {
    serviceclass = new ServiceClass();

    it("should return `You get a sweet :)` if `true` is passed in", function() {
      return expect(serviceclass.someMadeUpAyncFunc(true)).to.eventually.equal("You get a sweet :)");
    });
  
    it("should return `You get nothing!!` if `false` is passed in", function() {
      return expect(serviceclass.someMadeUpAyncFunc(false)).to.eventually.equal("You get nothing!!");
    });
  });