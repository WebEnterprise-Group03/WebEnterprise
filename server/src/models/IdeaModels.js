const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AccountSchema = new Schema(
    {
        title: String,
        description: String,
        file: String,
        name:{
        type: mongoose.Schema.Types.ObjectId,
            ref: "accounts"
        },
        category:{
        type: mongoose.Schema.Types.ObjectId,
            ref: "categorys"
        }
    },
    {
    collection: 'ideas',
    },
    {
    timestamp:true,
    }
);
module.exports = mongoose.model('Idea', AccountSchema);