let mongoose = require('mongoose');
var connection=mongoose.connect('mongodb://localhost:27017/restapi', { useNewUrlParser: true});
module.exports={connection};
