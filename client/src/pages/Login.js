import React from 'react';
import { connect } from 'react-redux'
import { login } from '../store/actions/authActions'
import CreateUser from '../components/modal/CreateUser'

class Login extends React.Component{

   state = {
      password: '',
      userName: ''
   }

   changeHandler = event => {
      this.setState({
         [event.target.name] : event.target.value
      })
   }

   submitHandler = event => {
      event.preventDefault()
      this.props.login(this.state, this.props.history)
      this.setState({
         password: '',
         userName: ''
      })
   }

   render() {
      let { userName, password } = this.state
      return (
         <div className="container mb-3">
            <div className="text-center">
               <h2 className="mt-md-5">Login</h2>
            </div>
            <div className="col-md-6 offset-md-3 mt-md-3">
               <form onSubmit={this.submitHandler}>
                  <div className="form-group">
                     <label htmlFor="userName">Username :</label>
                     <input 
                        className="form-control form-control-sm"
                        type="text"
                        name="userName"
                        onChange={this.changeHandler}
                        value={userName}
                        placeholder="Enter Username"
                        required
                     />
                  </div>
                  <div className="form-group">
                     <label htmlFor="password">Password :</label>
                     <input 
                        className="form-control form-control-sm"
                        type="password"
                        name="password"
                        onChange={this.changeHandler}
                        value={password}
                        placeholder="Enter Password"
                        required
                     />
                  </div>
                  <hr />
                  <div className="form-group text-right">
                     <button 
                        type="button" 
                        className="btn btn-primary" 
                        data-toggle="modal" 
                        data-target="#createUser"
                     >Create User</button>
                     <button type="submit" className="btn btn-primary ml-2">Submit</button>
                  </div>
               </form>
               <p>Use userName: hasnat</p>
               <p>Use password: 123456</p>
            </div>
            <CreateUser />
         </div>
      )
   }
}

export default connect(null, {login})(Login);
