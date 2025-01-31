const mongoose = require('mongoose')
const{ObjectId} = mongoose.Schema.Types;
const  userSchema = mongoose.Schema({

name:{
    type: String,
    require:true
},
email:{
    type:String,
    require:true
},
phone:{
    type:String,
    require:true
},
password:{
    type:String,
    require:true
},
type
:{
    type:String,
    require:true
},
createdAt:{
    type:Date, required: true, default: Date.now
}
})

module.exports = mongoose.model('User',userSchema)