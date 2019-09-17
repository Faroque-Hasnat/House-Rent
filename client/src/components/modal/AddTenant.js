import React from 'react';
import { connect } from 'react-redux'
// import { create } from '../../store/actions/transactionAction'
import { CreateTenant } from '../../store/actions/authActions'

class AddTenant extends React.Component{

   state = {
      name: '',
      location: '',
      rent: 0,
      totalUnits: 0,
      due: 0,
      perMonthGas: 0,
      perMonthWater: 0
   }

   changeHandler = event => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   submitHandler = event => {
      event.preventDefault()
      this.props.CreateTenant(this.state, this.props.auth.user._id)
      this.setState({
         name: '',
         location: '',
         rent: 0,
         totalUnits: 0,
         due: 0,
         perMonthGas: 0,
         perMonthWater: 0
      })
   }

   render() {
      let {name, location, rent, totalUnits, due, perMonthGas, perMonthWater } = this.state
      
      return (
         <div className="row">

            <div 
               className="modal fade" 
               id="addTenant" 
               tabIndex="-1" 
               role="dialog" 
               aria-labelledby="exampleModalLabel" 
               aria-hidden="true"
            >
               <div className="modal-dialog" role="document">
                  <div className="modal-content">
                     <div className="modal-header">
                        <h6 className="modal-title" id="exampleModalLabel">Create Tenant</h6>
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
                              <div className=" mt-2">
                                 <label htmlFor="location"> Location :</label>
                                 <input 
                                    className="form-control form-control-sm" 
                                    type="text" 
                                    name="location"
                                    value={location}
                                    onChange={this.changeHandler}
                                    placeholder="Enter Location"
                                    required
                                 />
                              </div>
                              <div className="mt-2">
                                 <label htmlFor="rent"> Rent :</label>
                                 <input 
                                    className="form-control form-control-sm" 
                                    type="number" 
                                    name="rent"
                                    value={rent}
                                    onChange={this.changeHandler}
                                    placeholder="Enter Rent"
                                    required
                                 />
                              </div>
                              <div className="row mt-2">
                                 <div className="col-6">
                                    <label htmlFor="totalUnits"> Total Unit :</label>
                                    <input 
                                       className="form-control form-control-sm" 
                                       type="number" 
                                       name="totalUnits"
                                       value={totalUnits}
                                       onChange={this.changeHandler}
                                       placeholder="Enter Unit"
                                       required
                                    />
                                 </div>
                                 <div className="col-6">
                                    <label htmlFor="due"> Due :</label>
                                    <input 
                                       className="form-control form-control-sm" 
                                       type="number" 
                                       name="due"
                                       value={due}
                                       onChange={this.changeHandler}
                                       placeholder="Enter Due"
                                       required
                                    />
                                 </div>
                              </div>
                              <div className="row mt-2">
                                 <div className="col-6">
                                    <label htmlFor="perMonthGas"> Gas Bill :</label>
                                    <input 
                                       className="form-control form-control-sm" 
                                       type="number" 
                                       name="perMonthGas"
                                       value={perMonthGas}
                                       onChange={this.changeHandler}
                                       placeholder="Enter Bill"
                                       required
                                    />
                                 </div>
                                 <div className="col-6">
                                    <label htmlFor="perMonthWater"> Water Bill :</label>
                                    <input 
                                       className="form-control form-control-sm" 
                                       type="number" 
                                       name="perMonthWater"
                                       value={perMonthWater}
                                       onChange={this.changeHandler}
                                       placeholder="Enter Bill"
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

const mapStateToProps = state => ({
   auth: state.auth
})

export default connect(mapStateToProps, {CreateTenant})(AddTenant);