import React from 'react'
// import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Appoitmentpage = () => {
    // const params = useParams();
    // const { adminsidebar } = params;

    return (
        <div>
            {/* <h1 className='grid'>i am {adminsidebar} page</h1> */}

            <div class="page-wrapper">
                <div class="content container-fluid">

                    {/* <!-- Page Header --> */}
                    <div class="page-header">
                        {/* <div class="row">
                            <div class="col-sm-12">
                                <h3 class="page-title">Appointments</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                    <li class="breadcrumb-item active">Appointments</li>
                                </ul>
                            </div>
                        </div> */}

                        <div class="row">
                            <div class="col-sm-7 col-auto">
                                <h3 class="page-title">Appointments</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                    <li class="breadcrumb-item active">Appointments</li>
                                </ul>
                            </div>
                            <div class="col-sm-5 col">
                                {/* ------ */}

                                <div class="container">
                                    {/* <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Book Your Appointment</button> */}
                                    <Link to="/admin/calinderpage"  className='btn btn-info btn-lg'> <span>Book Your Appointment</span></Link>
                                    {/* <a href="/admin/calinderpage" className='btn btn-info btn-lg'> <span>Book Your Appointment</span></a> */}
                                    {/* <div class="modal fade" id="myModal" role="dialog">
                                        <div class="modal-dialog">

                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                    <h4 class="modal-title">Book an Appointment</h4>
                                                </div>

                                                <div class="modal-body">
                                                    <form role="form" method="post" action="#">
                                                        <label for="fName">First Name</label>
                                                        <input type="text" class="form-control" id="fName" required /><br></br>
                                                        <label for="lName">Last Name</label>
                                                        <input type="text" class="form-control" id="lName" /><br></br>
                                                        <label for="emailId">Email Id</label>
                                                        <input type="email" class="form-control" id="emailId" /><br></br>
                                                        <label for="mobileNo" >Mobile No.</label>
                                                        <input type="mobileNo" class="form-control" id="mobileNo" required /><br></br>
                                                        <label for="doctorName">Doctor's Name</label>
                                                        <input type="text" class="form-control" id="doctorName" placeholder="Only if you are booking an appointment for a Doctor." /><br></br>
                                                        <label for="hospitalName">Hospital's Name</label>
                                                        <input type="text" class="form-control" id="hospitalName" placeholder="Only if you are booking an appointment for a Hospital." /><br></br>

                                                        <label for="datetimepicker11">Preferred Date & Time</label>
                                                        <div class="container">
                                                            <div class="col-sm-6 col-md-6">
                                                                <div class="form-group">
                                                                    <div class='input-group date' id='datetimepicker11'>
                                                                        <input type='text' class="form-control" />
                                                                        <span class="input-group-addon">
                                                                            <span class="glyphicon glyphicon-calendar">
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        {/* ---- */}
                                                        {/* <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
                                                            <input placeholder="Select date" type="text" id="example" class="form-control" />
                                                            <label for="example">Try me...</label>
                                                            <i class="fas fa-calendar input-prefix"></i>
                                                        </div> */}

                                                        {/* <br></br>

                                                        <div class="form-group">
                                                            <label for="comment">Reason for the Appointment</label>
                                                            <textarea class="form-control" rows="5" id="comment"></textarea>
                                                        </div>

                                                        <button type="submit" id="submit" class="btn btn-info">Get an Appointment</button>
                                                    </form> */}

                                                {/* </div>

                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div> */} 
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- /Page Header --> */}

                    <div class="row">
                        <div class="col-md-12">

                            {/* <!-- Recent Orders --> */}
                            <div class="card">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="datatable table table-hover table-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Doctor Name</th>
                                                    <th>Speciality</th>
                                                    <th>Patient Name</th>
                                                    <th>Apointment Time</th>
                                                    <th>Status</th>
                                                    <th class="text-right">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/doctors/doctor-thumb-01.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile">Dr. Ruby Perrin</a>
                                                        </h2>
                                                    </td>
                                                    <td>Dental</td>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient1.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile">Charlene Reed </a>
                                                        </h2>
                                                    </td>
                                                    <td>9 Nov 2019 <span class="text-primary d-block">11.00 AM - 11.15 AM</span></td>
                                                    <td>
                                                        <div class="status-toggle">
                                                            <input type="checkbox" id="status_1" class="check" checked />
                                                            <label for="status_1" class="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td class="text-right">
                                                        $200.00
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/doctors/doctor-thumb-02.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile">Dr. Darren Elder</a>
                                                        </h2>
                                                    </td>
                                                    <td>Dental</td>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient2.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile">Travis Trimble </a>
                                                        </h2>
                                                    </td>

                                                    <td>5 Nov 2019 <span class="text-primary d-block">11.00 AM - 11.35 AM</span></td>
                                                    <td>
                                                        <div class="status-toggle">
                                                            <input type="checkbox" id="status_2" class="check" checked />
                                                            <label for="status_2" class="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td class="text-right">
                                                        $300.00
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile">Dr. Deborah Angel</a>
                                                        </h2>
                                                    </td>
                                                    <td>Cardiology</td>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient3.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile">Carl Kelly</a>
                                                        </h2>
                                                    </td>
                                                    <td>11 Nov 2019 <span class="text-primary d-block">12.00 PM - 12.15 PM</span></td>
                                                    <td>
                                                        <div class="status-toggle">
                                                            <input type="checkbox" id="status_3" class="check" checked />
                                                            <label for="status_3" class="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td class="text-right">
                                                        $150.00
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/doctors/doctor-thumb-04.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile">Dr. Sofia Brient</a>
                                                        </h2>
                                                    </td>
                                                    <td>Urology</td>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient4.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile"> Michelle Fairfax</a>
                                                        </h2>
                                                    </td>
                                                    <td>7 Nov 2019 <span class="text-primary d-block">1.00 PM - 1.20 PM</span></td>
                                                    <td>
                                                        <div class="status-toggle">
                                                            <input type="checkbox" id="status_4" class="check" checked />
                                                            <label for="status_4" class="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td class="text-right">
                                                        $150.00
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/doctors/doctor-thumb-05.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile">Dr. Marvin Campbell</a>
                                                        </h2>
                                                    </td>
                                                    <td>Orthopaedics</td>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient5.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile">Gina Moore</a>
                                                        </h2>
                                                    </td>

                                                    <td>15 Nov 2019 <span class="text-primary d-block">1.00 PM - 1.15 PM</span></td>
                                                    <td>
                                                        <div class="status-toggle">
                                                            <input type="checkbox" id="status_5" class="check" checked />
                                                            <label for="status_5" class="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td class="text-right">
                                                        $200.00
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/doctors/doctor-thumb-06.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile">Dr. Katharine Berthold</a>
                                                        </h2>
                                                    </td>
                                                    <td>Orthopaedics</td>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient6.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile">Elsie Gilley</a>
                                                        </h2>
                                                    </td>

                                                    <td>16 Nov 2019 <span class="text-primary d-block">1.00 PM - 1.15 PM</span></td>
                                                    <td>
                                                        <div class="status-toggle">
                                                            <input type="checkbox" id="status_5" class="check" checked />
                                                            <label for="status_5" class="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td class="text-right">
                                                        $250.00
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/doctors/doctor-thumb-07.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile">Dr. Linda Tobin</a>
                                                        </h2>
                                                    </td>
                                                    <td>Neurology</td>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient7.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile">Joan Gardner</a>
                                                        </h2>
                                                    </td>

                                                    <td>18 Nov 2019 <span class="text-primary d-block">1.10 PM - 1.25 PM</span></td>
                                                    <td>
                                                        <div class="status-toggle">
                                                            <input type="checkbox" id="status_5" class="check" checked />
                                                            <label for="status_5" class="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td class="text-right">
                                                        $260.00
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/doctors/doctor-thumb-08.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile">Dr. Paul Richard</a>
                                                        </h2>
                                                    </td>
                                                    <td>Dermatology</td>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient8.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile"> Daniel Griffing</a>
                                                        </h2>
                                                    </td>

                                                    <td>18 Nov 2019 <span class="text-primary d-block">11.10 AM - 11.25 AM</span></td>
                                                    <td>
                                                        <div class="status-toggle">
                                                            <input type="checkbox" id="status_5" class="check" checked />
                                                            <label for="status_5" class="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td class="text-right">
                                                        $260.00
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/doctors/doctor-thumb-09.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile">Dr. John Gibbs</a>
                                                        </h2>
                                                    </td>
                                                    <td>Dental</td>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient9.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile">Walter Roberson</a>
                                                        </h2>
                                                    </td>

                                                    <td>21 Nov 2019 <span class="text-primary d-block">12.10 PM - 12.25 PM</span></td>
                                                    <td>
                                                        <div class="status-toggle">
                                                            <input type="checkbox" id="status_5" class="check" checked />
                                                            <label for="status_5" class="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td class="text-right">
                                                        $300.00
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/doctors/doctor-thumb-10.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile">Dr. Olga Barlow</a>
                                                        </h2>
                                                    </td>
                                                    <td>Dental</td>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient10.jpg" alt="User Image" /></a>
                                                            <a href="/admin/profile">Robert Rhodes</a>
                                                        </h2>
                                                    </td>

                                                    <td>23 Nov 2019 <span class="text-primary d-block">12.10 PM - 12.25 PM</span></td>
                                                    <td>
                                                        <div class="status-toggle">
                                                            <input type="checkbox" id="status_5" class="check" checked />
                                                            <label for="status_5" class="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td class="text-right">
                                                        $300.00
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /Recent Orders --> */}

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Appoitmentpage;
