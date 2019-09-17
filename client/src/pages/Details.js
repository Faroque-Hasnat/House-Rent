import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import Monthly from '../components/details/Monthly';
import Pay from '../components/details/Pay';
import Info from '../components/details/Info';
import AddAmount from '../components/modal/AddAmount';
import { connect } from 'react-redux'
import { getAllMonth } from '../store/actions/monthsAction'
import { getAllTransaction } from '../store/actions/transactionAction'
import { getSingleTenant } from '../store/actions/authActions'

class Details extends React.Component{

   state = {
      name: '',
      id: ''
   }

   componentDidMount() {
      this.setState({
         name: this.props.location.state.name,
         id: this.props.location.state.id
      })
      this.props.getAllTransaction(this.props.location.state.id)
      this.props.getAllMonth(this.props.location.state.id)
      this.props.getSingleTenant(this.props.location.state.id)
   }

   render() {
      if(!this.props.auth.isAuthenticated) {
         return <Redirect to='/login' />
      }

      let { name } = this.state
      let { totalUnits, due } = this.props.singleTenant
      return (
         <div className="container mb-3">
            <AddAmount id={this.state.id} />
            <div className="row mt-1">
               <Link to="/">
                  <span className="ml-3 moneyIcon">
                     <i className="fa fa-arrow-left"></i>
                  </span>
               </Link>
            </div>
            <div className="row mt-2 text-center">
               <div className="col">
                  <h4> {name} </h4>
               </div>
            </div>
            <div className="row text-center mb-3">
               <div className="col">
                  <p> Total Units: {totalUnits} </p>
               </div>
            </div>
            <div className="row">
               <div className="col-8 mt-2">
                  { 
                     due > 0 ? 
                     <p className="lead">Due : <span className="text-danger h5">{due}<span className="text-muted">TK</span></span> </p> : <p className="lead">Due : <span className="text-success h5">{due} <span className="text-muted">TK</span></span> </p>
                  }
               </div>
               <div className="col-4 text-right mb-2">
                  <span className="moneyIcon cursorLink mr-3" data-toggle="modal" data-target="#addamount">
                     <i className="fa fa-plus-circle text-success"></i>
                  </span>
               </div>
            </div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
               <li className="nav-item cursorLink">
                  <span className="nav-link active" id="home-tab" data-toggle="tab" role="tab" href="#home" varia-controls="home" aria-selected="true">Monthly</span>
               </li>
               <li className="nav-item cursorLink">
                  <span className="nav-link" id="profile-tab" data-toggle="tab"role="tab" href="#profile" aria-controls="profile" aria-selected="false">Pay</span>
               </li>
               <li className="nav-item cursorLink">
                  <span className="nav-link" id="profile-tab" data-toggle="tab"role="tab" href="#info" aria-controls="profile" aria-selected="false">Info</span>
               </li>
               </ul>
            <div className="tab-content" id="myTabContent">
               <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <Monthly />
               </div>
               <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <Pay />
               </div>
               <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="profile-tab">
                  <Info />
               </div>
            </div>
         </div>
      )
   }
}

const mapStateToProps = state => ({
   singleTenant: state.singleTenant,
   auth: state.auth
})

export default connect(mapStateToProps, {getAllMonth, getAllTransaction, getSingleTenant})(Details);
