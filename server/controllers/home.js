var mongoose = require('mongoose');
var task = mongoose.model('task');
module.exports={
    index:function(req,res){
        res.render("index");
    },
    get:function (req, res) {
        task.find({}, function (err, Users) {
            if (err) {
                res.json({
                    message: "Error",
                    error: err
                })
            } else {
                res.json({
                    message: "success",
                    data: Users
                })
    
            }
        })
    },
    getone:function(req,res){
        task.find({name:req.params.id},function(err,tasks){
            if (err){
                console.log(err)
                res.json({
                    message: "Error",
                    error: err
                })
            }
            else{
                res.json({
                    message: "Success",
                    data:tasks
                });
            }
        })
    },
    create:function(req,res){
        task.create({name:req.body.name,title:req.body.title,description:req.body.description,completed:req.body.completed},function(err){
            console.log(req.body);
            if (err){
                console.log(err)
                res.json({
                    message: "Error",
                    error: err
                })
            }
            else{
                res.redirect('/');
            }
        })
    },
    update:function(req,res){
        task.findOne({_id:req.params.id},function(err,x){
            console.log(req.body);
            if (err){
                console.log(err)
                res.json({
                    message: "Error",
                    error: err
                })
            }
            else{
                x.name=req.body.name;
                x.title=req.body.title;
                x.description=req.body.description;
                x.completed=req.body.completed;
                x.save();
                res.redirect('/');
            }
        })
    },
    delete:function(req,res){
        task.remove({_id:req.params.id},function(err){
            if (err){
                console.log(err)
                res.json({
                    message: "Error",
                    error: err
                })
            }
            else{
                res.redirect('/');
            }
        })
    }
}