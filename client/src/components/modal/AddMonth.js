import React from 'react';
import { connect } from 'react-redux'
import { createMonth } from '../../store/actions/monthsAction'

class AddMonth extends React.Component{

   state = {
      month: '',
      unit: 0,
      electricityBill: 0,
      id: ''
   }

   changeHnadler = event => {
      this.setState({
         [event.target.name] : event.target.value,
         id: this.props.id
      })
   }

   submitHandler = event => {
      event.preventDefault()
      this.props.createMonth(this.state)
      this.setState({
         month: '',
         unit: 0,
         electricityBill: 0
      })
   }
   
   render() {
      let { month, unit, electricityBill } = this.state

      return (
         <div className="">

            <div 
               className="modal fade" 
               id="exampleModal" 
               tabIndex="-1" 
               role="dialog" 
               aria-labelledby="exampleModalLabel" 
               aria-hidden="true"
            >
               <div className="modal-dialog" role="document">
                  <div className="modal-content">
                     <div className="modal-header">
                        <h6 className="modal-title" id="exampleModalLabel">
                           {this.props.name}
                        </h6>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                        </button>
                     </div>
                     <div className="modal-body">
                        <form>
                           <div className="form-group">
                              <label htmlFor="month"> Select Month :</label>
                              <select 
                                 className="form-control form-control-sm"
                                 onChange={this.changeHnadler}
                                 name="month"
                                 value={month}
                                 required
                              >
                                 <option value="">Select A Month.....</option>
                                 <option>January</option>
                                 <option>February</option>
                                 <option>March</option>
                                 <option>April</option>
                                 <option>May</option>
                                 <option>June</option>
                                 <option>July</option>
                                 <option>August</option>
                                 <option>September</option>
                                 <option>October</option>
                                 <option>November</option>
                                 <option>December</option>
                              </select>
                           </div>
                           <div className="form-group">
                              <label htmlFor="unit"> Miter unit :</label>
                              <input 
                                 className="form-control form-control-sm" 
                                 type="number" 
                                 name="unit"
                                 placeholder="Enter Units"
                                 value={unit}
                                 onChange={this.changeHnadler}
                                 required
                              />
                           </div>
                           <div className="form-group">
                              <label htmlFor="electricityBill"> Electricity Bill :</label>
                              <input 
                                 className="form-control form-control-sm" 
                                 type="number" 
                                 name="electricityBill"
                                 placeholder="Electricity Bill"
                                 value={electricityBill}
                                 onChange={this.changeHnadler}
                                 required
                              />
                           </div>
                        </form>
                     </div>
                     <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button 
                           type="submit" 
                           className="btn btn-primary"
                           onClick={this.submitHandler}
                        >Save</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default connect(null, {createMonth})(AddMonth);
