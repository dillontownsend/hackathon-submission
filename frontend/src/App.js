import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import DashboardPage from './pages/DashboardPage'
import LandingPage from './pages/LandingPage'
import Callback from './pages/Callback'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/callback" element={<Callback />} />
            </Routes>
        </Router>
    )
}

export default App
