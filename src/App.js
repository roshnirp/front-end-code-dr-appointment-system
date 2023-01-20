
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
        <Route exact path='/admin/dashboard' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <Dashboard />
          </React.Fragment>
        }></Route>



        <Route exact path='/admin/appointment' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <Appoitmentpage />
          </React.Fragment>
        }></Route>

        <Route exact path='/admin/Specialities' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <Specialistpage />
          </React.Fragment>
        }></Route>


        <Route exact path='/admin/doctors' element={
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

        <Route exact path='/admin/transactions' element={
          <React.Fragment>
            <HeaderAdmin />
            <Salidbar />
            <Transaction />
          </React.Fragment>
        }></Route>


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
            <Register/>
          </React.Fragment>
        }></Route>








      </Routes>
    </div>
  );
}

export default App;
