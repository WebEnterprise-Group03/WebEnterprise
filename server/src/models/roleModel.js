const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema(
  {
    name: String,
  },
  {
    collection: 'roles',
  },
);

module.exports = mongoose.model('roles', RoleSchema);
