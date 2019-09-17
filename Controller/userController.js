const User = require('../Model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { serverError, resourceError } = require('../util/error')

module.exports = {
   register(req, res, next) {
      let { name, userName, password, code } = req.body
      let secret = 'haSnat123123'

      if(password.length < 6 ) {
         return res.status(400).json({
            passwordError: 'Password Must be Greater or Equal 6 Character'
         })
      } else if(code !== secret) {
         return res.status(400).json({
            codeError: 'Code doesn\'t Match'
         })
      } else {
         User.findOne({ userName })
               .then(user => {
                  if(user) {
                     return resourceError(res, 'Username Is Already Exist')
                  } else {
                     bcrypt.hash(password, 11, (err, hash) => {
                        if(err) {
                           return serverError(res, error)
                        } else {
                           let user = new User({
                              name,
                              password: hash,
                              userName,
                              tenant: []
                           })
            
                           user.save()
                              .then(user => {
                                 return res.status(200).json({
                                    message: 'User Create Successfully!!',
                                    user
                                 })
                              })
                              .catch(error => serverError(res, error))
                        }
                     })
                  }
               })
         
      }
   },
   login(req, res, next) {
      let { userName, password } = req.body

      User.findOne({ userName })
            .then(user => {
               if(!user) {
                  return res.status(400).json({
                     userError: 'User Not Found!!'
                  })
               } else {
                  bcrypt.compare(password, user.password, (err, result) => {
                     if(err) {
                        return serverError(res, error)
                     } else if(!result) {
                        return resourceError(res, 'Password Incorrect!!')
                     } else {
                        let token= jwt.sign({
                           _id: user._id,
                           name: user.name,
                           userName: user.userName,
                           tenant: user.tenant
                        }, 'secret', {expiresIn: '12h'})

                        return res.status(200).json({
                           message: 'Login Successfully!!',
                           token: `Bearer ${token}`
                        })
                     }
                  })
               }
            })
            .catch(error => serverError(res, error))
   }
}