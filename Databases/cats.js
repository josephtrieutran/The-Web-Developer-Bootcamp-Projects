var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// adding new cat to the DB

// var Chip = new Cat({
//     name: "Chip",
//     age: 11,
//     temperament: "Grouchy"
// });

// Chip.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong!")
//     } else {
//         console.log("Saved the cat to DB")
//         console.log(cat)
//     }
// });

Cat.find({}, function(err, cats){
    if(err){
        console.log("Error")
        console.log(err)
    } else {
        console.log("All the cats")
        console.log(cats)
    }
});