const mongoose = require('mongoose')
const Schema = mongoose.Schema

const monthSchema = new Schema({
   rent: Number,
   unit: Number,
   electricityBill: Number,
   gasBill: Number,
   waterBill: Number,
   totalAmount: Number,
   month: {
      type: String,
      required: true
   },
   author: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant'
   }
 })
 
 const Month = mongoose.model('Month', monthSchema)
 module.exports = Month