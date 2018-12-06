var mongoose = require('mongoose');

var task = new mongoose.Schema({
    name: {
        type: String,
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    completed:{
        type:Boolean,
    },
}, {
    timestamps: true
})
// var task = 
mongoose.model('task',task);
