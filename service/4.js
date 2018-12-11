class ServiceClass{
     someMadeUpAyncFunc(boolValue, cb) {
        setTimeout(function() {
          cb(boolValue ? "You get a sweet :)" : "You get nothing!!")
        }, 0);
      }
}

module.exports = ServiceClass;