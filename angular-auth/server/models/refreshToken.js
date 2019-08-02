const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const refreshTokenSchema = new Schema({
  refreshToken: String,
  isValid: Boolean
});

module.exports = mongoose.model(
  'refreshToken',
  refreshTokenSchema,
  'refreshTokens'
);
