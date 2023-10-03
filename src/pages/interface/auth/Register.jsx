import { Link, useNavigate } from 'react-router-dom'
import registerImg from '../../../assets/auth/register.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faPhoneAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import logoImg from '../../../assets/logo.svg'
import { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import toast from 'react-hot-toast'
import axios from 'axios'

const Register = () => {

    const { setAuthState } = useContext(AuthContext);

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [phone_num, setPhone_num] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { name: name, phone_num: phone_num, password: password }

        if (!name) {
            toast.error("Adyňyzy ýazyň!")
        }
        else if (!phone_num) {
            toast.error("Telefon belginizi ýazyň!")
        }
        else if (!password) {
            toast.error("Açar sözüňizi ýazyň!")
        }
        else if (!cPassword) {
            toast.error("Açar sözüňizi gaýtadan ýazyň!")
        }
        else if (cPassword !== password) {
            toast.error("Açar sözüňiz gabat gelenok !")
        }
        else if (password.length < 8) {
            toast.error("Açar sözüňiz 8-den uly bolmaly")
        }
        else {
            await axios.post(`${import.meta.env.VITE_API_FETCH}/auth/register`, data).then((res) => {
                if (res.data.error) {
                    toast.error(res.data.error)
                } else {
                    localStorage.setItem("accessToken", res.data.token)
                    setAuthState({
                        name: res.data.name,
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
                                <div className='h2 fw-bold'>Hasap aç</div>
                                <form className='mt-4' onSubmit={handleSubmit}>

                                    <div className="input-group mb-4 border-bottom">
                                        <span className="input-group-text p-0 bg-white border-0 fw-semibold pe-2"><FontAwesomeIcon icon={faUserAlt} className='small' /></span>
                                        <input value={name} onChange={(e)=>setName(e.target.value)} className='form-control rounded-0 border-0  auth-input' type="text" placeholder='Ady' />
                                    </div>

                                    <div className="input-group mb-4 border-bottom">
                                        <span className="input-group-text p-0 bg-white border-0 fw-semibold pe-2"><FontAwesomeIcon icon={faPhoneAlt} className='small' /></span>
                                        <input value={phone_num} onChange={(e)=>setPhone_num(e.target.value)} className='form-control rounded-0 border-0 auth-input' type="number" placeholder='Telefon belgisi' min="60000000" max="65999999 " />
                                    </div>

                                    <div className="input-group mb-4 border-bottom">
                                        <span className="input-group-text p-0 bg-white border-0 fw-semibold pe-2"><FontAwesomeIcon icon={faLock} className='small' /></span>
                                        <input value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control rounded-0 border-0 auth-input' type="password" placeholder='Açar sözi' />
                                    </div>

                                    <div className="input-group mb-4 border-bottom">
                                        <span className="input-group-text p-0 bg-white border-0 fw-semibold pe-2"><FontAwesomeIcon icon={faLock} className='small' /></span>
                                        <input value={cPassword} onChange={(e)=>setCPassword(e.target.value)} className='form-control rounded-0 border-0 auth-input' type="password" placeholder='Açar sözini gaýtala' />
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