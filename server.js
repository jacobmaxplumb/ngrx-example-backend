var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'), //created model loading here
    People = require('./api/models/peopleListModel'),
    bodyParser = require('body-parser');
    cors = require('cors');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', {
    useMongoClient: true
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var peopleList = require('./api/controllers/peopleListController');
var todoList = require('./api/controllers/todoListController');
app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

app.route('/people')
    .get(peopleList.list_all_people)
    .post(peopleList.create_a_person);


app.route('/people/:personId')
    .get(peopleList.read_a_person)
    .put(peopleList.update_a_person)
    .delete(peopleList.delete_a_person);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);