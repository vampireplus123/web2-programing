const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VocabSchema = new Schema(
    {
        english: {
            type: String,
            required: 'Cannot be empty'
        },
        german:{
            type:String,
            required:'Cannot be empty'
        }
    },
    {collection: 'vocab'}
);

module.exports = mongoose.model('Vocab', VocabSchema);