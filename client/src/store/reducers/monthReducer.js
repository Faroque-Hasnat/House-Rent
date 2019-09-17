import * as Types from '../actions/types'

const monthReducer = (state = [], action) => {
   switch(action.type) {
      case Types.LOAD_MONTH: {
         return (
            action.payload.months
            
         )
      }
      
      default: return state
   }
}

export default monthReducer