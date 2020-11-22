const mongoose = require('mongoose');

var Student = mongoose.model('Student', {
    name: { type: String },
    usn: { type: String },
    sem1 : { type: Number },
    sem2 : { type: Number },
    sem3: { type: Number },
    sem4: { type: Number },
    sem5: { type: Number },
});

module.exports = {  Student
 };