const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const comment = require('./cmtModel');
const mongoose_delete = require('mongoose-delete');

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
    // avatar: {
    //   type: String,
    //   required: false,
    // },
    // role: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'roles',
    // },
  },
  {
    collection: 'accounts',
  },
);
AccountSchema.plugin(mongoose_delete, {
  deleteAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('accounts', AccountSchema);
