const grpcHelper = require('@zerocore/grpc-helper');
const userService = require('../../services/user-service');

exports.list = (call, callback) => {
  try {
    userService.list(grpcHelper.analyzeRequest(call.request))
      .then(users => callback(null, grpcHelper.makeReply(users)))
      .catch(callback);
  } catch (error) {
    callback(error);
  }
}

exports.create = (call, callback) => {
  try {
    userService.create(grpcHelper.analyzeRequest(call.request))
      .then(user => callback(null, grpcHelper.makeReply(user)))
      .catch(callback);
  } catch (error) {
    callback(error);
  }
}