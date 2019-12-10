const mongoose = require('mongoose');
const { Schema } = mongoose;

let userSchema = new Schema(
  {
    name: String,
    password: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('User', userSchema, 'users');