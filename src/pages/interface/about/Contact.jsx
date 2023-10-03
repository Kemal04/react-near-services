import aboutImg from '../../../assets/cards/about.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope, faMapLocationDot, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'

const Contact = () => {

    const [contact, setContact] = useState({
        name: "",
        email: "",
        subject: "",
        comment: "",
    })

    const handleChange = (e) => {
        setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()

        if (!contact.name) {
            toast.error("Adyňyzy ýazyň")
        }
        else if (!contact.email) {
            toast.error("E-mail adresiňizi ýazyň")
        }
        else if (!contact.subject) {
            toast.error("Temaňyzy ýazyň")
        }
        else if (!contact.comment) {
            toast.error("Teswiriňizi ýazyň")
        }
        else if (contact.comment.length < 25) {
            toast.error("Teswiriňizi 25 harpdan ybarat bolmaly")
        }
        else {
            await axios.post(`${import.meta.env.VITE_API_FETCH}/contact/create`, contact, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            }).then((res) => {
                toast.success(res.data.success)
                setContact({})
            }).catch((err) => {
                console.log(err)
            });
        }
    }

    return (
        <>
            <div className='container-fluid px-0 text-center'>
                <div style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${aboutImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom", height: "55vh", backgroundSize: "cover", backgroundAttachment: "fixed" }}></div>
                <div className="card-img-overlay text-white top-50 start-50" style={{ zIndex: "10", transform: "translate(-50%, -50%)" }}>
                    <div className="display-2 fw-bold">Habarlaşmak</div>
                </div>
            </div>

            <div className="container pb-5" style={{ marginTop: "-80px" }}>
                <div className='card border-0 shadow p-5 bg-whit'>
                    <div className='row align-items-center'>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-12 mb-4 text-center'>
                            <FontAwesomeIcon icon={faPhoneAlt} style={{ fontSize: "20px" }} />
                            <div className='h4 mt-3'>Telefon</div>
                            <div className='text-secondary'>499401, 499402, 499403</div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-12 mb-4 text-center'>
                            <FontAwesomeIcon icon={faMapLocationDot} style={{ fontSize: "20px" }} />
                            <div className='h4 mt-3'>Salgymyz</div>
                            <div className='text-secondary'>Aşgabat ş., Oguzhan köç., 13 "A"</div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-12 mb-4 text-center'>
                            <FontAwesomeIcon icon={faClock} style={{ fontSize: "20px" }} />
                            <div className='h4 mt-3'>Iş wagtlarymyz</div>
                            <div className='text-secondary'>09:00-dan, 22:00 çenli</div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-12 mb-4 text-center'>
                            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "20px" }} />
                            <div className='h4 mt-3'>E-mail salgymyz</div>
                            <div className='text-secondary'>it@sanly.tm</div>
                        </div>
                    </div>

                    <div className='t-3'>
                        <iframe title='0' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1891.630047365655!2d58.41346467302943!3d37.90858835737099!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffd9fd7c40d39%3A0x66acf7abccc12246!2zU2FubHkgw4fDtnpnw7x0IElUIG1lw71kYW7Dp2EgaG9qYWx5ayBqZW1necO9ZXRp!5e1!3m2!1sen!2s!4v1696345990053!5m2!1sen!2s" style={{ border: "1px", width: "100%", height: "500px" }} allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className='text-center my-5'>
                    <div className='h6 ls-2 mb-3 text-yellow'>Habarlaşmak</div>
                    <div className='h1'>Bize hat ugradyň</div>
                </div>

                <form className='row justify-content-center' onSubmit={handleClick}>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-12 mb-4">
                        <input onChange={handleChange} name='name' type="text" className="form-control rounded-0" placeholder='Adynyz' autoComplete='off' />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-12 mb-4">
                        <input onChange={handleChange} name='email' type="email" className="form-control rounded-0" placeholder='E-mail adresiniz' autoComplete='off' />
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-12 mb-4">
                        <input onChange={handleChange} name='subject' type="text" className="form-control rounded-0" placeholder='Temasy' autoComplete='off' />
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-12 mb-4">
                        <textarea onChange={handleChange} name='comment' className="form-control rounded-0" rows="6" placeholder='Mazmuny'></textarea>
                    </div>
                    <div className="col-xl-5 mb-4 text-center">
                        <button className='btn btn-yellow px-5'>Ugrat</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact