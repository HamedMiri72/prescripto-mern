import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Doctors from "./pages/Doctors"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import About from "./pages/About"
import MyProfile from "./pages/MyProfile"
import MyAppointments from "./pages/MyAppointments"
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/doctors" element={<Doctors /> } />
        <Route path= "/docktors/:speciality" element={<Doctors/>}/>
        <Route path="/login" element={<Login /> } />
        <Route path= "/about" element={<About />}/>
        <Route path= "/contact" elemnt={<Contact />}/>
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path= "/appointments/:docId" element={<Appointment />} />

      </Routes>
    </div>
  )
}

export default App