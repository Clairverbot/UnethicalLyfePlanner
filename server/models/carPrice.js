var mongoose=require("mongoose")
var Schema=mongoose.Schema

var CarPriceSchema = new Schema({
    Brand: String,
    Model: String,
    "Engine Capacity (cc)": Number,
    "Basic Cost with COE":Number
})

var CarPrice= mongoose.model("CarPrice", CarPriceSchema, "CarPrice")
module.exports=CarPrice