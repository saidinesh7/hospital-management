
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import MainAuth from './components/MainAuth';
import Hello from './components/Hello';
import Adminview from './components/Adminview';
import AddDoctor from './components/AddDoctor';
import ViewDoctor from './components/ViewDoctor';
import SearchDoc from './components/SearchDoc';
import ViewPatient from './components/ViewPatient';
import SearchPatient from './components/SearchPatient';
import AddPatient from './components/AddPatient';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<MainAuth />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/Hello' element={<Hello />} />
    <Route path='/Admindashboard' element={<Adminview />}/>
    <Route path='/AddDoctor' element={<AddDoctor />} />
    <Route path='/ViewDoctor' element={<ViewDoctor />} />
    <Route path='/SearchDoctor' element={<SearchDoc />} />
    <Route path='/ViewPatient' element={<ViewPatient />} />
    <Route path='/SearchPatient' element={<SearchPatient />} />
    <Route path='/AddPatient' element={<AddPatient />} />
  </Routes>
  </BrowserRouter>
  <ToastContainer />
  </div>
  );
}

export default App;
