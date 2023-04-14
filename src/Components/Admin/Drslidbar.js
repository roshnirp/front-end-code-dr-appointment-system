import React from 'react'
import { Link } from 'react-router-dom';

const Drslidbar = () => {
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
                        <Link to="/admin/doctor_dashboard"><i className="fe fe-home"></i> <span>Dashboard</span></Link>
                    </li>
                    
                    <li>
                        {/* <a href="doctor-list.html"><i className="fe fe-user-plus"></i> <span>Doctors</span></a> */}
                        <Link to="/admin/list_Patient"><i className="fe fe-layout"></i><span>Patient List</span></Link>
                    </li>
                    <li>
                        {/* <a href="appointment-list.html"><i className="fe fe-layout"></i> <span>Appointments</span></a> */}
                        <Link to="/admin/appointmentlist"><i className="fe fe-layout"></i><span>Appointments List </span></Link>
                    </li>
                    
                   
                    <li>
                        {/* <a href="transactions-list.html"><i className="fe fe-activity"></i> <span>Transactions</span></a> */}
                        <Link to="/admin/transactions_doctor"><i className="fe fe-activity"></i><span>Transactions</span></Link>
                    </li>
                    <li>
                        {/* <a href="settings.html"><i className="fe fe-vector"></i> <span>Settings</span></a> */}
                        <Link to="/admin/settings_doctor"><i className="fe fe-vector"></i><span>Settings</span></Link>

                    </li>
                    {/* <li className="submenu">
                        <a href="#" className='sub-btn'><i className="fe fe-document"></i> <span> Reports</span> <span className="menu-arrow dropdown"></span></a> */}
                        {/* <Link to="/admin/settings"><i className="fe fe-document"></i> <span> Reports</span> <span className="menu-arrow"></span></Link> */}
                        {/* <ul style={{ display: 'none' }} className='sub-menu'> */}
                            {/* <li ><a href="invoice-report.html" className='sub-item'>Invoice Reports</a></li> */}
                            {/* <Link to="/admin/reports/invoice-reports" className="sub-item"> Invoice Reports</Link>
                        </ul>
                    </li> */}
                    {/* <li className="menu-title">
                        <span>Pages</span>
                    </li> */}
                    <li>
                        {/* <a href="profile.html"><i className="fe fe-user-plus"></i> <span>Profile</span></a> */}
                        <Link to="/admin/profile_doctor"><i className="fe fe-user-plus"></i> <span>Profile</span></Link>

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
                        {/* <Link to="#"><i className="fe fe-user-plus"></i> <span>Logout</span></Link>

                    </li> */}
                    {/* <li className="submenu">
                        <a href="#" class='sub-btn'><i className="fe fe-warning"></i> <span> Error Pages </span> <span className="menu-arrow dropdown"></span></a>
                        <ul style={{ display: 'none' }} className='sub-menu'>
                            <li><a href="/admin/error-404">404 Error </a></li>
                            <li><a href="/admin/error-505">500 Error </a></li>
                        </ul>
                    </li> */}
                    {/* <li> */}
                        {/* <a href="blank-page.html"><i className="fe fe-file"></i> <span>Blank Page</span></a> */}
                        {/* <Link to="/admin/blank"><i className="fe fe-file"></i> <span>Blank Page</span></Link>
                    </li> */}
                    {/* <li className="menu-title">
                        <span>UI Interface</span>
                    </li> */}
                    {/* <li> */}
                        {/* <a href="components.html"><i className="fe fe-vector"></i> <span>Components</span></a> */}
                        {/* <Link to="/admin/components"><i className="fe fe-vector"></i><span>Components</span></Link>
                    </li> */}
                    {/* <li className="submenu">
                        <a href="#" class='sub-btn'><i className="fe fe-layout"></i> <span> Forms </span> <span className="menu-arrow dropdown"></span></a>
                        <ul style={{ display: 'none' }} className='sub-menu'>
                            <li><a href="/admin/basicinput">Basic Inputs </a></li>
                            <li><a href="/admin/form-input-groups">Input Groups </a></li>
                            <li><a href="/admin/form-horizontal">Horizontal Form </a></li>
                            <li><a href="/admin/form-vertical"> Vertical Form </a></li>
                            <li><a href="/admin/form-mask"> Form Mask </a></li>
                            <li><a href="/admin/form-validation"> Form Validation </a></li>
                        </ul>
                    </li> */}
                    {/* <li className="submenu">
                        <a href="#" class='sub-btn'><i className="fe fe-table"></i> <span> Tables </span> <span className="menu-arrow dropdown"></span></a>
                        <ul style={{ display: 'none' }} className='sub-menu'>
                            <li><a href="/admin/basic-table">Basic Tables </a></li>
                            <li><a href="/admin/data-table">Data Table </a></li>
                        </ul>
                    </li> */}
                    {/* <li className="submenu">
                        <a href="javascript:void(0);" class='sub-btn'><i className="fe fe-code"></i> <span>Multi Level</span> <span className="menu-arrow dropdown"></span></a>
                        <ul style={{ display: 'none' }} className='sub-menu'>
                            <li className="submenu">
                                <a href="javascript:void(0);" class='sub-btn'> <span>Level 1</span> <span className="menu-arrow dropdown"></span></a>
                                <ul style={{ display: 'none' }} className='sub-menu'>
                                    <li><a href="javascript:void(0);"><span>Level 2</span></a></li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);" class='sub-btn'> <span> Level 2</span> <span className="menu-arrow dropdown"></span></a>
                                        <ul style={{ display: 'none' }} className='sub-menu' >
                                            <li><a href="javascript:void(0);">Level 3</a></li>
                                            <li><a href="javascript:void(0);">Level 3</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);"> <span>Level 1</span></a>
                            </li>
                        </ul>
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

export default Drslidbar
