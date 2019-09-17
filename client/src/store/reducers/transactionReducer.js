import * as Types from '../actions/types'

const transactionReducer = (state = [], action) => {
   switch(action.type) {
      case Types.LOAD_TRANSACTION: {
         return (
            action.payload.transaction
            
         )
      }
      case Types.ADD_AMOUNT: {
         let transactions = [...state]
         transactions.unshift(action.payload.tran)
         return transactions
      }
      
      default: return state
   }
}

export default transactionReducer