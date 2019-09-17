import Axios from 'axios'
import * as Types from './types'

export const getAllMonth = (id) => dispatch => {
    Axios.get(`/api/months/getallmonth/${id}`)
          .then((response) => {
                dispatch({
                    type: Types.LOAD_MONTH,
                    payload: {
                        months: response.data.reverse()
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

export const createMonth = (month) => dispatch => {
    Axios.post('/api/months/create', month)
          .then((response) => {
                dispatch({
                    type: Types.CREATE_MONTH,
                    payload: {
                      message: response.data.message
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

