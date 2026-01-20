const {MongoClient}=require("mongodb")
const path="mongodb://127.0.0.1:27017/"
const dbname="employee"
const colname="sdetails"
try{
const client=new MongoClient(path)
client.connect() //connection mongodb and node
console.log("connection success")
const inp=[{sno:9,sname:'padmapriya',mark:70,result:"pass"},{sno:10,sname:'arulmozhi',mark:88,result:"pass"},{sno:11,sname:'kowsalya',mark:65,result:"fail"}]
const dbset=client.db(dbname).collection(colname).insertMany(inp)
dbset.then((result)=>{
console.log("successfully inserted",result)
})
}
catch{
 console.log("error!!!")
}









































































