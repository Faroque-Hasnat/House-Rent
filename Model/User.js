const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
   name: {
     type: String,
     required: true,
     trim: true
   },
   userName: {
    type: String,
    required: true,
    trim: true
  },
   password: {
      type: String,
      required: true
   },
   tenant: {
     type: [{
       type: Schema.Types.ObjectId,
       ref: 'Tenant'
     }]
   }
 })
 
 const User = mongoose.model('User', userSchema)
 module.exports = User