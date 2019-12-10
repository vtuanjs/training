const grpcHelper = require('@zerocore/grpc-helper');
const productService = require('../../services/product-service');

exports.delete = (call, callback) => {
  try {
    productService.delete(grpcHelper.analyzeRequest(call.request))
    .then(product => callback(null, grpcHelper.makeReply(product)))
    .catch(callback)
  } catch (error) {
    callback(error)
  }
}

exports.update = (call, callback) => {
  try {
    productService.update(grpcHelper.analyzeRequest(call.request))
    .then(product => callback(null, grpcHelper.makeReply(product)))
    .catch(callback)
  } catch (error) {
    callback(error)
  }
}

exports.list = (call, callback) => {
  try {
    productService.list(grpcHelper.analyzeRequest(call.request))
    .then(products => callback(null, grpcHelper.makeReply(products)))
    .catch(callback)
  } catch (error) {
    callback(error)
  }
}


exports.create = (call, callback) => {
  try {
    productService.create(grpcHelper.analyzeRequest(call.request))
      .then(product => callback(null, grpcHelper.makeReply(product)))
      .catch(callback);
  } catch (error) {
    callback(error);
  }
}

