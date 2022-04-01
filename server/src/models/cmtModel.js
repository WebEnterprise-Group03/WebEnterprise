const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CmtSchema = new Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'accounts',
    },
    content: String,
  },

  {
    collection: 'comments',
  },
);

module.exports = mongoose.model('comments', CmtSchema);
