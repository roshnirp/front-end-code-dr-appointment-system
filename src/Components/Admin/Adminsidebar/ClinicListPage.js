import { Col, Row } from 'antd';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import {Form, Input, message} from 'antd'
// import { useNavigate } from 'react-router-dom'
const API = "/api/v1/user/clinic";

const ClinicListPage = () => {
	const [myData, setMyData] = useState([]);
	const [isError, setIsError]= useState("");


	const getApiData = async (url) => {

		try {
			const res = await axios.get(url);
			setMyData(res.data.data);

		}
		catch (error) {
			setIsError(error.message);
		}

	};

	useEffect(() => {
		getApiData(`${API}`);

	}, []);




	return (
		<div>
				{isError !== "" && <h2>{isError}</h2>}

			{/* <!-- Page Wrapper --> */}
			<div class="page-wrapper">
				<div class="content container-fluid">

					{/* <!-- Page Header --> */}
					<div class="page-header">
						<div class="row">
							<div class="col-sm-12">
								<h3 class="page-title">List of Clinic</h3>

							</div>
						</div>
					</div>
					{/* <!-- /Page Header --> */}

					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-body">
									<div class="table-responsive">
									
										<table class="datatable table table-hover table-center mb-0">
											{/* <thead>
												<tr>
													<th>Clinic Name</th>
													<th>Email</th>
													<th>Website</th>
													<th>Mobile Number</th>
													<th>Address</th>
												</tr>
											</thead> */}

											<tbody>
												
												<thead>
												<tr>
													<th>Clinic Name</th>
													<th>Email</th>
													<th>Website</th>
													<th>Mobile Number</th>
													<th>Address</th>
												</tr>
												</thead>
												<tr>
													{
														myData.map((post) => {
															const { id, clinicName, mobileNo, email, website, address } = post;
															return (
																<div key={id}>
																	<td>{clinicName}</td>
																
																	<td>{email}</td>
																	<td>{website}</td>
																	<td>{mobileNo}</td>
																	<td>{address}</td>
																</div>);
														})
													}


												</tr>


												{/* <tr>
													<td>
														<h2 class="table-avatar">
															<a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/doctors/doctor-thumb-01.jpg" alt="User Image" /></a>
															<a href="/admin/profile">Clinic</a>
														</h2>
													</td>
													<td>Clinic@gmail.com</td>

													<td>www.clinic.in</td>

													<td>*********896</td>
													<td>clinic Address details</td> */}

													{/* <td>
														<div class="status-toggle">
															<input type="checkbox" id="status_1" class="check" checked/>
															<label for="status_1" class="checktoggle">checkbox</label>
														</div>
													</td> */}
												{/* </tr>
												<tr>
													<td>
														<h2 class="table-avatar">
															<a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/doctors/doctor-thumb-02.jpg" alt="User Image" /></a>
															<a href="/admin/profile">Clinicname2 </a>
														</h2>
													</td>
													<td>Clinicname2@gmail.com</td>

													<td>www.clinicname.com</td>

													<td>*********789</td>
													<td>clinic address details</td> */}

													{/* <td>
														<div class="status-toggle">
															<input type="checkbox" id="status_1" class="check" checked/>
															<label for="status_1" class="checktoggle">checkbox</label>
														</div>
													</td> */}
												{/* </tr> */}


											</tbody>

										</table>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
			{/* <!-- /Page Wrapper --> */}



		</div>
	)
}

export default ClinicListPage




