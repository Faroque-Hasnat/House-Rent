import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store/actions/authActions'
import AddTenant from '../components/modal/AddTenant';

class Setting extends React.Component{

   render() {
      if(!this.props.auth.isAuthenticated) {
         return <Redirect to='/login' />
      }

      return (
         <div className="container">
            <div className="row">
               <div className="col-6">
                  <Link to="/">
                     <span className="ml-3 moneyIcon">
                        <i className="fa fa-arrow-left"></i>
                     </span>
                  </Link>
               </div>
               <div className="col-6 text-right text-primary mt-1">
                  <span 
                     className=""
                     onClick={() => this.props.logout(this.props.history)}
                  ><i className="fa fa-sign-out cursorLink logout"></i></span>
               </div>
            </div>
            <hr/>
            <div className="row">
               <div className="col-6">
                  <h3 className="">Tenant</h3>
               </div>
               <div 
                  className="text-right col-6 moneyIcon"
                  data-toggle="modal" 
                  data-target="#addTenant"
               >
                  <i className="fa fa-plus-circle text-success cursorLink"></i>
               </div>
            </div>
            <AddTenant />
            <p>This page is under construction</p>
         </div>
      )
   }
}

const mapStateToProps = state => ({
   auth: state.auth
})

export default connect(mapStateToProps, {logout})(Setting);
