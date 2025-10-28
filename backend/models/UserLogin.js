
const mongoose = require('mongoose');

const userLoginSchema = new mongoose.Schema({
  gmail: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { collection: 'user_login' }); 

module.exports = mongoose.model('UserLogin', userLoginSchema);
