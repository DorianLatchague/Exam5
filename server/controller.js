//export a dictionary of all the callback functions you originally had in the routes
const Pet = require('./models');
module.exports = {
    index: function(req,res){
        Pet.find({}).sort("type")
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    show: function(req,res){
        Pet.findById({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    new: function(req,res){
        var new_pet = new Pet({name:req.body.name, type:req.body.type, description:req.body.description, skills:[req.body.skill1,req.body.skill2,req.body.skill3]});
        new_pet.save()
            .then(data=>res.json(data))
            .catch(err => res.json(err));
    },
    like: function(req,res){
        console.log(req.params.id)
        Pet.findOneAndUpdate({_id: req.params.id},{$inc: {"likes":1}})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    edit: function(req,res){
        var skilllist = [req.body.skill1,req.body.skill2,req.body.skill3];
        Pet.findOneAndUpdate({_id: req.params.id},{name: req.body.name, type:req.body.type,description:req.body.description, $set:{skills:skilllist}},{runValidators: true,context: 'query'})
            .then(data=>res.json(data))
            .catch(err => res.json(err));
    },
    delete: function (req, res){
        Pet.remove({_id: req.params.id})
            .then(data=>res.json(data))
            .catch(err => res.json(err));  
    }
}







