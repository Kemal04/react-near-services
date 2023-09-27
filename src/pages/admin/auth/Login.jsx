import { useContext, useState } from 'react';
import styles from './login.module.css'
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setAuthState } = useContext(AuthContext);

    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();

        const data = { email: email, password: password }

        if (!email) {
            toast.error("E-mail adresi ýaz!")
        }
        else if (!password) {
            toast.error("Açar sözüni ýaz!")
        }
        else if (password.length < 8) {
            toast.error("Açar sözi 8-den uly bolmaly!")
        }
        else {
            await axios.post(`${import.meta.env.VITE_API_FETCH}/auth/rootman`, data).then((res) => {
                if (res.data.error) {
                    toast.error(res.data.error)
                } else {
                    toast.success(res.data.success)
                    localStorage.setItem("accessToken", res.data.token)
                    setAuthState({
                        email: res.data.email,
                        id: res.data.id,
                        status: true,
                        role: res.data.role,
                    });
                    navigate("/admin")
                    window.location.reload()
                }

            })
        }
    }

    return (
        <>
            <div style={{ backgroundColor: '#080710', zIndex: "-1", padding: "50vh" }}>
                <div className={styles.background}>
                    <div className={styles.shape}></div>
                    <div className={styles.shape}></div>
                </div>
                <form className={styles.login_form} onSubmit={loginUser}>
                    <h3>Login Page</h3>

                    <label className={styles.login_label} htmlFor="email">E-mail</label>
                    <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} className={styles.login_input} type="email" placeholder="Email address" id="email" autoComplete='off' required />

                    <label className={styles.login_label} htmlFor="password">Password</label>
                    <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} className={styles.login_input} type="password" placeholder="Password" id="password" autoComplete='off' required />

                    <button className={styles.login_button} type='submit'>Log In</button>
                </form>
            </div>
        </>
    )
}

export default Login