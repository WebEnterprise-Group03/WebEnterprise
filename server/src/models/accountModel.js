const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const comment = require('./cmtModel');
const bcrypt = require('bcryptjs');
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
  },
  {
    collection: 'accounts',
  },
);
AccountSchema.plugin(mongoose_delete, {
  deleteAt: true,
  overrideMethods: 'all',
});

AccountSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    console.log(`The current password is ${this.password}`);
    this.password = await bcrypt.hash(this.password, 10);
    console.log(`The current password is ${this.password}`);
  }

  next();
});

// AccountSchema.pre('save', function (next) {
//   // ENCRYPT PASSWORD
//   const user = this;
//   if (!user.isModified('password')) {
//     return next();
//   }
//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(user.password, salt, (_, hash) => {
//       user.password = hash;
//       next();
//     });
//   });
// });

// Need to use function to enable this.password to work.
// AccountSchema.methods.comparePassword = function (password, done) {
//   bcrypt.compare(password, this.password, (err, isMatch) => {
//     done(err, isMatch);
//   });
// };

module.exports = mongoose.model('accounts', AccountSchema);
