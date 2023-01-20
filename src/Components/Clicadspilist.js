import React from 'react'

const clicadspilist = () => {
  return (
    <div className='main-wrapper'>


      {/* <!-- Clinic and Specialities --> */}
      <section className="section section-specialities">
        <div className="container-fluid">
          <div className="section-header text-center">
            <h2>Clinic and Specialities</h2>
            <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9 ">
              {/* <!-- Slider --> */}
              <div className="specialities-slider slider d-flex p-2">

                {/* <!-- Slider Item --> */}
                <div className="speicality-item text-center p-3">
                  <div className="speicality-img">
                    <img src="assets/img/specialities/specialities-01.png" className="img-fluid" alt="Speciality"/>
                      <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Urology</p>
                </div>
                {/* <!-- /Slider Item --> */}

                {/* <!-- Slider Item --> */}
                <div className="speicality-item text-center p-3">
                  <div className="speicality-img">
                    <img src="assets/img/specialities/specialities-02.png" className="img-fluid" alt="Speciality"/>
                      <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Neurology</p>
                </div>
                {/* <!-- /Slider Item --> */}

                {/* <!-- Slider Item --> */}
                <div className="speicality-item text-center p-3">
                  <div className="speicality-img">
                    <img src="assets/img/specialities/specialities-03.png" className="img-fluid" alt="Speciality"/>
                      <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Orthopedic</p>
                </div>
                {/* <!-- /Slider Item --> */}

                {/* <!-- Slider Item --> */}
                <div className="speicality-item text-center p-3">
                  <div className="speicality-img">
                    <img src="assets/img/specialities/specialities-04.png" className="img-fluid" alt="Speciality"/>
                      <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Cardiologist</p>
                </div>
                {/* <!-- /Slider Item --> */}

                {/* <!-- Slider Item --> */}
                <div className="speicality-item text-center p-3">
                  <div className="speicality-img">
                    <img src="assets/img/specialities/specialities-05.png" className="img-fluid" alt="Speciality"/>
                      <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Dentist</p>
                </div>
                {/* <!-- /Slider Item --> */}

              </div>
                {/* <!-- /Slider --> */}

            </div>
          </div>
        </div>
      </section>
      {/* <!-- Clinic and Specialities --> */}



    </div>
  )
}

export default clicadspilist
