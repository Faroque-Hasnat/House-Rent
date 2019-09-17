import React from 'react';
import { connect } from 'react-redux'

class Pay extends React.Component{

   render() {
      let { transactions } = this.props
      return (
         <div className="">
            <ul className="list-group mt-3">

               <li className="list-group-item" aria-disabled="true">
                  <div className="row">
                     <div className="col-4 border-right">
                        <strong> Date </strong>
                     </div>
                     <div className="col-4 border-right text-center">
                        <strong> Time </strong>
                     </div>
                     <div className="col-4 text-dark text-right">
                        <strong> Amount </strong>
                     </div>
                  </div>
               </li>
               {transactions.length > 0 && 
                  transactions.map(transaction => (
                     <li 
                        className="list-group-item"
                        key={transaction._id}
                     >
                        <div className="row">
                           <div className="col-4">
                              {transaction.date}/{transaction.month}/{transaction.year}
                           </div>
                           <div className="col-4 text-center">
                              {transaction.time}
                           </div>
                           <div className="col-4 text-dark text-right">
                              {transaction.amount}<span className="text-muted">TK</span>
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
   transactions: state.transaction
})

export default connect(mapStateToProps)(Pay);
