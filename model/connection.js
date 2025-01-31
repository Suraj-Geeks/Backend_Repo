const mongoose = require('mongoose') 

async function connectTODB(){

    try{

        await mongoose.connect('mongodb+srv://raisuraj1789:123@cluster0.61krx.mongodb.net/JobForum')
        console.log("DB Connection set up successfully!")
        
    }

    catch(error){

    console.log("Error Found!", error);
    
    }
}

module.exports = connectTODB