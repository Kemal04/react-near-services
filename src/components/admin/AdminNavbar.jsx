import { faMoon, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'

const AdminNavbar = () => {

    const { setAuthState } = useContext(AuthContext)

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ email: "", id: 0, status: false, role: "User" })
        navigate('/')
    };

    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-dark navbar-dark sticky-top`}>
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        Logo
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="ms-auto" role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" style={{ width: "500px" }} />
                        </form>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <div className="nav-link border-0 bg-dark text-white" style={{ cursor: "pointer" }}>
                                    <FontAwesomeIcon icon={faMoon} />
                                </div>
                            </li>
                            <li className="nav-item mx-2 ">
                                <div className="nav-link dropdown">
                                    <div className="nav-link dropdown-toggle p-0 text-white" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                    <ul className="dropdown-menu shadow border-0" style={{ right: "0" }}>
                                        <li><Link to="/" className="dropdown-item">Profilim</Link></li>
                                        <li><Link to="/" className="dropdown-item">Baş sahypa</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><div className="dropdown-item cursor-pointer" onClick={logout}>Çykyş etmek</div></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AdminNavbar