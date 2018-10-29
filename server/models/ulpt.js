var mongoose=require("mongoose")
var Schema=mongoose.Schema

var ULPTSchema = new Schema({
    ulpt: String
})

var ULPT= mongoose.model("ULPT", ULPTSchema, "ULPT")
module.exports=ULPT