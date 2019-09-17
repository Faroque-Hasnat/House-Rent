import * as Types from '../actions/types'

const tenant = (state = [], action) => {
   switch(action.type) {
      case Types.LOAD_TENANT: {
         return (
            action.payload.tenant
         )
      }
      
      default: return state
   }
}

export default tenant