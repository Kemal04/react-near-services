import { faCab, faEnvelope, faHomeLg, faImage, faTh, faThLarge, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

const AdminSidebar = () => {
    return (
        <div>
            {/* NAVBAR BOLUMINDE BUTTON GIDIPDIR */}
            <div className="position-sticky pt-3" style={{ height: "calc(100vh - 48px)" }}>
                <ul className="nav flex-column">
                    <li className="nav-item border-bottom border-top mb-4">
                        <NavLink to="/admin" className={`nav-link d-flex align-items-center text-dark`}>
                            <FontAwesomeIcon icon={faHomeLg} className="align-text-bottom me-2 text-primary" />
                            Esasy Sahypa
                        </NavLink>
                    </li>
                    <li className="nav-item mt-3">
                        <div className={`nav-link small text-secondary`}>
                            Settings for the web site
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/categories" className={`nav-link d-flex align-items-center text-dark`}>
                            <FontAwesomeIcon icon={faThLarge} className="align-text-bottom me-2" />
                            Categories
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/sub-categories" className={`nav-link d-flex align-items-center text-dark`}>
                            <FontAwesomeIcon icon={faTh} className="align-text-bottom me-2" />
                            Sub Categories
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/services" className={`nav-link d-flex align-items-center text-dark`}>
                            <FontAwesomeIcon icon={faCab} className="align-text-bottom me-2" />
                            Services
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/service/busniss-accounts" className={`nav-link d-flex align-items-center text-dark`}>
                            <FontAwesomeIcon icon={faCab} className="align-text-bottom me-2" />
                            Biznes Hyzmatlar
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/banners" className={`nav-link d-flex align-items-center text-dark`}>
                            <FontAwesomeIcon icon={faImage} className="align-text-bottom me-2" />
                            Banners
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/users" className={`nav-link d-flex align-items-center text-dark`}>
                            <FontAwesomeIcon icon={faUsers} className="align-text-bottom me-2" />
                            Users
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/contact" className={`nav-link d-flex align-items-center text-dark`}>
                            <FontAwesomeIcon icon={faEnvelope} className="align-text-bottom me-2" />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminSidebar