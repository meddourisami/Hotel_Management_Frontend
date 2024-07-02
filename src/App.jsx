import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css'
import AddRoom from './components/room/AddRoom'
import ExistingRooms from "./components/room/ExistingRooms"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import EditRoom from "./components/room/EditRoom"
import Home from "./components/home/Home"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import RoomListing from "./components/room/RoomListing"
import Admin from "./components/admin/Admin"
import Login from "./auth/Login"
import Registration from "./auth/Registration"
import Profile from "./auth/Profile"
import Logout from "./auth/Logout"
import AuthProvider from "./auth/AuthProvider"

function App() {

  return (
    <AuthProvider>
      <main>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path="/existing-rooms" element={<ExistingRooms />} />
            <Route path="/add-room" element={<AddRoom />} />
            <Route path="/browse-all-rooms" element={<RoomListing />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout/>} />
          </Routes>
        </Router>
        <Footer/>
      </main>
    </AuthProvider>
  )
}

export default App
