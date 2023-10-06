import { Link } from "react-router-dom"
import icon_youtube from '../../assets/icons/youtube.svg'
import icon_tweeter from '../../assets/icons/tweeter.svg'
import icon_ins from '../../assets/icons/ins.svg'
import icon_web from '../../assets/icons/web.svg'
import icon_tiktok from '../../assets/icons/tiktok.svg'
import logoImg from '../../assets/logo.svg'

const Footer = () => {
    return (
        <>
            <div className="footer bg-white pb-5 pt-3 mt-5 border-top">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-3">
                            <Link to="/" className="text-white d-flex align-items-end">
                                <img src={logoImg} alt="logo" style={{ width: "30px", marginRight: "-8px" }} />
                                <span className="text-yellow fw-semibold">akynyňda<span className='text-dark'>.com</span></span>
                            </Link>
                            <div className="mt-3 mb-2 small fw-black">Sorag üçin! 24/7 jaň edip bilersiňiz</div>
                            <Link to='/' className="fs-18 text-decoration-none text-primary fw-bold">+993 63 29-78-77</Link>
                            <div className="mt-2"><Link to='/' className="text-decoration-none text-secondary small">Aşgabat, Oguzhan köçesi<br /> Sanly Çözgüt IT meýdançasy</Link></div>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <div><img src={icon_youtube} alt="" style={{ width: "30px" }} /></div>
                                <div><img src={icon_tiktok} alt="" style={{ width: "30px" }} /></div>
                                <div><img src={icon_ins} alt="" style={{ width: "30px" }} /></div>
                                <div><img src={icon_tweeter} alt="" style={{ width: "30px" }} /></div>
                                <div><img src={icon_web} alt="" style={{ width: "30px" }} /></div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="mb-2 fw-black">Giper salgylanmalar</div>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link to='/services' className="text-decoration-none small text-secondary fw-black">Hyzmatlar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/' className="text-decoration-none small text-secondary fw-black">Hyzmatlar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/' className="text-decoration-none small text-secondary fw-black">Hyzmatlar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/' className="text-decoration-none small text-secondary fw-black">Hyzmatlar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/' className="text-decoration-none small text-secondary fw-black">Hyzmatlar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/' className="text-decoration-none small text-secondary fw-black">Hyzmatlar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/' className="text-decoration-none small text-secondary fw-black">Hyzmatlar</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-2">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Biz barada</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Biz barada</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Biz barada</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Biz barada</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Biz barada</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-2">
                            <div className="mb-2 fw-black">Habarlaşmak</div>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link to="/about-us" className="text-decoration-none small text-secondary fw-black">Biz barada</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="text-decoration-none small text-secondary fw-black">Habarlaşmak</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Habarlaşmak</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Habarlaşmak</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Habarlaşmak</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Habarlaşmak</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="text-decoration-none small text-secondary fw-black">Habarlaşmak</Link>
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