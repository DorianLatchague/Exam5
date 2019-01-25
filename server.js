const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(__dirname + "/public/dist/public"));

const bodyParser = require("body-parser");
app.use(bodyParser.json());

require('./server/routes')(app);
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
app.listen(8000, function(){
    console.log("listening on port 8000")
})



