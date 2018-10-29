var mongoose = require("mongoose")
var Schema = mongoose.Schema

var StartingPaySchema = new Schema({
    "Course Cluster": String,
    "Employment Rate (%)": Number,
    "Median Starting PayMedian Monthly Gross Starting Salary ($)": Number,
})

var StartingPay = mongoose.model("StartingPay", StartingPaySchema, "StartingPay")
module.exports = StartingPay