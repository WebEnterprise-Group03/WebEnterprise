const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    like: Number,
    dislike: Number,
    comment: String,
  },
  {
    collection: 'contacts',
  },
  {
    timestamp: true,
  },
);
module.exports = mongoose.model('contacts', ContactSchema);
