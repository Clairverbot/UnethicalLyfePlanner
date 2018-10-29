var mongoose = require("mongoose")
var Schema = mongoose.Schema

var HouseholdExpenditureSchema = new Schema({
    "Expenditure Quintile": String,
    "Category": String,
    "Value": Number
})

var HouseholdExpenditure = mongoose.model("HouseholdExpenditure", HouseholdExpenditureSchema, "HouseholdExpenditure")
module.exports = HouseholdExpenditure