import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from "react-hot-toast";
import { AdminNavbar, AdminSidebar, Footer, Navbar, ScrollToTop } from './components';
import { Categories, CategoryRead, Home, Login, NotFounded, Register, ServiceRead, Services, SubCategories, SubCategoryRead } from './pages/interface';
import { Admin, AdminBannerCreate, AdminBannerEdit, AdminBanners, AdminCategories, AdminCategoryCreate, AdminCategoryEdit, AdminLogin, AdminServiceCreate, AdminServiceEdit, AdminServices, AdminSubCategories, AdminSubCategoryCreate, AdminSubCategoryEdit } from './pages/admin';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './context/AuthContext';

const App = () => {

    const [authState, setAuthState] = useState({
        name: "",
        email: "",
        phone_num: "",
        id: 0,
        status: false,
        role: "User",
    });

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_FETCH}/auth/current_user`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        })
            .then((res) => {
                if (res.data.error) {
                    setAuthState({ ...authState, status: false, role: "User" });
                } else {
                    setAuthState({
                        name: res.data.name,
                        email: res.data.email,
                        phone_num: res.data.phone_num,
                        id: res.data.id,
                        status: true,
                        role: res.data.role,
                    });
                }
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AuthContext.Provider value={{ authState, setAuthState }}>
            <Router>
                <ScrollToTop />
                <Toaster />

                <Routes>
                    <Route path="/" element={<HomeLayout />}>

                        <Route path="/" element={<Home />} />

                        <Route path="/services" element={<Services />} />
                        <Route path="/service/:serviceId" element={<ServiceRead />} />

                        <Route path="/categories" element={<Categories />} />
                        <Route path="/category/:categoryId" element={<CategoryRead />} />

                        <Route path="/sub-categories" element={<SubCategories />} />
                        <Route path="/sub-category/:subCategoryId" element={<SubCategoryRead />} />

                    </Route>

                    {authState.role === "Admin" && (
                        <Route path="/admin" element={<AdminLayout />}>
                            <>
                                <Route path="" element={<Admin />} />

                                <Route path="categories" element={<AdminCategories />} />
                                <Route path="category/create" element={<AdminCategoryCreate />} />
                                <Route path="category/edit/:catId" element={<AdminCategoryEdit />} />

                                <Route path="sub-categories" element={<AdminSubCategories />} />
                                <Route path="sub-category/create" element={<AdminSubCategoryCreate />} />
                                <Route path="sub-category/edit/:subId" element={<AdminSubCategoryEdit />} />

                                <Route path="services" element={<AdminServices />} />
                                <Route path="service/create" element={<AdminServiceCreate />} />
                                <Route path="service/edit/:serviceId" element={<AdminServiceEdit />} />

                                <Route path="banners" element={<AdminBanners />} />
                                <Route path="banner/create" element={<AdminBannerCreate />} />
                                <Route path="banner/edit/:bannerId" element={<AdminBannerEdit />} />
                            </>
                        </Route>
                    )}

                    {!authState.status && (
                        <>
                            <Route path="/admin/login" element={<AdminLogin />} />

                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </>
                    )}

                    <Route path="/*" element={<NotFounded />} />

                </Routes>
            </Router>
        </AuthContext.Provider>
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

const AdminLayout = () => {
    return (
        <>
            <div className={`bg-light`}>
                <AdminNavbar />
                <div className="container-fluid">
                    <div className="row">
                        <nav id='sidebarMenu' className="col-xl-2 col-lg-2 col-md-2 d-md-block position-fixed collapse" style={{ backgroundColor: "#edf2f9", zIndex: "100", boxShadow: "0 0 10px" }}>
                            <AdminSidebar />
                        </nav>

                        <main className="col-xl-10 col-lg-10 col-md-10 ms-sm-auto px-md-4">
                            <Outlet />
                        </main>
                    </div>
                </div >
            </div >
        </>
    );
};

export default App