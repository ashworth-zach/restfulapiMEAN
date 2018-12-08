var home = require('../controllers/home.js');

module.exports = function(app){

	app.get('/tasks', function(req, res) {
        home.get(req,res);
    });
    app.get('/tasks/:id', function(req, res) {
        home.getone(req,res);
    });
    app.post('/tasks', function(req, res) {
        home.create(req,res);
    });
    app.patch('/tasks/:id', function(req, res) {
        home.update(req,res);
    });
    app.delete('/tasks/:id', function(req, res) {
        home.delete(req,res);
    });
    app.get("/",function(req,res){
        home.index(req,res);
    })
}