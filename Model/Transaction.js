const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
   date: Number,
   month: Number,
   year: Number,
   amount: Number,
   time: String,
   author: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant'
   }
 })
 
 const Transaction = mongoose.model('Transaction', transactionSchema)
 module.exports = Transaction