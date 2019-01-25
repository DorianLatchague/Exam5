var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost/Exam3',{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
var PetSchema = new mongoose.Schema({
    name: {type: String, unique: true, required : [true, "Name is required"], minlength: [3, "Name must be at least 3 characters long"]},
    type: {type: String, required : [true, "Type is required"], minlength: [3, "Type must be at least 3 characters long"]},
    description: {type: String, required : [true, "Description is required"], minlength: [3, "Description must be at least 3 characters long"]},
    likes: {type: Number, default : 0},
    skills: [],
},{timestamps: true});
PetSchema.plugin(uniqueValidator, {message: 'Name already exists.'})
mongoose.model('Pet', PetSchema);
module.exports = mongoose.model('Pet')
