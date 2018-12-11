const chai = require("chai");
const expect = chai.expect;
const ServiceClass = require("../service/4.js");


describe.only("AsyncTest callback ", function()  {
    var serviceclass = new ServiceClass();
    it("should return `You get a sweet :)` if `true` is passed in", function(done) {
      serviceclass.someMadeUpAyncFunc(true, function(sweetCheck){
        expect(sweetCheck).to.equal("You get a sweet :)");
        done();
      });
      
    });
    it("should return `You get nothing!!` if `false` is passed in", function(done) {
        serviceclass.someMadeUpAyncFunc(false, function(sweetCheck){
          // Let's fail it on purpose just to see what happens
          expect(sweetCheck).to.equal("You get nothing!!");
          done();
        });
    });
});