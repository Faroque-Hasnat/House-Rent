import React from 'react';
import { Link, Redirect  } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllTenants } from '../store/actions/authActions'
import { getAllMonth } from '../store/actions/monthsAction'
import AddMonth from '../components/modal/AddMonth';

class Home extends React.Component{

   state = {
      id: '',
      name: ''
   }

   componentDidMount() {
      this.props.getAllTenants(this.props.auth.user._id)
   }

   changeNameAndId = (name, id) => {
      this.setState({
         name,
         id
      })
   }

   render() {
      if(!this.props.auth.isAuthenticated) {
         return <Redirect to='/login' />
      }
      
      let tenants = this.props.tenant
      return (
         <div className="container mb-3">
            <div className="text-right mb-3">
               <Link to="/setting">
                  <span className="settingIcon">
                     <i className="fa fa-cogs"></i>
                  </span>
               </Link>
            </div>

            <div className="row">
               <div className="col">
                  <ul className="list-group">
                     <li className="list-group-item text-left lead bg-dark text-light" aria-disabled="true"> <strong>Tenant's Detail</strong> </li>

                     { tenants.length !== 0 && 
                        tenants.map(tenant => (
                           <li 
                              className="list-group-item"
                              key={tenant._id}
                           >
                              <div className="row">
                                 <div className="col-4">
                                    <strong> {tenant.name} </strong>
                                 </div>
                                 <div className="col-4 text-center">
                                    <p>{ tenant.location }</p>
                                 </div>
                                 <div className="col-4 text-dark text-right">
                                    <span 
                                       className="iconDesign cursorLink"  
                                       data-toggle="modal" 
                                       data-target="#exampleModal"
                                       onClick={() => this.changeNameAndId(tenant.name, tenant._id)}
                                    >  
                                       <i 
                                          className="fa fa-plus-circle text-success"
                                       ></i>
                                    </span>
                                    <span 
                                       className="iconDesign ml-3"
                                       onClick={() => this.changeNameAndId(tenant.name, tenant._id)}
                                    >
                                       <Link to={{
                                          pathname: "/details",
                                          state: {
                                             id: tenant._id,
                                             name: tenant.name,
                                             totalUnits: tenant.totalUnits,
                                             due: tenant.due
                                          }
                                       }}>
                                          <i className="fa fa-eye"></i>
                                       </Link>
                                    </span>
                                 </div>
                              </div>
                                 <AddMonth name={this.state.name} id={this.state.id}/>
                           </li>
                        ))
                     }
                     
                  </ul>
               </div>
            </div>
         </div>
      )
   }
}

const mapStateToProps = state => ({
   auth: state.auth,
   tenant: state.tenant
})

export default connect(mapStateToProps, {getAllTenants, getAllMonth})(Home);
