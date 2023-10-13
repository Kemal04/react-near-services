import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, NavLink } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import logoImg from '../../assets/logo.svg'
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

    const [categories] = useFetch(`${import.meta.env.VITE_API_FETCH}/home/category`, "category");

    //AUTH SECTION API
    const { authState, setAuthState } = useContext(AuthContext)

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ phone_num: "", id: 0, status: false, role: "User" })
    };

    //SEARCH SECTION API
    const [value, setValue] = useState('');
    const [service, setService] = useState(null)

    const handleClick = async (e) => {
        e.preventDefault();

        await axios.get(`${import.meta.env.VITE_API_FETCH}/home/service?query=${value}&limit=100`)
            .then((res) => {
                setService(res.data.services);
            }).catch((err) => {
                console.log(err);
            });
        setValue('')
    };

    return (
        <>
            <div style={{ zIndex: "1000", background: "linear-gradient(rgba(0,0,0,0.9),  rgba(0,0,0,0))" }} className="position-absolute top-0 w-100">
                <nav className={`navbar navbar-expand-lg navbar-light text-white`}>
                    <div className="container">

                        {/* LOGO */}
                        <Link to="/" className="navbar-brand text-white d-flex align-items-end">
                            <img src={logoImg} alt="logo" style={{ width: "30px", marginRight: "-8px" }} />
                            <span className="text-yellow fw-semibold">akynyňda<span className='text-white'>.com</span></span>
                        </Link>

                        {/* RESPONSOVE BUTTON */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* NAVBAR */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto me-auto align-items-center">
                                <li className='nav-item position-relative'>
                                    <form className="input-group" onSubmit={handleClick}>
                                        <input value={value} onChange={(e) => setValue(e.target.value)} type="search" className="form-control ps-4 rounded-start-1" style={{ width: "300px" }} placeholder="Gözle..." />
                                        <button className="btn btn-yellow px-3 fw-black rounded-end-1" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                                    </form>
                                    {
                                        service === null ? "" :
                                            <div className="position-absolute top-100 text-dark border bg-white rounded-1 w-100 mt-1 py-2 px-4" style={{ zIndex: "1" }}>
                                                {
                                                    service?.map((data, index) => (
                                                        <Link to={`/service/${data.id}`} key={index} className="d-flex align-items-center mb-2 text-decoration-none text-dark">
                                                            <img src={`https://it.net.tm/yakynynda_api/api/img/service/${data.service_img}`} alt="" style={{ width: "50px", height: "40px", objectFit: "cover" }} />
                                                            <div className="ms-2">{data.name_tm}</div>
                                                        </Link>
                                                    ))
                                                }
                                            </div>
                                    }
                                </li>
                                <li className="nav-item dropdown ms-5">
                                    <div className="dropdown-toggle cursor-pointer" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false" >
                                        Biznes hasaby
                                    </div>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#">Nähili açylyar</a></li>
                                        <li><a className="dropdown-item" href="#">Aýratynlyklary</a></li>
                                        <li><a className="dropdown-item" href="#">Näme üçin gerek</a></li>
                                    </ul>
                                </li>
                            </ul>

                            {
                                !authState.status
                                    ?
                                    <>
                                        <div className="nav-item">
                                            <Link to='/login' className="btn btn-outline-light rounded-1">Giriş et</Link>
                                        </div>
                                        <div className="nav-item ms-2">
                                            <Link to='/register' className="btn btn-yellow rounded-1">Hasap aç</Link>
                                        </div>
                                    </>
                                    :
                                    <div className="navbar-nav ms-5">
                                        <li className="nav-item dropdown">
                                            <div className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ letterSpacing: "1px" }}>
                                                Şahsy Otag
                                            </div>
                                            <ul className="dropdown-menu rounded-1">
                                                {
                                                    authState.role === "Admin" && <li><NavLink to="/admin" className="dropdown-item bg-white text-black">Admin</NavLink></li>
                                                }
                                                {
                                                    authState.role === "User" && <li><NavLink to={`/profile`} className="dropdown-item bg-white text-black">Şahsy Otagym</NavLink></li>
                                                }
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><button onClick={logout} className="dropdown-item bg-white text-black">Ulgamdan çyk</button></li>
                                            </ul>
                                        </li>
                                    </div>
                            }
                        </div>
                    </div>
                </nav >
                <div className="container mt-4 text-white mb-5">
                    <ul className="nav">
                        {
                            categories?.map((category, index) => (
                                <li className="nav-item dropdown me-5" key={index}>
                                    <div className="dropdown-toggle cursor-pointer" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false" >
                                        {category.name_tm}
                                    </div>
                                    <ul className="dropdown-menu rounded-1" style={{ minWidth: "400px" }} aria-labelledby="dropdownMenuButton">
                                        <div className="row">
                                            {
                                                category.subcategories?.map((data, index) => (
                                                    <li className="col-xl-6 mb-2" key={index}>
                                                        <Link to={`/sub-category/${data.id}`} className="dropdown-item d-flex align-items-center">
                                                            <img src={`https://it.net.tm/yakynynda_api/api/img/subcategory/${data.subcategory_img}`} alt="" style={{ width: "30px" }} />
                                                            <div className="fw-semibold ms-2">{data.name_tm}</div>
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </div>
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            {/* SIDEBAR */}
            <div className={`offcanvas offcanvas-start bg-white`} style={{ width: "250px" }} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" >
                <div className="offcanvas-header flex-column align-items-start p-0">
                    <div className='d-flex align-items-center justify-content-between p-3'>
                        <h5 className="offcanvas-title me-5 pe-5" id="offcanvasWithBothOptionsLabel">Logo</h5>
                        <button type="button" className={`btn-close ms-4`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar