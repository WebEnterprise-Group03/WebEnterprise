const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');

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
    file: String,
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'accounts',
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comments',
      },
    ],
    ideaCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ideaCategories',
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'accounts',
      },
    ],
    vote:{
      type: Number
    }
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
