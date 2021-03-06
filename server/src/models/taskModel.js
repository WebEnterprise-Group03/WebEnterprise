const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');

const TaskSchema = new Schema(
  {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
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
  },
  {
    collection: 'tasks',
  },
);

// mongoose.plugin(slug);
TaskSchema.plugin(mongoose_delete, {
  deleteAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('tasks', TaskSchema);
