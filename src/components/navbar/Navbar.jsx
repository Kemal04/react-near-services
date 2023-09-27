import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import useFetch from "../../hooks/useFetch";

const Navbar = () => {

    const [categories] = useFetch(`${import.meta.env.VITE_API_FETCH}/category`, "category");

    return (
        <>
            <div style={{ zIndex: "1000", background: "linear-gradient(rgba(0,0,0,0.9),  rgba(0,0,0,0))" }} className="position-absolute top-0 w-100">
                <nav className={`navbar navbar-expand-lg navbar-light text-white`}>
                    <div className="container">

                        {/* LOGO */}
                        <Link to="/" className="navbar-brand text-white">
                            Logo
                        </Link>

                        {/* RESPONSOVE BUTTON */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* NAVBAR */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto me-auto align-items-center">
                                <li className='nav-item'>
                                    <div className="input-group">
                                        <input type="text" className="form-control ps-4 rounded-start-1" style={{ width: "300px" }} placeholder="Search here" />
                                        <button className="btn btn-yellow px-3 fw-black rounded-end-1" type="button"><FontAwesomeIcon icon={faSearch} /></button>
                                    </div>
                                </li>
                                <li className="nav-item dropdown ms-5">
                                    <div className="dropdown-toggle cursor-pointer" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false" >
                                        Logo for Business
                                    </div>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="nav-item">
                                <Link to='/login' className="btn btn-outline-light rounded-1">Giriş et</Link>
                            </div>
                            <div className="nav-item ms-2">
                                <Link to='/register' className="btn btn-yellow rounded-1">Hasap aç</Link>
                            </div>
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
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#">subCategories</a></li>
                                        <li><a className="dropdown-item" href="#">subCategories</a></li>
                                        <li><a className="dropdown-item" href="#">subCategories</a></li>
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