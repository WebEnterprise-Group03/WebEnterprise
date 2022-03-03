const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

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

mongoose.plugin(slug);

module.exports = mongoose.model('ideas', IdeaSchema);
