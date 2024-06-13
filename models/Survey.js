const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipients');

//use mongoose to create the classes for the database
const surverySchema = new Schema({
    title:String,
    subject:String,
    body:String,
    //array of strings
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0},
    no: {type: Number, default: 0},
    _user: { type:Schema.Types.ObjectId, ref: 'users'},
    dateSent: Date,
    lastResponded: Date
});
//load into mongoose library
mongoose.model('surveys', surverySchema);

//when we write a file like this its not connect anywhere
//so we have to require it in to some other file in order to get read
//this will be required into the server index.js