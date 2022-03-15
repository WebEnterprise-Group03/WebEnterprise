const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubmitSchema = new Schema(
  {
    title: String,
    description: String,
    startDate: Number,
    dueDate: Number,
    ideaCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ideaCategories',
    },
  },
  {
    collection: 'submits',
  },
);

module.exports = mongoose.model('submits', SubmitSchema);
