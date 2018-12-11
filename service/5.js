class ServiceClass{
    someMadeUpAyncFunc(boolValue, cb) {
        return new Promise(function(resolve){
          setTimeout(function() {
            resolve(boolValue ? "You get a sweet :)" : "You get nothing!!")
          }, 0);
        })
      }
      
}

module.exports = ServiceClass;