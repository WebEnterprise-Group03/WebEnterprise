const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const IdeaSchema = new Schema(
  {
    title: String,
    description: String,
    // file: String,
    // name: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'accounts',
    // },
    // category: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'ideaCategories',
    // },
  },
  {
    collection: 'ideas',
  },
  {
    timestamp: true,
  },
);
module.exports = mongoose.model('ideas', IdeaSchema);
