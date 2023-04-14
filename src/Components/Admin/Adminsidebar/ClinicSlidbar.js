import React from 'react'
import { Link } from 'react-router-dom';
const ClinicSlidbar = () => {
return (
    <div>
<>
    {/* <!-- Sidebar --> */}
    <div className="sidebar side-bar" id="sidebar">
        <div className="slimScrollDiv" >
            <div className="sidebar-inner slimscroll scroll">
                <div id="sidebar-menu" className="sidebar-menu menu">
                    <ul className='item'>
                        <li className="menu-title">
                            <span>Main</span>
                        </li>
                        <li>
                            {/* <a href="index.html"><i className="fe fe-home"></i> <span>Dashboard</span></a> */}
                            <Link to="/admin/clinic_dashboard"><i className="fe fe-home"></i> <span>Dashboard</span></Link>
                        </li>

                        <li>
                            {/* <a href="doctor-list.html"><i className="fe fe-user-plus"></i> <span>Doctors</span></a> */}
                            <Link to="/admin/add_Patient"><i className="fe fe-layout"></i><span>Add Patient</span></Link>
                        </li>
                        
                        <li>
                            {/* <a href="doctor-list.html"><i className="fe fe-user-plus"></i> <span>Doctors</span></a> */}
                            <Link to="/admin/Patient_list"><i className="fe fe-layout"></i><span>Patient List</span></Link>
                        </li>

                        <li>
                            {/* <a href="doctor-list.html"><i className="fe fe-user-plus"></i> <span>Doctors</span></a> */}
                            <Link to="/admin/add_appointment"><i className="fe fe-layout"></i><span>Add Appointment</span></Link>
                        </li>
                       
                        
                        {/* <li> */}
                            {/* <a href="patient-list.html"><i className="fe fe-user"></i> <span>Patients</span></a> */}
                            {/* <Link to="/admin/patients"><i className="fe fe-user"></i><span>Patients</span></Link>
                        </li> */}
                        {/* <li> */}
                            {/* <a href="reviews.html"><i className="fe fe-star-o"></i> <span>Reviews</span></a> */}
                            {/* <Link to="/admin/reviews"><i className="fe fe-star-o"></i><span>Reviews</span></Link>
                        </li> */}
                        <li>
                            {/* <a href="transactions-list.html"><i className="fe fe-activity"></i> <span>Transactions</span></a> */}
                            <Link to="/admin/transactions_ClinicList"><i className="fe fe-activity"></i><span>Transactions</span></Link>
                        </li>
                        <li>
                            {/* <a href="settings.html"><i className="fe fe-vector"></i> <span>Settings</span></a> */}
                            <Link to="/admin/settings_Clinic"><i className="fe fe-vector"></i><span>Settings</span></Link>
    
                        </li>

                        <li>
                            {/* <a href="profile.html"><i className="fe fe-user-plus"></i> <span>Profile</span></a> */}
                            <Link to="/admin/profile_clinic"><i className="fe fe-user-plus"></i> <span>Profile</span></Link>
    
                        </li>
                        <li className="submenu">
                            <a href="#" class='sub-btn'><i className="fe fe-document"></i> <span> Authentication </span> <span className="menu-arrow dropdown"></span></a>
                            <ul style={{ display: 'none' }} className='sub-menu'>
                                <li><a href="/admin/login" className='sub-item'> Login </a></li>
                                <li><a href="/admin/register" className='sub-item'> Register </a></li>
                                <li><a href="/admin/forgot-password" className='sub-item'> Forgot Password </a></li>
                                <li><a href="/admin/lockscreen" className='sub-item'> Lock Screen </a></li>
                            </ul>
                        </li>
                        {/* <li> */}
                            {/* <a href="profile.html"><i className="fe fe-user-plus"></i> <span>Profile</span></a> */}
                            {/* <Link to="/logout"><i className="fe fe-user-plus"></i> <span>Logout</span></Link>
    
                        </li> */}
                      
                    </ul> 
                </div>
            </div>
            <div className="slimScrollBar" ></div>
            <div className="slimScrollRail"></div>
        </div>
    </div>
     </>
    </div>
  )
}

export default ClinicSlidbar
