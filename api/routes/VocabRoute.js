module.exports = function(app) {
    const VocabBuilder = require('../controllers/vocabController');
    console.log('VocabBuilder:', VocabBuilder);

    app.route('/words')
        .get(VocabBuilder.list_all_tasks) // should match the updated function name
        .post(VocabBuilder.create_a_task); // should match the updated function name

    app.route('/words/:wordId') // should match the updated parameter
        .get(VocabBuilder.read_a_task) // should match the updated function name
        .put(VocabBuilder.update_a_task) // should match the updated function name
        .delete(VocabBuilder.delete_a_task); // should match the updated function name
};
