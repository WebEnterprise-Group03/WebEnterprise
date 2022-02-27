const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AccountSchema = new Schema(
    {
    name: String,
    code: String,
    description: String,
    },
    {
    collection: 'IdeaCategory',
    },
);
module.exports = mongoose.model('IdeaCategory', AccountSchema);