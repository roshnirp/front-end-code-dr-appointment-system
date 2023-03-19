
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomeBanner from './Components/HomeBanner';
import Clicadspilist from './Components/Clicadspilist';
import SpecialDoc from './Components/SpecialDoc';
import Avblfetre from './Components/Avblfetre';
import Footerrct from './Components/Footerrct';
import HeaderAdmin from './Components/Admin/HeaderAdmin';
import Salidbar from './Components/Admin/Salidbar';
import Appoitmentpage from './Components/Admin/Adminsidebar/Appoitmentpage';
import Specialistpage from './Components/Admin/Adminsidebar/Specialistpage';
import Docterlistpage from './Components/Admin/Adminsidebar/Docterlistpage';
import Patientslistpage from './Components/Admin/Adminsidebar/Patientslistpage';
import Reviews from './Components/Admin/Adminsidebar/Reviews';
import Transaction from './Components/Admin/Adminsidebar/Transaction';
import Sittingpage from './Components/Admin/Adminsidebar/Sittingpage';
import Profilepage from './Components/Admin/Adminsidebar/Profilepage';
import Blankpage from './Components/Admin/Adminsidebar/Blankpage';
import Components from './Components/Admin/Adminsidebar/Components';
import Dashboard from './Components/Admin/Adminsidebar/Dashboard';
import Login from './Components/Admin/Adminsidebar/Login';
import ForgotPaswrd from './Components/Admin/Adminsidebar/ForgotPaswrd';
import Register from './Components/Admin/Adminsidebar/Register';
import Invoicereport from './Components/Admin/Adminsidebar/Dropdownfolder/Invoicereport';
import Lockscreen from './Components/Admin/Adminsidebar/Dropdownfolder/Lockscreen';
import Error404 from './Components/Admin/Adminsidebar/Dropdownfolder/Error404';
import Eooro505 from './Components/Admin/Adminsidebar/Dropdownfolder/Eooro505';
import FormBasicInput from './Components/Admin/Adminsidebar/Dropdownfolder/FormBasicInput';
// import FromInputGroup from './Components/Admin/Adminsidebar/Dropdownfolder/FromInputGroup';
import FormHorizontal from './Components/Admin/Adminsidebar/Dropdownfolder/FormHorizontal';
import FormVertical from './Components/Admin/Adminsidebar/Dropdownfolder/FormVertical';
import FormMask from './Components/Admin/Adminsidebar/Dropdownfolder/FormMask';
// import FormValidation from './Components/Admin/Adminsidebar/Dropdownfolder/FormValidation';
import BasicTable from './Components/Admin/Adminsidebar/Dropdownfolder/BasicTable';
import DataTable from './Components/Admin/Adminsidebar/Dropdownfolder/DataTable';
import Appoitmentbutton from './Components/Admin/Appoitmentbutton';
import ClanderAppointment from './Components/Admin/Adminsidebar/ClanderAppointment';
import LoginHome from './Components/LoginHome';
import RegisterHome from './Components/RegisterHome';
import SuperAdminlogin from './Components/SuperAdminlogin';
import ClinicDetails from './Components/Admin/Adminsidebar/ClinicDetails';
import ClinicListPage from './Components/Admin/Adminsidebar/ClinicListPage';
import AddDoctor from './Components/AddDoctor';
import DoctorDashboard from './Components/DoctorDashboard';
import Drslidbar from './Components/Admin/Drslidbar';
import ClinicSlidbar from './Components/Admin/Adminsidebar/ClinicSlidbar';
import ClinicDashboard from './Components/ClinicDashboard';
import LoginClinic from './Components/LoginClinic';
import AddPatient from './Components/Admin/AddPatient';
import ListPatient from './Components/Admin/ListPatient';

// import PageWrapper from './Components/Admin/PageWrapper';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={
          <React.Fragment>
            <Header />
            <HomeBanner />
            <Clicadspilist />
            <SpecialDoc />
            <Avblfetre />
            <Footerrct />
          </React.Fragment>
        }>

        </Route>

        <Route exact path='/login/superadmin' element={
          <React.Fragment>
            <Header />
            <SuperAdminlogin />
            <Footerrct />
          </React.Fragment>
        }>
        </Route>

        <Route exact path='/login/doctor' element={
          <React.Fragment>
            <Header />
            <LoginHome/>
            <Footerrct />
          </React.Fragment>
        }>
        </Route>
        <Route exact path='/login/clinic' element={
          <React.Fragment>
            <Header />
          <LoginClinic/>
            <Footerrct />
          </React.Fragment>
        }>
        </Route>
        <Route exact path='/admin/appointment' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <Appoitmentpage />
            <Appoitmentbutton/>
          </React.Fragment>
        }></Route>
            <Route exact path='/admin/settings' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <Sittingpage />
          </React.Fragment>
        }></Route>


        <Route exact path='/register' element={
          <React.Fragment>
            <Header />
            <RegisterHome/>
            <Footerrct />
          </React.Fragment>
        }>
        </Route>

        <Route exact path='/admin/dashboard' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <Dashboard />
          </React.Fragment>
        }>

        </Route>
           <Route exact path='/admin/profile' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar/>
            <Profilepage />
          </React.Fragment>
        }>
          
        </Route>
        <Route exact path='/admin/transactions' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <Transaction />
          </React.Fragment>
        }></Route>

<Route exact path='/admin/doctor_dashboard' element={
          <React.Fragment>
            <HeaderAdmin />
            <Drslidbar/>
            <DoctorDashboard />
          </React.Fragment>
        }></Route>

<Route exact path='/admin/settings' element={
          <React.Fragment>
            <HeaderAdmin />
            <Drslidbar/>
            <Sittingpage />
          </React.Fragment>
        }></Route>


