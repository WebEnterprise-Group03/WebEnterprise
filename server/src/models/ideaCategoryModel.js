const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IdeaCategorySchema = new Schema(
  {
    name: String,
    description: String,
    ideas:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ideas',
      },
    ],
  },
  {
    collection: 'ideaCategories',
  },
);
module.exports = mongoose.model('ideaCategories', IdeaCategorySchema);
