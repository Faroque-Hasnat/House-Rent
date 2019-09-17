const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const tenantRoute = require('./Routers/tenantRoute')
const monthRoute = require('./Routers/monthRoute')
const transactionRoute = require('./Routers/transactionRoute')
const userRoute = require('./Routers/userRoute')

const app = express()
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api/tenants', tenantRoute)
app.use('/api/months', monthRoute)
app.use('/api/transactions', transactionRoute)
app.use('/api/users', userRoute)

if(process.env.NODE_ENV === 'production') {
   app.use(express.static('client/build'))
   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', index.html))
   })
}

app.get('/', (req, res, next) => {
   return res.json({
      message: 'Welcome in Our Application'
   })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () =>{
   console.log(`Server is running on PORT ${PORT}`)
   mongoose.connect(`mongodb://${process.env.dbUsername}:${process.env.dbPassword}@money-app-shard-00-00-stx9s.mongodb.net:27017,money-app-shard-00-01-stx9s.mongodb.net:27017,money-app-shard-00-02-stx9s.mongodb.net:27017/houserent?ssl=true&replicaSet=money-app-shard-0&authSource=admin&retryWrites=true&w=majority`,
     { useNewUrlParser: true, useUnifiedTopology: true },
     () => {
     console.log('Database Connnected...');
   })
 })
