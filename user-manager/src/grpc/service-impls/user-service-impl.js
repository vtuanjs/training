const grpcHelper = require('@zerocore/grpc-helper');
const userService = require('../../services/user-service');

exports.create = (call, callback) => {
  try {
    userService.create(grpcHelper.analyzeRequest(call.request))
      .then(user => callback(null, grpcHelper.makeReply(user)))
      .catch(callback);
  } catch (error) {
    callback(error);
  }
}