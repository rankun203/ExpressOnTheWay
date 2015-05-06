module.exports = function (Person) {
  Person.getLastname = function(userId, cb) {
    Person.findById(userId, function (err, instance) {
      cb(null, instance.lastname);
    });
  };

  Person.remoteMethod(
    'getLastname',
    {
      http: {path: '/getLastname', verb: 'get'},
      accepts: {arg: 'id', type: 'number', http: {source: 'query'}},
      returns: {arg: 'name', type: 'string'}
    }
  );

  /** getLastnames */
  Person.getLastnames = function(cb) {
    Person.find(function(err, instance){
      cb(null, instance.lastname);
    });
  };

  Person.remoteMethod(
    'getLastnames',
    {
      http: {path: '/lastnames', verb: 'get'},
      returns: {arg: 'name', type: 'string'}
    }
  );
};
