import React from 'react';

class MonthDetails extends React.Component{

   render() {
      let { rent, unit, month, electricityBill, gasBill, waterBill, totalAmount } = this.props.state
      return (
         <div className="text-left">

            <div 
               className="modal fade" 
               id="monthDetails" 
               tabIndex="-1" 
               role="dialog" 
               aria-labelledby="exampleModalLabel" 
               aria-hidden="true"
            >
               <div className="modal-dialog" role="document">
                  <div className="modal-content">
                     <div className="modal-header">
                        <h6 className="modal-title" id="exampleModalLabel">{ month }</h6>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                        </button>
                     </div>
                     <div className="modal-body">
                        <p>Float Rent: {rent} TK</p>
                        <p>Gas Bill: {gasBill} TK</p>
                        <p>Water Bill: {waterBill} TK</p>
                        <p>Electricity Bill: {electricityBill} TK <span className="text-muted">({unit})</span></p>
                        <p>Total Amount: {totalAmount} TK</p>
                     </div>
                     <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default MonthDetails;