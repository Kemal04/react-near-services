import { Link } from 'react-router-dom'
import loginImg from '../../../assets/auth/login.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center align-items-center" style={{ height: "85vh" }}>
                    <div className='col-xl-9 shadow bg-white rounded-4 p-5'>
                        <div className='row'>
                            <div className="col-xl-6">
                                <img src={loginImg} alt="" className='img-fluid' />
                                <div className='mt-3 ms-5 ps-5'>
                                    <Link to='/register' className='text-dark'>Hasap açmak</Link>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className='h2 fw-bold'>Giriş et</div>
                                <form className='mt-4'>

                                    <div className="input-group mb-4 border-bottom">
                                        <span className="input-group-text p-0 bg-white border-0 fw-semibold pe-2"><FontAwesomeIcon icon={faPhoneAlt} className='small' /></span>
                                        <input className='form-control rounded-0 border-0 auth-input' type="number" placeholder='Telefon belgisi' min="60000000" max="65999999 " />
                                    </div>

                                    <div className="input-group mb-4 border-bottom">
                                        <span className="input-group-text p-0 bg-white border-0 fw-semibold pe-2"><FontAwesomeIcon icon={faLock} className='small' /></span>
                                        <input className='form-control rounded-0 border-0 auth-input' type="password" placeholder='Açar sözi' />
                                    </div>

                                    <div className='d-flex'>
                                        <input type="checkbox" className='form-check-input me-3 ms-1' />
                                        <span> Meni ýatda sakla</span>
                                    </div>
                                    <button type='submit' className='btn btn-yellow mt-3 px-5 rounded-1'>Giriş et</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login