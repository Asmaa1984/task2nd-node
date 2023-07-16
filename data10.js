const fs = require("fs")
const addPerson = (id , fname , lname,age,city)=>{
    const allData = loadData();
    allData.push({
        id:id,
        fName:fname,
        lName:lname,
        age:age,
        city:city
    })
    saveAllData(allData)
}
const loadData = ()=>{
    try{
        const dataJson = fs.readFileSync("data.json").toString()
        return JSON.parse(dataJson)
    }
    catch{
        return []
    }
}
const saveAllData = (allData)=>{
    const saveAllDataJson = JSON.stringify(allData)
    fs.writeFileSync("data.json" , saveAllDataJson)
}
const DeletedId = (id )=>{
    const allData = loadData();
    const index1 = allData.findIndex(obj => obj.id === id);
    if(index1 !=-1){
        allData.splice(index1 , 1)
    }
    else{
        console.log(`id: ${id} is not found`)
    }
    saveAllData(allData);
    

}
const FindData = (index )=>{
    const allData = loadData();
    const data = allData[index];
    if(data !== undefined){
        console.log(data)
    }
    else{
        console.log(`index: ${index} is not found`)
    }
    

}
module.exports = {
    addPerson , DeletedId , FindData,loadData
}