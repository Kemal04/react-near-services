import { Link } from 'react-router-dom'
import registerImg from '../../../assets/auth/register.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faPhoneAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center align-items-center" style={{ height: "85vh" }}>
                    <div className='col-xl-9 shadow bg-white rounded-4 p-5'>
                        <div className='row'>
                            <div className="col-xl-6">
                                <div className='h2 fw-bold'>Hasap aç</div>
                                <form className='mt-4'>

                                    <div className="input-group mb-4 border-bottom">
                                        <span className="input-group-text p-0 bg-white border-0 fw-semibold pe-2"><FontAwesomeIcon icon={faUserAlt} className='small' /></span>
                                        <input className='form-control rounded-0 border-0  auth-input' type="text" placeholder='Ady' />
                                    </div>

                                    <div className="input-group mb-4 border-bottom">
                                        <span className="input-group-text p-0 bg-white border-0 fw-semibold pe-2"><FontAwesomeIcon icon={faPhoneAlt} className='small' /></span>
                                        <input className='form-control rounded-0 border-0 auth-input' type="number" placeholder='Telefon belgisi' min="60000000" max="65999999 " />
                                    </div>

                                    <div className="input-group mb-4 border-bottom">
                                        <span className="input-group-text p-0 bg-white border-0 fw-semibold pe-2"><FontAwesomeIcon icon={faLock} className='small' /></span>
                                        <input className='form-control rounded-0 border-0 auth-input' type="password" placeholder='Açar sözi' />
                                    </div>

                                    <div className="input-group mb-4 border-bottom">
                                        <span className="input-group-text p-0 bg-white border-0 fw-semibold pe-2"><FontAwesomeIcon icon={faLock} className='small' /></span>
                                        <input className='form-control rounded-0 border-0 auth-input' type="password" placeholder='Açar sözini gaýtala' />
                                    </div>

                                    <input type="checkbox" className='form-check-input me-3 ms-1' /><span> <Link to='/terms-of-service' className='text-dark'>Hyzmat şertlerindäki</Link> ähli beýannamalara razy</span>
                                    <button type='submit' className='btn btn-yellow mt-5 px-5 rounded-1'>Hasap aç</button>
                                </form>
                            </div>
                            <div className="col-xl-6 text-center">
                                <img src={registerImg} alt="" className='img-fluid' />
                                <div className='mt-3'>
                                    <Link to='/login' className='text-dark'>Men eýýäm agza</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register