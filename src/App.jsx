import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';
import ForgetPassword from './Auth/ForgetPassword';
import ResetPassword from './Auth/ResetPassword';
import Otp from './Auth/Otp';
import Signup from './Auth/SignUp';
import AdminDashboardSideNav from './SidenavAdmindasboard/Dashboard';
import AdminDashboard from './Admin/AdminDashboard';
import Patient from './Admin/Patient';
import Doctors from './Admin/Doctors';
import BloodBank from './Admin/BloodBank';
import Appointment from './Admin/Appointment';
import EHR from './Admin/EHR';
// import Payment from './Admin/Payment';
import Blog from './Admin/Blog';
import SelectRole from './Auth/SelectRole';
// import DoctorAppointment from './Doctor/Appointment';
// import Medical_Record from './Doctor/Medical_Record';
// import DoctorPatient from './Doctor/Patient';
// import DoctorPayment from './Doctor/Payment';
// import Session from './Doctor/Session';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Otp />} />
        <Route path='/select-role' element={<SelectRole />}/>


        <Route element={<AdminDashboardSideNav />}>
  <Route path="/admin/dashboard" element={<AdminDashboard />} />
  <Route path="/admin/patients" element={<Patient />} />
  <Route path="/admin/doctors" element={<Doctors />} />
  <Route path="/admin/bloodbank" element={<BloodBank />} />
  <Route path="/admin/appointments" element={<Appointment />} />
  <Route path="/admin/ehr" element={<EHR />} />
  {/* <Route path="/admin/payments" element={<Payment />} /> */}
  <Route path="/admin/blogs" element={<Blog />} />
</Route>



<Route>


</Route>

      </Routes>


    </Router>
  );
}

export default App;
