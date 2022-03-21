const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const comments = require('./ideaCategoryModel')
const IdeaSchema = new Schema(
  {
    title: String,
    description: String,
    slug: {
      type: String,
      slug: 'title',
      unique: true,
      required: true,
    },
    image: String,
    file: String,
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'accounts',
    },
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'comments',
    }],
    reactions: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'reactions',
    },
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tasks',
    },
    category: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ideaCategories'
    }],
  },
  {
    collection: 'ideas',
  },
  {
    timestamp: true,
  },
);

mongoose.plugin(slug);

module.exports = mongoose.model('ideas', IdeaSchema);
