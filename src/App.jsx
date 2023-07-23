import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from "react-hot-toast";
import { Footer, Navbar, ScrollToTop } from './components';
import { ForgetPassword, Home, Login, Register } from './pages/interface';

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Toaster />

            <Routes>
                <Route path="/" element={<HomeLayout />}>

                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forget-password" element={<ForgetPassword />} />

                </Route>
            </Routes>
        </Router>
    )
}

const HomeLayout = () => {
    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />
        </>
    );
};

export default App