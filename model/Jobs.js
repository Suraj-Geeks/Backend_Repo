const mongoose = require('mongoose')
const{ObjectId} = mongoose.Schema.Types;
const jobschema = new mongoose.Schema({

title:{
    type: String,
    require:true
},
salary:{
    type: Number,
    require:true
},
location:{
    type:String,
    require:true
},
jd:{
    type:String,
    require:true
},
opening:{
    type:Number,
    require:true
},
createdAt:{
    type:Date, required: true, default: Date.now
}
})

module.exports = mongoose.model('Job',jobschema)