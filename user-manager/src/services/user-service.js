const { UserModel } = require('../models');

/**
 * @param {object} user
 */
exports.create = (user) => {
  return UserModel.create(user);
}