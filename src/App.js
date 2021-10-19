
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './pages/About/About';
import DepartmentDetails from './pages/Home/DepartmentDetails/DepartmentDetails';
import Departments from './pages/Home/Departments/Departments';
import DoctorDetails from './pages/Home/DoctorDetails/DoctorDetails';
import Doctors from './pages/Home/Doctors/Doctors';

import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import OurTeam from './pages/OurTeam/OurTeam/OurTeam';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>

            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>

            </Route>
            <Route path='/departments'>
              <Departments></Departments>
            </Route>
            <Route path='/department/:departmentName'>
              <DepartmentDetails></DepartmentDetails>
            </Route>
            <Route path='/doctors'>
              <Doctors></Doctors>
            </Route>
            <PrivateRoute path='/doctor/:doctorId'>
              <DoctorDetails>

              </DoctorDetails>
            </PrivateRoute>
            <PrivateRoute path='/ourteam'>
              <OurTeam></OurTeam>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
