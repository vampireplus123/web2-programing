const mongoose = require('mongoose');
const Vocab = mongoose.model('Vocab');

exports.list_all_tasks = function(req, res) { // Changed from list_all_Vocabs
    Vocab.find({}, function(err, vocabs) { // Changed variable name for clarity
        if (err)
            return res.status(500).send(err); // Return a 500 error
        res.json(vocabs);
    });
};

exports.create_a_task = function(req, res) { // Changed from create_a_Vocab
    const new_Vocab = new Vocab(req.body);
    new_Vocab.save(function(err, vocab) { // Changed variable name for clarity
        if (err)
            return res.status(500).send(err); // Return a 500 error
        res.json(vocab);
    });
};

exports.read_a_task = function(req, res) { // Changed from read_a_Vocab
    Vocab.findById(req.params.wordId, function(err, vocab) { // Changed from VocabId and variable name
        if (err)
            return res.status(500).send(err); // Return a 500 error
        res.json(vocab);
    });
};

exports.update_a_task = function(req, res) { // Changed from update_a_Vocab
    Vocab.findOneAndUpdate({_id: req.params.wordId}, req.body, {new: true}, function(err, vocab) { // Changed from VocabId and variable name
        if(err)
            return res.status(500).send(err); // Return a 500 error
        res.json(vocab);
    });
};

exports.delete_a_task = function(req, res) { // Changed from delete_a_Vocab
    Vocab.remove({
        _id: req.params.wordId // Changed from VocabId
    }, function(err) {
        if (err)
            return res.status(500).send(err); // Return a 500 error
        res.json({ message: 'Vocab successfully deleted' });
    });
};
