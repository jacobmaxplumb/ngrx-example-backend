'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  task: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  completed: {
    type: Boolean
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
