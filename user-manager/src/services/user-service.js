const { UserModel } = require('../models');

exports.list = async () => {
  try {
    const users = await UserModel.find()

    return {
      data: users
    }
  } catch(eror){
    throw(eror)
  }
}
/**
 * @param {object} user
 */
exports.create = (user) => {
  return UserModel.create(user);
}