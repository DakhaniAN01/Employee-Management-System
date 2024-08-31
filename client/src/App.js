import "./App.css";
import {Routes,Route} from 'react-router-dom';
import PagenotFound from "./page/PagenotFound";
import Register from "./page/Auth/Register";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./page/Auth/Login";
import Dashboard from "./page/user/Dashboard";
import Private from "./components/Routes/Private";
import ForgotPassword from "./page/Auth/ForgotPassword";
import Adminroute from "./components/Routes/Adminroute";
import AdminDashboard from "./page/Admin/AdminDashboard";
import Users from "./page/Admin/Users";
import Profile from "./page/user/Profile";

function App() {
  return (
    <div className="App">
         <Routes>
          <Route path='/dashboard' element={<Private/>}>
            <Route path="user" element={<Dashboard/>}/>
            <Route path="user/Profile" element={<Profile/>}/>
          </Route>
          <Route path='/dashboard' element={<Adminroute/>}>
            <Route path="admin" element={<AdminDashboard/>}/>
            <Route path="admin/users" element={<Users/>}/>
          </Route>
          <Route path="/" element={<Register/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/*"  element={<PagenotFound/>}/>
         </Routes>
         
    </div>
  );
}

export default App;
