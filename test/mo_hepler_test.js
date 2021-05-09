const mongoose = require("mongoose");
mongoose.Promise = global.Promise; //ES6 Promises

before((done)=>{
    mongoose.connect("mongodb://localhost/OnePlayer",{useNewUrlParser: true, useUnifiedTopology: true })   
mongoose.connection
    .once("open",()=> {
        console.log("Connected")
        done();  
    })
    .on("error", (err)=>{
        console.log(err)
    })
});

beforeEach((done)=>{
    mongoose.connection.collections.students.drop(()=>{
        //console.log("Droped Success")
        done();
    })
})