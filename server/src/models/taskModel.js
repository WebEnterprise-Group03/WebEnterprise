const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const TaskSchema = new Schema(
  {
    dayTime: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      slug: 'title',
      unique: true,
      required: true,
    },
    ideaCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ideaCategories',
    },
  },
  {
    collection: 'tasks',
  },
);

module.exports = mongoose.model('tasks', TaskSchema);
