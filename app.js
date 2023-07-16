const yargs = require("yargs");
const data10 = require("./data10")
yargs.command({
    command:"add",
    describe:"add an item",
    builder:{
        id:{
            describe:"this is id",
            demandOption:true,
            type:"number"
        },
        fName:{
            describe:"this is first name",
            demandOption:true,
            type:"string"
        },
        lName:{
            describe:"this is first name",
            demandOption:true,
            type:"string"
        },
        age:{
            describe:"this is first name",
            demandOption:true,
            type:"number"
        },
        city:{
            describe:"this is first name",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        data10.addPerson(x.fName , x.lName , x.age , x.city)
    }
})
yargs.command({
    command :"delete",
    describe:"delete an item",
    builder:{
        id:{
            describe:"this is id",
            demandOption:true,
            type:"number"
        }
    },
    handler:(x)=>{
        data10.DeletedId(x.id)
    }
})
yargs.command({
    command :"find",
    describe:"find an item",
    builder:{
        itemNum:{
            describe:"this is item number",
            demandOption:true,
            type:"number"
        }
    },
    handler:(x)=>{
        data10.FindData(x.itemNum-1)
    }
})
yargs.parse();
const allData = data10.loadData()
const allData2 = allData.map((person)=>{
    const ob = {fName:person.fName,lName:person.lName,city:person.city}
    return ob
})
console.log(allData2)
console.log(allData[4])
