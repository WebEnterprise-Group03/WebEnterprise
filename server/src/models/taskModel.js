const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const TaskSchema = new Schema(
  {
    title: String,
    description: String,
    // startDate: Number,
    // dueDate: Number,
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
