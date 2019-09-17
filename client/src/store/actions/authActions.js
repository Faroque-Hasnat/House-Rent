import Axios from 'axios'
import jwtDecode from 'jwt-decode'
import setAuthToken from '../util/setAuthToken'
import * as Types from './types'

export const login = ( user, history ) => dispatch => {
    Axios.post('/api/users/login', user)
            .then(response => {
                let token = response.data.token
                localStorage.setItem('auth_token', token)
                setAuthToken(token)
                let decode = jwtDecode(token)

                dispatch({
                    type: Types.SET_USER,
                    payload: {
                        user: decode,
                        message: response.data.message
                    }
                })
                history.push('/')
            })
            .catch(error => {
                console.log(error)
            })
}

export const createUser = user => dispatch => {
    Axios.post('/api/users/register', user)
            .then(response => {
                console.log(response.data.message)
            })
            .catch(error => {
                console.log(error)
                console.log(error.response.data)
            })
}

export const getAllTenants = (id) => dispatch => {
    Axios.get(`/api/tenants/getalltenants/${id}`)
          .then((response) => {
              dispatch({
                  type: Types.LOAD_TENANT,
                  payload: {
                     tenant: response.data
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

export const getSingleTenant = id => dispatch => {
    Axios.get(`/api/tenants/getsingletenant/${id}`)
          .then((response) => {
              dispatch({
                  type: Types.SIGLE_TENANT,
                  payload: {
                     singleTenant: response.data
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

export const CreateTenant = (tenant, id) => dispatch => {
    Axios.post(`/api/tenants/create/${id}`, tenant)
            .then(response => {
                console.log(response.data.message)
            })
            .catch(error => {
                console.log(error)
                console.log('there is a problem')
            })
}

export const logout = (history) => {
   localStorage.removeItem('auth_token')
   history.push('/login')
   return ({
      type: Types.USER_LOGOUT,
      payload: {
         user: {}
      }
   })
}
