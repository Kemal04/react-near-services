import { Link, useNavigate } from 'react-router-dom'
import loginImg from '../../../assets/auth/login.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import logoImg from '../../../assets/logo.svg'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'

const Login = () => {

    const { setAuthState } = useContext(AuthContext);

    const [phone_num, setPhone_num] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { phone_num: phone_num, password: password }

        if (!phone_num) {
            toast.error("Telefon belginizi ýazyň!")
        }
        else if (!password) {
            toast.error("Açar sözüňizi ýazyň!")
        }
        else if (password.length < 8) {
            toast.error("Açar sözüňiz 8-den uly bolmaly")
        }
        else {
            await axios.post(`${import.meta.env.VITE_API_FETCH}/auth/login`, data).then((res) => {
                if (res.data.error) {
                    toast.error(res.data.error)
                } else {
                    localStorage.setItem("accessToken", res.data.token)
                    setAuthState({
                        phone_num: res.data.phone_num,
                        id: res.data.id,
                        status: true,
                        role: res.data.role,
                    });
                    toast.success(res.data.success)
                    navigate("/")
                    window.location.reload()
                }

            })
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white shadow">
                <div className="container d-flex justify-content-center">
                    <Link to="/" className="navbar-brand text-white d-flex align-items-end">
                        <img src={logoImg} alt="logo" style={{ width: "30px", marginRight: "-8px" }} />
                        <span className="text-yellow fw-semibold">anymda<span className='text-dark'>.com</span></span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

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
                                <form className='mt-4' onSubmit={handleSubmit}>

                                    <div className="input-group mb-4 border-bottom">
                                        <span className="input-group-text p-0 bg-white border-0 fw-semibold pe-2"><FontAwesomeIcon icon={faPhoneAlt} className='small' /></span>
                                        <input value={phone_num} onChange={(e) => setPhone_num(e.target.value)} className='form-control rounded-0 border-0 auth-input' type="number" placeholder='Telefon belgisi' min="60000000" max="65999999 " />
                                    </div>

                                    <div className="input-group mb-4 border-bottom">
                                        <span className="input-group-text p-0 bg-white border-0 fw-semibold pe-2"><FontAwesomeIcon icon={faLock} className='small' /></span>
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} className='form-control rounded-0 border-0 auth-input' type="password" placeholder='Açar sözi' />
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