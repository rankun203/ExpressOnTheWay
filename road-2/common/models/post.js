module.exports = function (Post) {
  Post.status = function (cb) {
    var currentDate = new Date();
    console.log("Current hour is " + currentDate);

    var response = {
      cur: currentDate
    };
    cb(null, response);
  };

  Post.remoteMethod(
    "status",
    {
      http: {path: '/status', verb: 'get'},
      returns: {arg: 'status', type: 'string'}
    }
  );
};
