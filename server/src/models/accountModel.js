const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    // dateOfBirth: {
    //   type: String,
    //   required: true,
    // },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
    },
  },
  {
    collection: 'accounts',
  },
);
module.exports = mongoose.model('accounts', AccountSchema);
