const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Student } = require('../models/student');

// => localhost:3000/students/list
router.get('/', (req, res) => {
    Student.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retrieving Students :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
     if (!ObjectId.isValid(req.params.id))         
     return res.status(400).send(`No record with given id : ${req.params.id}`);
     Student.findById(req.params.id, (err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Retrieving Students :' + JSON.stringify(err, undefined, 2)); }
     });
});

router.post('/', (req, res) => {
     var stud = new Student({
         name: req.body.name,
         usn: req.body.usn,
         sem1: req.body.sem1,
         sem2: req.body.sem2,
         sem3: req.body.sem3,
         sem4: req.body.sem4,
         sem5 :req.body.sem5
     });
      stud.save((err, doc) => {
      if (!err) { res.send(doc); }
         else { console.log('Error in Student Save :' + JSON.stringify(err, undefined, 2)); }
     });
 });

 router.put('/:id', (req, res) => {
     if (!ObjectId.isValid(req.params.id))
         return res.status(400).send(`No record with given id : ${req.params.id}`);
          var stud = {
            name: req.body.name,
            usn: req.body.usn,
            sem1: req.body.sem1,
            sem2: req.body.sem2,
            sem3: req.body.sem3,
            sem4: req.body.sem4,
            sem5 :req.body.sem5
     };
     Student.findByIdAndUpdate(req.params.id, { $set: stud }, { new: true }, (err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Student Update :' + JSON.stringify(err, undefined, 2)); }
     });
 });

 router.delete('/:id', (req, res) => {
     if (!ObjectId.isValid(req.params.id))
         return res.status(400).send(`No record with given id : ${req.params.id}`);

     Student.findByIdAndRemove(req.params.id, (err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Student Delete :' + JSON.stringify(err, undefined, 2)); }
     });
 });

module.exports = router;