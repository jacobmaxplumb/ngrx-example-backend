'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PersonSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  age: {
    type: Number
  }
});

module.exports = mongoose.model('People', PersonSchema);
