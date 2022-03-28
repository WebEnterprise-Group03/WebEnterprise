const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReactionSchema = new Schema(
  {
    like: Number,
    dislike: Number,
  },
  {
    collection: 'reactions',
  },
  {
    timestamp: true,
  },
);
module.exports = mongoose.model('reactions', ReactionSchema);
