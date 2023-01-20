import React from 'react'

const Componentprogress = () => {
  return (
    <div>
      

        
						{/* <!-- Progress --> */}
						<section class="comp-section">
							<div class="section-header">
                                <h3 class="section-title">Progress</h3>
                                <div class="line"></div>
                            </div>
							<div class="progress-example card">
								<div class="card-header">
									<h4 class="card-title">Large Progress Bars</h4>
								</div>
								<div class="card-body pb-0">
									<div class="row">
										<div class="col-md-6">
											<div>
												<div class="progress progress-lg">
													<div class="progress-bar" role="progressbar" style={{width: 10}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-lg">
													<div class="progress-bar bg-success" role="progressbar" style={{width: 25}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-lg">
													<div class="progress-bar bg-info" role="progressbar" style={{width: 50}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-lg">
													<div class="progress-bar bg-warning" role="progressbar" style={{width: 75}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-lg">
													<div class="progress-bar bg-danger" role="progressbar" style={{width: 100}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="progress progress-lg">
												<div class="progress-bar progress-bar-striped" role="progressbar" style={{width: 10}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-lg">
												<div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: 25}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-lg">
												<div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: 50}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-lg">
												<div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: 75}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-lg">
												<div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: 100}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							{/* <div class="progress-example card">
								<div class="card-header">
									<h4 class="card-title">Default Progress Bars</h4>
								</div>
								<div class="card-body pb-0">
									<div class="row">
										<div class="col-md-6">
											<div class="progress">
												<div class="progress-bar" role="progressbar" style="width: 10%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress">
												<div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress">
												<div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress">
												<div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress">
												<div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="progress">
												<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress">
												<div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress">
												<div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress">
												<div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress">
												<div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="progress-example card">
								<div class="card-header">
									<h4 class="card-title">Medium Progress Bars</h4>
								</div>
								<div class="card-body pb-0">
									<div class="row">
										<div class="col-md-6">
											<div>
												<div class="progress progress-md">
													<div class="progress-bar" role="progressbar" style="width: 10%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-md">
													<div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-md">
													<div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-md">
													<div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-md">
													<div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="progress progress-md">
												<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-md">
												<div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-md">
												<div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-md">
												<div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-md">
												<div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="progress-example card">
								<div class="card-header">
									<h4 class="card-title">Small Progress Bars</h4>
								</div>
								<div class="card-body pb-0">
									<div class="row">
										<div class="col-md-6">
											<div>
												<div class="progress progress-sm">
													<div class="progress-bar" role="progressbar" style="width: 10%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-sm">
													<div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-sm">
													<div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-sm">
													<div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-sm">
													<div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="progress progress-sm">
												<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-sm">
												<div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-sm">
												<div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-sm">
												<div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-sm">
												<div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="progress-example card">
								<div class="card-header">
									<h4 class="card-title">Extra Small Progress Bars</h4>
								</div>
								<div class="card-body pb-0">
									<div class="row">
										<div class="col-md-6">
											<div>
												<div class="progress progress-xs">
													<div class="progress-bar w-75" role="progressbar" style="width: 10%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-xs">
													<div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-xs">
													<div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-xs">
													<div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-xs">
													<div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="progress progress-xs">
												<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-xs">
												<div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-xs">
												<div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-xs">
												<div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-xs">
												<div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
									</div>
								</div>
							</div> */}
						</section>
						{/* <!-- /Progress --> */}




    </div>
  )
}

export default Componentprogress
