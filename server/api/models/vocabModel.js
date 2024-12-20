const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VocabSchema = new Schema(
    {
        english:{
            type: String,
            required: 'English cannot be blank'
        },
        german:{
            type: String,
            required: 'German cannot be blank'
        },
        finish:{
            type: String,
            required: 'inish cannot be blank'
        },
    },
    {collection: 'vocab'}
);
module.exports = mongoose.model('Vocab',VocabSchema);