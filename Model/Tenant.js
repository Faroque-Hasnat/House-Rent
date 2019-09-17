const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tenantSchema = new Schema({
   name: {
     type: String,
     required: true,
     trim: true
   },
   location: {
      type: String,
      required: true
    },
   perMonthGas: Number,
   perMonthWater: Number,
   due: Number,
   rent: Number,
   totalUnits: Number,
   transaction: {
     type: [{
       type: Schema.Types.ObjectId,
       ref: 'Transaction'
     }]
   },
   month: {
      type: [{
        type: Schema.Types.ObjectId,
        ref: 'Month'
      }]
    },
   author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
   }
 })
 
 const Tanent = mongoose.model('Tanent', tenantSchema)
 module.exports = Tanent