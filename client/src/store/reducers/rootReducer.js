import { combineReducers } from 'redux'
import authReducer from './authReducer'
import monthReducer from './monthReducer'
import transactionReducer from './transactionReducer'
import singleTenant from './singleTenant'
import tenantReducer from './tenantReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  months: monthReducer,
  transaction: transactionReducer,
  singleTenant: singleTenant,
  tenant: tenantReducer
})

export default rootReducer