'use strict';

var mongoose = require('mongoose'),
    People = mongoose.model('People');

exports.list_all_people = function(req, res) {
  People.find({}, function(err, person) {
    if (err)
      res.send(err);
    res.json(person);
  });
};

exports.create_a_person = function(req, res) {
  var new_person = new People(req.body);
  new_person.save(function(err, person) {
    if (err)
      res.send(err);
    res.json(person);
  });
};

exports.read_a_person = function(req, res) {
  People.findById(req.params.personId, function(err, person) {
    if (err)
      res.send(err);
    res.json(person);
  });
};

exports.update_a_person = function(req, res) {
  People.findOneAndUpdate({_id: req.params.personId}, req.body, {new: true}, function(err, person) {
    if (err)
      res.send(err);
    res.json(person);
  });
};

exports.delete_a_person = function(req, res) {
  People.remove({
    _id: req.params.personId
  }, function(err, person) {
    if (err)
      res.send(err);
    res.json({ message: 'People successfully deleted' });
  });
};
