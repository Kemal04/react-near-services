import { Link } from "react-router-dom"

const Login = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-xl-7">
                        <div className="card w-100 rounded-0 p-3 shadow-sm">
                            <div className="h2 text-center mb-4">Login</div>
                            <div className="mb-4 d-flex justify-content-center align-items-center">
                                <div className="position-relative border px-2 border-end-0 d-flex align-items-center" style={{ height: "42px" }}>
                                    <img src="https://kemal04.github.io/21-Trend/img/icons/lock.svg" style={{ width: "17px" }} />
                                </div>
                                <input type="email" placeholder="Email address" className="form-control rounded-0 w-50 py-2 px-3 border-start-0" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3 d-flex justify-content-center align-items-center">
                                <div className="position-relative border px-2 border-end-0 d-flex align-items-center" style={{ height: "42px" }}>
                                    <img src="https://kemal04.github.io/21-Trend/img/icons/lock.svg" style={{ width: "17px" }} />
                                </div>
                                <input type="password" placeholder="Password" className="form-control rounded-0 w-50 py-2 px-3 border-start-0" id="exampleInputPassword1" />
                            </div>
                            <div className="text-end w-75 mb-3">
                                <Link to='/forget-password' className="text-decoration-none text-dark fw-black">Forget Password ?</Link>
                            </div>
                            <div className="d-flex justify-content-center mb-5">
                                <button type="submit" className="btn btn-dark rounded-0" style={{ width: "54%" }}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login