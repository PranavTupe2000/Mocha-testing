const Student = require("../app/student");
const assert = require("assert");

describe("Read Test",()=>{
    let reader;
    beforeEach((done) => {
        reader = new Student({name: "Reader"});
        reader.save()
            .then(()=>{
                done();
            })
            .catch((err)=>{
                console.log("...................");
                console.log(err);
                done();
            })
    })

    it("Read student from DB",(done)=>{
        Student.find({name: "Reader"})
            .then((students)=>{
                assert(reader._id.toString() == students[0]._id.toString())
                done();
            })
            .catch((err)=>{
                console.log("...................");
                console.log(err);
                done();
            })
    })
});