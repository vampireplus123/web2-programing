const mongoose = require('mongoose');
// const Vocab = mongoose.model('Vocab');
const Word = require('../models/vocabModel'); // <-- fix lỗi 'Word is not defined'

exports.list_all_words = (req, res) => {
  Vocab.find({}, (err, words) => {
    if (err) return res.status(500).send(err);
    return res.json(words);
  });
};

exports.create_a_word = async (req, res) => {
  try {
    const { _id, ...rest } = req.body; 
    const newWord = new Word(rest);
    await newWord.save();
    return res.status(201).json({ message: 'Word created successfully', word: newWord });
  } catch (error) {
    console.error('Error saving word:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


exports.read_a_word = (req, res) => {
  Vocab.findById(req.params.wordId, (err, word) => {
    if (err) return res.status(500).send(err);
    return res.json(word);
  });
};

exports.update_a_word = (req, res) => {
  Vocab.findOneAndUpdate(
    { _id: req.params.wordId },
    req.body,
    { new: true },
    (err, word) => {
      if (err) return res.status(500).send(err);
      return res.json(word);
    }
  );
};

exports.delete_a_word = (req, res) => {
  Vocab.deleteOne({ _id: req.params.wordId }, err => {
    if (err) return res.status(500).send(err);
    return res.json({
      message: 'Word successfully deleted',
      _id: req.params.wordId
    });
  });
};