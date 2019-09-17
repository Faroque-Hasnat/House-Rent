import React from 'react';
import MonthDetails from '../modal/MonthDetails';
import { connect } from 'react-redux'

class Monthly extends React.Component{

   state = {
      id: "",
      rent: 0,
      unit: 0,
      month: "",
      electricityBill: 0,
      gasBill: 0,
      waterBill: 0,
      totalAmount: 0
   }

   changeState = (id, rent, unit, month, electricityBill, gasBill, waterBill, totalAmount ) => {
      this.setState({
         id,
         rent,
         unit,
         month,
         electricityBill,
         gasBill,
         waterBill,
         totalAmount
      })
   }
   
   render(){
      let months = this.props.months

      return (
         <div className="">
            <ul className="list-group mt-3 d-flex">

               <li className="list-group-item" aria-disabled="true">
                  <div className="row">
                     <div className="col-4 border-right">
                        <strong> Month </strong>
                     </div>
                     <div className="col-4 border-right text-center">
                        <strong> Details </strong>
                     </div>
                     <div className="col-4 text-dark text-right">
                        <strong> Amount </strong>
                     </div>
                  </div>
               </li>

               { months.length !== 0 && 
                  months.map(month => (
                     <li 
                        className="list-group-item"
                        key={month._id}
                     >
                        <div className="row">
                           <div className="col-4">
                              {month.month} 
                           </div>
                           <div className="col-4 text-center">
                              <span className="text-info iconDesign" 
                                 data-toggle="modal" 
                                 data-target="#monthDetails"
                                 onClick={() => this.changeState(month._id, month.rent, month.unit, month.month, month.electricityBill, month.gasBill, month.waterBill, month.totalAmount)}
                              >
                                 <i className="fa fa-info-circle cursorLink"></i>
                              </span>
                              <MonthDetails state={this.state} />
                           </div>
                           <div className="col-4 text-dark text-right">
                              {month.totalAmount}<span className="text-muted">TK</span>
                           </div>
                        </div>
                     </li>
                  ))
               }
               
            </ul>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   months: state.months
})

export default connect(mapStateToProps)(Monthly);
