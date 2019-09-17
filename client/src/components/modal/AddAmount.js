import React from 'react';
import { connect } from 'react-redux'
import { create } from '../../store/actions/transactionAction'

class AddAmount extends React.Component{

   state = {
      id: '',
      amount: 0
   }

   changeHandler = event => {
      this.setState({
         [event.target.name]: event.target.value,
         id: this.props.id
      })
   }

   submitHandler = event => {
      event.preventDefault()
      this.props.create(this.state)
      this.setState({
         id: '',
         amount: 0
      })
   }

   render() {
      let { amount } = this.state
      return (
         <div className="row">

            <div 
               className="modal fade" 
               id="addamount" 
               tabIndex="-1" 
               role="dialog" 
               aria-labelledby="exampleModalLabel" 
               aria-hidden="true"
            >
               <div className="modal-dialog" role="document">
                  <div className="modal-content">
                     <div className="modal-header">
                        <h6 className="modal-title" id="exampleModalLabel">Add Amount</h6>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                        </button>
                     </div>
                     <div className="modal-body">
                        <form onSubmit={this.submitHandler}>
                           <div className="form-group">
                              <div className="">
                                 <label htmlFor="amount"> Amount :</label>
                                 <input 
                                    className="form-control form-control-sm" 
                                    type="number" 
                                    name="amount"
                                    value={amount}
                                    onChange={this.changeHandler}
                                    placeholder="Enter Amount"
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
                              >Save</button>
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

export default connect(null, {create})(AddAmount);