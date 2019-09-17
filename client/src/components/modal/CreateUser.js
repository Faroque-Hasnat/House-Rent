import React from 'react';
import { connect } from 'react-redux'
import { createUser } from '../../store/actions/authActions'

class CreateUser extends React.Component{

   state = {
      name: '',
      userName: '',
      password: '',
      code: ''
   }

   changeHandler = event => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   submitHandler = event => {
      event.preventDefault()
      this.props.createUser(this.state)
   }

   render() {
      let { name, userName, password, code } = this.state
      return (
         <div className="row">

            <div 
               className="modal fade" 
               id="createUser" 
               tabIndex="-1" 
               role="dialog" 
               aria-labelledby="exampleModalLabel" 
               aria-hidden="true"
            >
               <div className="modal-dialog" role="document">
                  <div className="modal-content">
                     <div className="modal-header">
                        <h6 className="modal-title" id="exampleModalLabel">Create User</h6>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                        </button>
                     </div>
                     <div className="modal-body">
                        <form onSubmit={this.submitHandler}>
                           <div className="form-group">
                              <div className="">
                                 <label htmlFor="name"> Name :</label>
                                 <input 
                                    className="form-control form-control-sm" 
                                    type="text" 
                                    name="name"
                                    value={name}
                                    onChange={this.changeHandler}
                                    placeholder="Enter Name"
                                    required
                                 />
                              </div>
                              <div className="mt-2">
                                 <label htmlFor="password"> Password :</label>
                                 <input 
                                    className="form-control form-control-sm" 
                                    type="password" 
                                    name="password"
                                    value={password}
                                    onChange={this.changeHandler}
                                    placeholder="Enter Password"
                                    required
                                 />
                              </div>
                              <div className="row mt-2">
                                 <div className="col-6">
                                    <label htmlFor="userName"> Username :</label>
                                    <input 
                                       className="form-control form-control-sm" 
                                       type="text" 
                                       name="userName"
                                       value={userName}
                                       onChange={this.changeHandler}
                                       placeholder="Enter Username"
                                       required
                                    />
                                 </div>
                                 <div className="col-6">
                                    <label htmlFor="code"> Code :</label>
                                    <input 
                                       className="form-control form-control-sm" 
                                       type="text" 
                                       name="code"
                                       value={code}
                                       onChange={this.changeHandler}
                                       placeholder="Enter Code"
                                       required
                                    />
                                 </div>
                              </div>
                              <hr/>
                              <div className="text-right">
                                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                 <button 
                                    type="submit" 
                                    className="btn btn-primary ml-2"
                                 >Create</button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default connect(null, {createUser})(CreateUser);