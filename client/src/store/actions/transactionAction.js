import Axios from 'axios'
import * as Types from './types'

export const getAllTransaction = id => dispatch => {
    Axios.get(`/api/transactions/getalltransaction/${id}`)
          .then((response) => {
              dispatch({
                  type: Types.LOAD_TRANSACTION,
                  payload: {
                     transaction: response.data.reverse()
                  }
              })
            
          })
          .catch(error => {
            //   dispatch({
            //       type: Types.USERS_ERROR,
            //       payload: {
            //           error: error.response.data
            //       }
            //   })
            console.log(error)
            console.log('there is proble')
          })
}

export const create = (addAmount) => dispatch => {
    Axios.post('/api/transactions/create', addAmount)
          .then((response) => {
              dispatch({
                  type: Types.ADD_AMOUNT,
                  payload: {
                     message: response.data.message,
                     singleTenant: response.data.tenant,
                     tran: response.data.transaction
                  }
              })
            
          })
          .catch(error => {
            //   dispatch({
            //       type: Types.USERS_ERROR,
            //       payload: {
            //           error: error.response.data
            //       }
            //   })
            console.log(error)
            console.log('there is proble')
          })
}