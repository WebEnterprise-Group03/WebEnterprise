const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CmtSchema = new Schema(
  {
    content: String,
  },
  {
    collection: 'comments',
  },
);

module.exports = mongoose.model('comments', CmtSchema);
