import { Link } from "react-router-dom"
import icon_youtube from '../../assets/icons/youtube.svg'
import icon_tweeter from '../../assets/icons/tweeter.svg'
import icon_ins from '../../assets/icons/ins.svg'
import icon_web from '../../assets/icons/web.svg'
import icon_tiktok from '../../assets/icons/tiktok.svg'

const Footer = () => {
    return (
        <>
            <div className="footer bg-white pb-5 pt-3 mt-5 border-top">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-3">
                            <Link to='/' className="h1 text-decoration-none">Logo</Link>
                            <div className="mt-3 mb-2 small fw-black">Got Question? Call Us 24/7</div>
                            <Link to='/' className="fs-18 text-decoration-none text-primary fw-bold">+993 63 29-78-77</Link>
                            <div className="mt-2"><Link to='/' className="text-decoration-none text-secondary small">17 Princess Road, London <br /> Grester London NW18JR, UK</Link></div>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <div><img src={icon_youtube} alt="" style={{ width: "30px" }} /></div>
                                <div><img src={icon_tiktok} alt="" style={{ width: "30px" }} /></div>
                                <div><img src={icon_ins} alt="" style={{ width: "30px" }} /></div>
                                <div><img src={icon_tweeter} alt="" style={{ width: "30px" }} /></div>
                                <div><img src={icon_web} alt="" style={{ width: "30px" }} /></div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="mb-2 fw-black">Find it Fast</div>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link to='/' className="text-decoration-none small text-secondary fw-black">Computers & Laptops</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/' className="text-decoration-none small text-secondary fw-black">Cameras & Photos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/' className="text-decoration-none small text-secondary fw-black">Hardware</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/' className="text-decoration-none small text-secondary fw-black">Smartphones & Tablets</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/' className="text-decoration-none small text-secondary fw-black">TV & Audio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/' className="text-decoration-none small text-secondary fw-black">Gadgets</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/' className="text-decoration-none small text-secondary fw-black">Car Electronics</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-2">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Video Games & Consoles</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Accessories</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Cameras & Photos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Hardware</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Computers & Laptops</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-2">
                            <div className="mb-2 fw-black">Customer Care</div>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">My Account</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Order Tracking</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Hardware</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Smartphones & Tablets</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">TV & Audio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Gadgets</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Car Electronics</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer