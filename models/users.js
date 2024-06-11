const mongoose = require('mongoose');
const {Schema} = mongoose;

//when defining a schema, you can assign what type of field it is or multiple objects
const userSchema = new Schema({
    googleID: String,
    credits: {type: Number, default: 0 }
});

mongoose.model('users', userSchema);