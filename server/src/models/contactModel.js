const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ContactSchema = new Schema(
  {
    like: Number,
    dislike: Number,
    comment: String,

  },
  {
    collection: 'contact',
  },
  {
    timestamp: true,
  },
);
module.exports = mongoose.model('contact', ContactSchema);