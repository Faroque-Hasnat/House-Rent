const Transaction = require('../Model/Transaction')
const Tenant = require('../Model/Tenant')
const { serverError, resourceError } = require('../util/error')

module.exports = {
   create(req, res, next) {
      let { amount } = req.body
      let author = req.body.id

      let d = new Date()
      let month = (d.getMonth()) + 1
      let date = d.getDate()
      let year = d.getFullYear()

      let getHours = d.getHours()
      let hour = () => {
         if(getHours === 0) {
            return 12
         } else if(getHours < 13) {
            return getHours
         } else if(getHours = 13) {
            return '0' + 1
         } else if(getHours = 14) {
            return '0' + 2
         } else if(getHours = 15) {
            return '0' + 3
         } else if(getHours = 16) {
            return '0' + 4
         } else if(getHours = 17) {
            return '0' + 5
         } else if(getHours = 18) {
            return '0' + 6
         } else if(getHours = 19) {
            return '0' + 7
         } else if(getHours = 20) {
            return '0' + 8
         } else if(getHours = 21) {
            return '0' + 9
         } else if(getHours = 22) {
            return 10
         } else if(getHours = 23) {
            return 11
         }
      }

      let getMinute = d.getMinutes()
      let minute = () => {
         if(getMinute < 10) {
            return '0' + getMinute
         } else {
            return getMinute
         }
      }

      let ampm = () => {
         if(getHours < 12) {
            return 'am'
         } else {
            return 'pm'
         }
      }
      let abc = hour() + ':' + minute() + ampm()

      console.log(abc)

      let transaction = new Transaction({
         date,
         month,
         amount,
         year,
         time: abc,
         author
      })

      transaction.save()
            .then(transaction => {
               Tenant.findById({_id: author})
                     .then(tenant => {
                        let updateTenant = tenant
                        updateTenant.due -= amount

                        updateTenant.transaction.unshift(transaction._id)

                        Tenant.findByIdAndUpdate(updateTenant._id, {$set: updateTenant}, {new: true})
                                 .then(tenant => {
                                    return res.status(200).json({
                                       message: 'Update Tenant Successfully!!',
                                       tenant,
                                       transaction
                                    })
                                 })
                                 .catch(error => serverError(res, error))
                     })
                     .catch(error => serverError(res, error))
            })
            .catch(error => serverError(res, error))

   },

   getalltransaction(req, res, next) {
      let { id } = req.params

      Transaction.find({author: id})
            .then(transaction => {
               return res.status(200).json(transaction)
            })
            .catch(error => serverError(res, error))
   }
}