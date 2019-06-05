module.exports = function(){
    var db = require('./../libs/connect_db')();
    var Schema = require('mongoose').Schema;

    var task = Schema({
        nome: String,
        matricula: String,
        turma: String
    });
    

    return db.model('tasks', task);
}