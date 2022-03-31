const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReactionSchema = new Schema(
  {
    like : 
    [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'accounts' 
    }],
    dislike : 
    [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'accounts' 
    }],
    voteScore : 
      { 
      type: Number 
      },
  },
  {
    collection: 'reactions',
  },
  {
    timestamp: true,
  },
);
module.exports = mongoose.model('reactions', ReactionSchema);
