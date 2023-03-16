import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>







{/* <!-- Main Wrapper --> */}
{/* <div className="main-wrapper" > */}
<div className=" headerthis" >

{/* <!-- Header --> */}
<header className="header">
    <nav className="navbar navbar-expand-lg header-nav">
        <div className="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
                <span className="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </a>
            <a href="/" className="navbar-brand logo">
                <img src="/assets/img/logo.png" className="img-fluid" alt="Logo"/>
            </a>
        </div>
        <div className="main-menu-wrapper">
            <div className="menu-header">
                <a href="/" className="menu-logo">
                    <img src="/assets/img/logo.png" className="img-fluid" alt="Logo"/>
                </a>
                <a id="menu_close" className="menu-close" href="javascript:void(0);">
                    <i className="fas fa-times"></i>
                </a>
            </div>
            <ul className="main-nav">
                <li className="active">
                    {/* <a href="index-2.html">Home</a> */}
                    <Link to="/" >Home</Link>
                </li>
                <li className="has-submenu">
                    <a href="#">Doctors <i className="fas fa-chevron-down"></i></a>
                    <ul className="submenu">
                        <li><a href="doctor-dashboard.html">Doctor Dashboard</a></li>
                        <li><a href="appointments.html">Appointments</a></li>
                        <li><a href="schedule-timings.html">Schedule Timing</a></li>
                        <li><a href="my-patients.html">Patients List</a></li>
                        <li><a href="patient-profile.html">Patients Profile</a></li>
                        <li><a href="chat-doctor.html">Chat</a></li>
                        <li><a href="invoices.html">Invoices</a></li>
                        <li><a href="doctor-profile-settings.html">Profile Settings</a></li>
                        <li><a href="reviews.html">Reviews</a></li>
                        <li><a href="doctor-register.html">Doctor Register</a></li>
                    </ul>
                </li>
                <li className="has-submenu">
                    <a href="#">Patients <i className="fas fa-chevron-down"></i></a>
                    <ul className="submenu">
                        <li><a href="search.html">Search Doctor</a></li>
                        <li><a href="doctor-profile.html">Doctor Profile</a></li>
                        <li><a href="booking.html">Booking</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="booking-success.html">Booking Success</a></li>
                        <li><a href="patient-dashboard.html">Patient Dashboard</a></li>
                        <li><a href="favourites.html">Favourites</a></li>
                        <li><a href="chat.html">Chat</a></li>
                        <li><a href="profile-settings.html">Profile Settings</a></li>
                        <li><a href="change-password.html">Change Password</a></li>
                    </ul>
                </li>
                <li className="has-submenu">
                    <a href="#">Pages <i className="fas fa-chevron-down"></i></a>
                    <ul className="submenu">
                        <li><a href="voice-call.html">Voice Call</a></li>
                        <li><a href="video-call.html">Video Call</a></li>
                        <li><a href="search.html">Search Doctors</a></li>
                        <li><a href="calendar.html">Calendar</a></li>
                        <li><a href="components.html">Components</a></li>
                        <li className="has-submenu">
                            <a href="invoices.html">Invoices</a>
                            <ul className="submenu">
                                <li><a href="invoices.html">Invoices</a></li>
                                <li><a href="invoice-view.html">Invoice View</a></li>
                            </ul>
                        </li>
                        <li><a href="blank-page.html">Starter Page</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/login">Register</a></li>
                        <li><a href="forgot-password.html">Forgot Password</a></li>
                    </ul>
                </li>
                <li>
                    {/* <a href="C:\Users\admin\Desktop\onemore\src\Admin\Indexs.js" target="_blank">Admin</a> */}
                    <Link to="/admin/dashboard">Admin</Link> 
                </li>
                <li>
                    {/* <a href="C:\Users\admin\Desktop\onemore\src\Admin\Indexs.js" target="_blank">Admin</a> */}
                    <Link to="/login/superadmin">Login Superadmin</Link> 
                </li>
                <li>
                    {/* <a href="C:\Users\admin\Desktop\onemore\src\Admin\Indexs.js" target="_blank">Admin</a> */}
                    <Link to="/login/doctor">Login Doctor</Link> 
                </li>
                <li>
                    {/* <a href="C:\Users\admin\Desktop\onemore\src\Admin\Indexs.js" target="_blank">Admin</a> */}
                    <Link to="/login/clinic">Login Clinic</Link> 
                </li>
                <li className="login-link">
                    {/* <a href="/login">Login / Signup</a> */}
                    <Link to="/login">Login / Signup</Link>
                </li>
          </ul>
        </div>
        <ul className="nav header-navbar-rht">
            <li className="nav-item contact-item">
                <div className="header-contact-img">
                    <i className="far fa-hospital"></i>
                </div>
                <div className="header-contact-detail">
                    <p className="contact-header">Contact</p>
                    <p className="contact-info-header"> +1 315 369 5943</p>
                </div>
            </li>
            {/* <li className="nav-item">
                <Link className="nav-link header-login" to="/login">login / Signup </Link>
            </li> */}
        </ul>
    </nav>
</header>

</div>







      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"> */}
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
          {/* <Link class="nav-link active"  to="/">Home</Link>
        </li>
        <li class="nav-item"> */}
          {/* <a class="nav-link" href="#">About</a> */}
          {/* <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item"> */}
          {/* <a class="nav-link" href="#">Contact</a> */}
          {/* <Link class="nav-link" to="/contact">Contact</Link>
        </li> */}
       
        
      {/* </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
    </div>
  )
}

export default Header
