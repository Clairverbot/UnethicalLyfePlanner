var mongoose=require("mongoose")
var Schema=mongoose.Schema

var PBISchema = new Schema({
    index: String,
    "25 - 29 Years Basic Wage ($)" : Number,
    "30 - 39 Years Basic Wage ($)" : Number,
    "40 - 49 Years Basic Wage ($)" : Number,
    "50 - 59 Years Basic Wage ($)" : Number,
    Category: String,
    "25th Percentile ($)" : Number,
    "Median ($)" : Number,
    "75th Percentile ($)" : Number,
})

var PBI= mongoose.model("PayByIndustry", PBISchema, "PayByIndustry")
module.exports=PBI