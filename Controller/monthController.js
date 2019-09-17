const Month = require('../Model/Month')
const Tenant = require('../Model/Tenant')
const { resourceError, serverError } = require('../util/error')

module.exports = {
   create(req, res, next) {
      let { unit, month, id } = req.body

      let electricityBill = unit => {
         if(unit < 300) {
            return unit * 5.5
         } else {
            return unit * 6
         }
      }

      let totalAmount = (a, b, c, d) => {
         return a + b + c + d
      }

      Tenant.findById({_id: id})
            .then(tenant => {
               if(!tenant) {
                  return resourceError(res, 'Tenant Not Found!!')
               } else {
                  let { perMonthGas, perMonthWater, rent, _id } = tenant
                  let abcd = {
                     rent,
                     electricityBill: electricityBill(unit),
                     gasBill: perMonthGas,
                     waterBill: perMonthWater,
                  }
                  let months = new Month({
                     rent,
                     unit,
                     month,
                     electricityBill: electricityBill(unit),
                     gasBill: perMonthGas,
                     waterBill: perMonthWater,
                     totalAmount: totalAmount(abcd.rent, abcd.electricityBill, abcd.gasBill, abcd.waterBill),
                     author: _id
                  })

                  months.save()
                        .then(months=> {
                           let updateTenent = tenant
                           updateTenent.due += parseInt(months.totalAmount)
                           updateTenent.totalUnits += parseInt(months.unit)

                           updateTenent.month.unshift(months._id)
                           
                           Tenant.findByIdAndUpdate(updateTenent._id, {$set: updateTenent}, {new: true})
                                 .then(tenant => {
                                    return res.status(200).json({
                                       message: 'Update Tenant Successfully!!',
                                       tenant
                                    })
                                 })
                                 .catch(error => serverError(res, error))
                        })
                        .catch(error => serverError(res, error))
                  
               }
            })
            .catch(error => serverError(res, error))

   },

   getallmonth(req, res, next) {
      let { id } = req.params

      Month.find({author: id})
            .then(months => {
               return res.status(200).json(months)
            })
            .catch(error => serverError(res, error))
   }
}