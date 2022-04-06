const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CmtSchema = new Schema(
  {
    content: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'accounts',
    },
    idea: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ideas',
    },
  },

  {
    collection: 'comments',
  },
);

module.exports = mongoose.model('comments', CmtSchema);
