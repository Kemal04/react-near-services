import { faEnvelope, faHeart, faMapMarkerAlt, faPhone, faShoppingBasket, faUserAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="bg-dark-blue text-white py-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="row fs-12 fw-black">
                                <div className="col-xl-4">
                                    <FontAwesomeIcon icon={faPhone} className="text-danger me-2" />
                                    <Link className="text-decoration-none text-white" to='/'>+993 63 29-78-77</Link>
                                </div>
                                <div className="col-xl-4">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-danger me-2" />
                                    <Link className="text-decoration-none text-white" to='/'>plan@gmail.com</Link>
                                </div>
                                <div className="col-xl-4">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger me-2" />
                                    <Link className="text-decoration-none text-white" to='/'>1734 Stonecoal Road</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 text-end small">
                            <FontAwesomeIcon icon={faUserAlt} className="text-danger me-2" />
                            <Link className="text-decoration-none text-white" to='/'>Login</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-dark-blue-700 text-white pt-4 pb-3 position-sticky top-0" style={{ zIndex: "100" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 h1">
                            Logo
                        </div>
                        <div className="col-xl-4">
                            <div className="input-group">
                                <input type="text" className="form-control rounded-start-5 ps-4" placeholder="Search here" />
                                <button className="btn btn-danger rounded-end-5 px-4 fw-black" type="button">Search</button>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="d-flex justify-content-end">
                                <div className="me-3 text-center">
                                    <FontAwesomeIcon icon={faHeart} />
                                    <div>Favorites</div>
                                </div>
                                <div className="ms-3 text-center">
                                    <FontAwesomeIcon icon={faShoppingBasket} />
                                    <div>Your Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-bottom py-2 shadow">
                <div className="container">
                    <ul className="nav navbar1 position-relative">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link text-dark">Active</NavLink>
                            <div className="nav-dropdown">
                                <div className="nav-dropdown-center">
                                    <div className="nav-dropdown-row">
                                        <div className="nav-dropdown-column">
                                            <div className="nav-dropdown-box">
                                                <Link to="/" className="nav-dropdown-box__link">CLOTHES</Link>
                                                <ul>
                                                    <li><Link to="/">Dress</Link></li>
                                                    <li><Link to="/">T-shirt</Link></li>
                                                    <li><Link to="/">Shirt</Link></li>
                                                    <li><Link to="/">Jeans</Link></li>
                                                    <li><Link to="/">Denim Jacket</Link></li>
                                                    <li><Link to="/">Trousers</Link></li>
                                                </ul>
                                            </div>
                                            <div className="nav-dropdown-box">
                                                <Link to="/" className="nav-dropdown-box__link">CLOTHES</Link>
                                                <ul>
                                                    <li><Link to="/">Dress</Link></li>
                                                    <li><Link to="/">T-shirt</Link></li>
                                                    <li><Link to="/">Shirt</Link></li>
                                                    <li><Link to="/">Jeans</Link></li>
                                                    <li><Link to="/">Denim Jacket</Link></li>
                                                    <li><Link to="/">Shorts</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="nav-dropdown-column">
                                            <div className="nav-dropdown-box">
                                                <Link to="/" className="nav-dropdown-box__link">CLOTHES</Link>
                                                <ul>
                                                    <li><Link to="/">Dress</Link></li>
                                                    <li><Link to="/">T-shirt</Link></li>
                                                    <li><Link to="/">Shirt</Link></li>
                                                    <li><Link to="/">Jeans</Link></li>
                                                    <li><Link to="/">Denim Jacket</Link></li>
                                                    <li><Link to="/">Trousers</Link></li>
                                                    <li><Link to="/">Shorts</Link></li>
                                                    <li><Link to="/">Blouse</Link></li>
                                                    <li><Link to="/">Jacket</Link></li>
                                                    <li><Link to="/">Skirt</Link></li>
                                                    <li><Link to="/">Beach Wear</Link></li>
                                                    <li><Link to="/">Hijab</Link></li>
                                                    <li><Link to="/">Big size</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="nav-dropdown-column">
                                            <div className="nav-dropdown-box">
                                                <Link to="/" className="nav-dropdown-box__link">CLOTHES</Link>
                                                <ul>
                                                    <li><Link to="/">Dress</Link></li>
                                                    <li><Link to="/">T-shirt</Link></li>
                                                    <li><Link to="/">Shirt</Link></li>
                                                    <li><Link to="/">Jeans</Link></li>
                                                    <li><Link to="/">Denim Jacket</Link></li>
                                                    <li><Link to="/">Trousers</Link></li>
                                                    <li><Link to="/">Shorts</Link></li>
                                                    <li><Link to="/">Blouse</Link></li>
                                                    <li><Link to="/">Jacket</Link></li>
                                                    <li><Link to="/">Skirt</Link></li>
                                                    <li><Link to="/">Beach Wear</Link></li>
                                                    <li><Link to="/">Hijab</Link></li>
                                                    <li><Link to="/">Big size</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="nav-dropdown-column">
                                            <div className="nav-dropdown-box">
                                                <Link to="/" className="nav-dropdown-box__link">CLOTHES</Link>
                                                <ul>
                                                    <li><Link to="/">Dress</Link></li>
                                                    <li><Link to="/">T-shirt</Link></li>
                                                    <li><Link to="/">Shirt</Link></li>
                                                    <li><Link to="/">Jeans</Link></li>
                                                    <li><Link to="/">Denim Jacket</Link></li>
                                                    <li><Link to="/">Trousers</Link></li>
                                                    <li><Link to="/">Shorts</Link></li>
                                                    <li><Link to="/">Blouse</Link></li>
                                                    <li><Link to="/">Jacket</Link></li>
                                                    <li><Link to="/">Skirt</Link></li>
                                                    <li><Link to="/">Beach Wear</Link></li>
                                                    <li><Link to="/">Hijab</Link></li>
                                                    <li><Link to="/">Big size</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="nav-dropdown-column">
                                            <div className="nav-dropdown-box">
                                                <Link to="/" className="nav-dropdown-box__link">CLOTHES</Link>
                                                <ul>
                                                    <li><Link to="/">Dress</Link></li>
                                                    <li><Link to="/">T-shirt</Link></li>
                                                    <li><Link to="/">Shirt</Link></li>
                                                    <li><Link to="/">Jeans</Link></li>
                                                    <li><Link to="/">Denim Jacket</Link></li>
                                                    <li><Link to="/">Trousers</Link></li>
                                                    <li><Link to="/">Shorts</Link></li>
                                                    <li><Link to="/">Blouse</Link></li>
                                                    <li><Link to="/">Jacket</Link></li>
                                                    <li><Link to="/">Skirt</Link></li>
                                                    <li><Link to="/">Beach Wear</Link></li>
                                                    <li><Link to="/">Hijab</Link></li>
                                                    <li><Link to="/">Big size</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="campaign-container">
                                            <div className="campaign-column">
                                                <Link to="/">
                                                    {/* <img src="img/bg/banner_2.png" alt="" className="img-fluid"> */}
                                                </Link>
                                                <Link to="/">
                                                    {/* <img src="img/bg/banner_2.png" alt="" className="img-fluid"> */}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link text-dark">Hot Deals</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link text-dark">Categories</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link text-dark">Laptops</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link text-dark">Smartphones</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link text-dark">Cameras</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link text-dark">Accessories</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar