const Tenant = require('../Model/Tenant')
const User = require('../Model/User')
const { serverError, resourceError } = require('../util/error')

module.exports = {
   create(req, res, next) {
      let { name, location, perMonthGas, perMonthWater, totalUnits, rent, due } = req.body
      let { id } = req.params

      let tenant = new Tenant({
         name,
         location,
         perMonthGas,
         perMonthWater,
         due,
         rent,
         author: id,
         totalUnits,
         transaction: [],
         month: []
      })

      tenant.save()
            .then(tenant => {

               User.findById({_id: id})
                     .then(user => {
                        let updateUser = user
                        updateUser.tenant.unshift(tenant._id)

                        User.findByIdAndUpdate(updateUser._id, {$set: updateUser}, {new: true})
                              .then(result => {
                                 return res.status(200).json({
                                    message: 'Tenant Created Successfully!!',
                                    result
                                 })
                              })
                              .catch(error => serverError(res, error))
                     })
                     .catch(error => serverError(res, error))
            })
            .catch(error => serverError(res, error))
   },

   getalltenants(req, res, next) {
      let { id } = req.params
      Tenant.find({author: id})
            .then(tenant => {
               return res.status(200).json(tenant)
            })
            .catch(error => {
               console.log(error)
               return res.status(500).json({
                  message: 'Server error occured!!'
               })
            })
   },

   getsingletenant(req, res, next) {
      let { id } = req.params

      Tenant.findById({_id: id})
            .then(tenant => {
               res.status(200).json(tenant)
            })
            .catch(error => serverError(res, error))
   }
}