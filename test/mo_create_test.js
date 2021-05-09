const Student = require('../app/student');
const assert = require('assert');

describe("Create Test",()=>{
    it("create user in db",()=>{
        //assert(true);
        const sam = new Student({name: "sam"});
        sam.save()
            .then(()=>{
                assert(!sam.isNew);
            })
            .catch(()=>{
                console.log("error");
            })
    })
})