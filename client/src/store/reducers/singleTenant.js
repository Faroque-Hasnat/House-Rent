import * as Types from '../actions/types'

const singleTenant = (state = [], action) => {
   switch(action.type) {
      case Types.SIGLE_TENANT: {
         return (
            action.payload.singleTenant
            
         )
      }
      case Types.ADD_AMOUNT: {
         return (
            action.payload.singleTenant
         )
      }
      
      default: return state
   }
}

export default singleTenant