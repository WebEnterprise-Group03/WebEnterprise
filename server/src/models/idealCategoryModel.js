const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IdeaCategorySchema = new Schema(
  {
    name: String,
    code: String,
    description: String,
  },
  {
    collection: 'ideaCategories',
  },
);
module.exports = mongoose.model('ideaCategories', IdeaCategorySchema);