<Route exact path='/admin/transactions' element={
          <React.Fragment>
            <HeaderAdmin />
            <Drslidbar/>
            <Transaction />
          </React.Fragment>
        }>

        </Route>

        <Route exact path='/admin/profile' element={
          <React.Fragment>
            <HeaderAdmin />
            <Drslidbar/>
            <Profilepage />
          </React.Fragment>
        }>
          
        </Route>
        
<Route exact path='/admin/appointment' element={
          <React.Fragment>
            <HeaderAdmin />
            <Drslidbar/>
            <Appoitmentpage />
          </React.Fragment>
        }></Route>

<Route exact path='/admin/list_Patient' element={
          <React.Fragment>
            <HeaderAdmin />
            <Drslidbar/>
            <ListPatient/>
          </React.Fragment>
        }></Route>

        


<Route exact path='/admin/clinic_dashboard' element={
          <React.Fragment>
            <HeaderAdmin />
           <ClinicSlidbar/>
           <ClinicDashboard/> 
          </React.Fragment>
        }>

        </Route>

        <Route exact path='/admin/add_Patient' element={
          <React.Fragment>
            <HeaderAdmin />
           <ClinicSlidbar/>
          <AddPatient/>
          </React.Fragment>
        }>
          
        </Route>

        <Route exact path='/admin/add_appointment' element={
          <React.Fragment>
            <HeaderAdmin />
           <ClinicSlidbar/>
          <AddPatient/>
          </React.Fragment>
        }>
          
        </Route>



        <Route exact path='/admin/list_Patient' element={
          <React.Fragment>
            <HeaderAdmin />
           <ClinicSlidbar/>
          <ListPatient/>
          </React.Fragment>
        }>
          
        </Route>

        <Route exact path='/admin/transactions' element={
          <React.Fragment>
            <HeaderAdmin />
            <ClinicSlidbar/>
            <Transaction />
          </React.Fragment>
        }>

        </Route>
        
        <Route exact path='/admin/settings' element={
          <React.Fragment>
            <HeaderAdmin />
            <ClinicSlidbar/>
            <Sittingpage />
          </React.Fragment>
        }>
          
        </Route>

        <Route exact path='/admin/profile' element={
          <React.Fragment>
            <HeaderAdmin />
            <ClinicSlidbar/>
            <Profilepage />
          </React.Fragment>
        }>
          
        </Route>
<Route exact path='/admin/Specialities' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <Specialistpage />
          </React.Fragment>
        }></Route>

      <Route exact path='/admin/clinic' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <ClinicDetails/>
          </React.Fragment>
        }>

        </Route>

        <Route exact path='/admin/clinic_list' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
          <ClinicListPage/>
          </React.Fragment>
        }>

        </Route>
        

        <Route exact path='/admin/add_doctors' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <AddDoctor/>
          </React.Fragment>
        }>

        </Route>


        <Route exact path='/admin/list_doctors' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <Docterlistpage />
          </React.Fragment>
        }>
        </Route>

        <Route exact path='/admin/patients' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <Patientslistpage />
          </React.Fragment>
        }>

        </Route>
        <Route exact path='/admin/reviews' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <Reviews />
          </React.Fragment>
        }>

        </Route>

       


        <Route exact path='/admin/settings' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <Sittingpage />
          </React.Fragment>
        }></Route>


        <Route exact path='/admin/profile' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <Profilepage />
          </React.Fragment>
        }></Route>

        <Route exact path='/admin/blank' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <Blankpage />
          </React.Fragment>
        }></Route>

        <Route exact path='/admin/components' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <Components />

          </React.Fragment>
        }></Route>

        <Route exact path='/admin/login' element={
          <React.Fragment>
            <Login />
          </React.Fragment>
        }></Route>

        <Route exact path='/admin/forgot-password' element={
          <React.Fragment>
            <ForgotPaswrd />
          </React.Fragment>
        }></Route>

        <Route exact path='/admin/register' element={
          <React.Fragment>
            <Register />
          </React.Fragment>
        }></Route>

        <Route exact path='/admin/reports/invoice-reports' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <Invoicereport />
          </React.Fragment>
        }></Route>

        <Route exact path='/admin/lockscreen' element={
          <React.Fragment>
            <Lockscreen />
          </React.Fragment>
        }></Route>

        <Route exact path='/admin/error-404' element={
          <React.Fragment>
            <Error404 />
          </React.Fragment>
        }></Route>

        <Route exact path='/admin/error-505' element={
          <React.Fragment>
            <Eooro505 />
          </React.Fragment>
        }></Route>

        <Route exact path='/admin/form-input-groups' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <FormBasicInput />
          </React.Fragment>
        }></Route>
        <Route exact path='/admin/form-horizontal' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <FormHorizontal />
          </React.Fragment>
        }></Route>


        <Route exact path='/admin/form-vertical' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <FormVertical />
          </React.Fragment>
        }></Route>

        <Route exact path='/admin/form-mask' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <FormMask />
          </React.Fragment>
        }></Route>

        {/* <Route exact path='/admin/form-validation' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
        
          </React.Fragment>
        }></Route> */}

<Route exact path='/admin/form-validation' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
       
          </React.Fragment>
        }></Route>

<Route exact path='/admin/basic-table' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <BasicTable/>
     
          </React.Fragment>
        }></Route>

<Route exact path='/admin/data-table' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <DataTable/>
          
          </React.Fragment>
        }></Route>

        {/* <Route exact path="/admin/calinderpage" element={<ClanderAppointment/>}></Route> */}

        <Route exact path='/admin/calinderpage' element={
          <React.Fragment>
           <HeaderAdmin />
           <Salidbar />
          <ClanderAppointment/>
          </React.Fragment>
        }></Route>

</Routes>
    </div>
  );
}

export default App;
