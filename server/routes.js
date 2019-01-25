//require controller so we have access to our logic
const controller = require("./controller");

//this module.exports is a function so we can pass the 'app' to routes.js
module.exports = function(app){
    app.get('/pets', controller.index)
    app.get("/pets/:id", controller.show)
    app.post("/pets/new", controller.new)
    app.put("/pets/edit/:id", controller.edit)
    app.get("/pets/like/:id", controller.like)
    app.delete("/pets/delete/:id", controller.delete)
}



