import { Banner } from "../../../components"
import card from '../../../assets/banner/home-banner.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleRight, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import { useEffect, useRef, useState } from "react"
import moment from "moment/moment"

const Home = () => {

    const option2 = {
        type: 'loop',
        perPage: 4,
        focus: 0,
        omitEnd: true,
        perMove: 1,
        pagination: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 1000,
    };

    const option3 = {
        type: 'loop',
        perPage: 3,
        focus: 0,
        omitEnd: true,
        perMove: 1,
        pagination: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 1000,
    };

    //TIMER
    const [date, setDate] = useState(() => {
        const localDate = localStorage.getItem('date')
        return localDate
            ? moment(JSON.parse(localDate))
            : moment().add(48, 'hours')
    })

    const [days, setDays] = useState('00')
    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')

    let interval = useRef();

    useEffect(() => {
        startCountDown()
        return clearInterval(interval.current)
    }, [date])

    const startCountDown = () => {
        interval = setInterval(() => {
            localStorage.setItem('date', JSON.stringify(date))

            const now = moment()
            const distance = date - now

            const days = moment.duration(distance).days()
            const hours = moment.duration(distance).hours()
            const minutes = moment.duration(distance).minutes()
            const seconds = moment.duration(distance).seconds()

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        }, 1000)
    }

    return (
        <>
            <Banner />

            <div className="container mt-5">
                <div className="text-center h1 mb-5">
                    <span className="border-danger border-bottom border-2 pb-2"> Big Discounts</span>
                </div>
                <div className="row">
                    <div className="col-xl-4 mb-3">
                        <div className="shop">
                            <div className="shop-img">
                                <img src={card} alt="" />
                            </div>
                            <div className="shop-body">
                                <h3 className="fw-bold mb-3">Laptop<br />Collection</h3>
                                <Link to="/" className="cta-btn text-decoration-none">Shop now <FontAwesomeIcon icon={faArrowCircleRight} className="ms-2" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-3">
                        <div className="shop">
                            <div className="shop-img">
                                <img src={card} alt="" />
                            </div>
                            <div className="shop-body">
                                <h3 className="fw-bold mb-3">Laptop<br />Collection</h3>
                                <Link to="/" className="cta-btn text-decoration-none">Shop now <FontAwesomeIcon icon={faArrowCircleRight} className="ms-2" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-3">
                        <div className="shop">
                            <div className="shop-img">
                                <img src={card} alt="" />
                            </div>
                            <div className="shop-body">
                                <h3 className="fw-bold mb-3">Laptop<br />Collection</h3>
                                <Link to="/" className="cta-btn text-decoration-none">Shop now <FontAwesomeIcon icon={faArrowCircleRight} className="ms-2" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-100">
                <div className="bg-discount d-flex justify-content-center align-items-center flex-column">
                    <div className="d-flex align-items-center">
                        <div className="text-center bg-danger rounded-circle d-flex align-items-center justify-content-center flex-column me-5 text-white" style={{ width: "100px", height: "100px", lineHeight: "1px" }}>
                            <div className="h3 fw-bold">{days}</div>
                            <div className="fs-12 text-uppercase">days</div>
                        </div>
                        <div className="text-center bg-danger rounded-circle d-flex align-items-center justify-content-center flex-column me-5 text-white" style={{ width: "100px", height: "100px", lineHeight: "1px" }}>
                            <div className="h3 fw-bold">{hours}</div>
                            <div className="fs-12 text-uppercase">hours</div>
                        </div>
                        <div className="text-center bg-danger rounded-circle d-flex align-items-center justify-content-center flex-column me-5 text-white" style={{ width: "100px", height: "100px", lineHeight: "1px" }}>
                            <div className="h3 fw-bold">{minutes}</div>
                            <div className="fs-12 text-uppercase">minutes</div>
                        </div>
                        <div className="text-center bg-danger rounded-circle d-flex align-items-center justify-content-center flex-column text-white" style={{ width: "100px", height: "100px", lineHeight: "1px" }}>
                            <div className="h3 fw-bold">{seconds}</div>
                            <div className="fs-12 text-uppercase">seconds</div>
                        </div>
                    </div>
                    <div className="h2 text-uppercase mt-4 fw-bold">
                        hot deal this week
                    </div>
                    <div className="h3 fw-normal mt-3">
                        NEW COLLECTION UP TO 50% OFF
                    </div>
                    <Link to='/' className="btn btn-danger rounded-5 mt-3 fw-black px-5 py-2 text-uppercase">shop now</Link>
                </div>
            </div>

            <div className="container mt-100">
                <div className="row align-items-center">
                    <div className="col-xl-6">
                        <div className="h3">NEW PRODUCTS</div>
                    </div>
                    <div className="col-xl-6">
                        <ul className="nav justify-content-end navbar1">
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-dark fw-black">Laptops</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-dark fw-black">Smartphones</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-dark fw-black">Cameras</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-dark pe-0 fw-black">Accessories</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Splide options={option2} hasTrack={false}>
                    <SplideTrack className='mt-3'>
                        <SplideSlide>
                            <Link to='/' className='text-decoration-none mb-3'>
                                <div className="card mx-3 rounded-0">
                                    <div className='text-center'>
                                        <img src={card} alt="" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                                    </div>
                                    <div className='position-absolute p-2 end-0 text-center mt-2' style={{ zIndex: 10 }}>
                                        <div className='text-white fs-12 fw-black pt-1' style={{ width: "60px", height: "30px", border: "2px solid #D10024" }}>50%</div>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <span className="me-2 fw-black">Category</span>
                                            <span>The product name there</span>
                                        </div>
                                        <div className="d-flex align-items-center fs-12">
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning" />
                                            <span className="text-secondary ms-1 fs-11">(31369)</span>
                                        </div>
                                        <div className="d-flex align-items-center mt-3">
                                            <div className="small text-decoration-line-through text-secondary">999 TMT</div>
                                            <div className="text-danger fw-black ms-2">998 TMT</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SplideSlide>
                    </SplideTrack>
                </Splide>
            </div>

            <div className="bg-new mt-100 d-flex align-items-center py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3">
                            <div className="h1">Trends <br /> 2023</div>
                            <p className="text-secondary small fw-black">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing Donec et.</p>
                        </div>
                        <div className="col-xl-9">
                            <Splide options={option3} hasTrack={false}>
                                <SplideTrack className='mt-3'>
                                    <SplideSlide>
                                        <Link to='/' className='text-decoration-none mb-3 d-flex justify-content-center'>
                                            <div className="card rounded-0" style={{ width: "250px" }}>
                                                <div className='text-center'>
                                                    <img src={card} alt="" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                                                </div>
                                                <div className='position-absolute p-2 end-0 text-center mt-2' style={{ zIndex: 10 }}>
                                                    <div className='text-white fs-12 fw-black pt-1' style={{ width: "60px", height: "30px", border: "2px solid #D10024" }}>50%</div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="card-title">
                                                        <span className="me-2 fw-black">Category</span>
                                                        <span>The product name there</span>
                                                    </div>
                                                    <div className="d-flex align-items-center mt-3">
                                                        <div className="small text-decoration-line-through text-secondary">999 TMT</div>
                                                        <div className="text-danger fw-black ms-2">998 TMT</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </SplideSlide>
                                </SplideTrack>
                            </Splide>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100">
                <div className="row align-items-center">
                    <div className="col-xl-6">
                        <div className="h3">NEW PRODUCTS</div>
                    </div>
                    <div className="col-xl-6">
                        <ul className="nav justify-content-end navbar1">
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-dark fw-black">Laptops</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-dark fw-black">Smartphones</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-dark fw-black">Cameras</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-dark pe-0 fw-black">Accessories</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-3 justify-content-around">
                    <Link to='/' className='col-xl-3 text-decoration-none mb-3'>
                        <div className="card rounded-0" style={{ width: "300px" }}>
                            <div className='text-center'>
                                <img src={card} alt="" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                            </div>
                            <div className='position-absolute p-2 end-0 text-center mt-2' style={{ zIndex: 10 }}>
                                <div className='text-white fs-12 fw-black pt-1' style={{ width: "60px", height: "30px", border: "2px solid #D10024" }}>50%</div>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <span className="me-2 fw-black">Category</span>
                                    <span>The product name there</span>
                                </div>
                                <div className="d-flex align-items-center fs-12">
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning" />
                                    <span className="text-secondary ms-1 fs-11">(31369)</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="small text-decoration-line-through text-secondary">999 TMT</div>
                                    <div className="text-danger fw-black ms-2">998 TMT</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/' className='col-xl-3 text-decoration-none mb-3'>
                        <div className="card rounded-0" style={{ width: "300px" }}>
                            <div className='text-center'>
                                <img src={card} alt="" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                            </div>
                            <div className='position-absolute p-2 end-0 text-center mt-2' style={{ zIndex: 10 }}>
                                <div className='text-white fs-12 fw-black pt-1' style={{ width: "60px", height: "30px", border: "2px solid #D10024" }}>50%</div>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <span className="me-2 fw-black">Category</span>
                                    <span>The product name there</span>
                                </div>
                                <div className="d-flex align-items-center fs-12">
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning" />
                                    <span className="text-secondary ms-1 fs-11">(31369)</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="small text-decoration-line-through text-secondary">999 TMT</div>
                                    <div className="text-danger fw-black ms-2">998 TMT</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/' className='col-xl-3 text-decoration-none mb-3'>
                        <div className="card rounded-0" style={{ width: "300px" }}>
                            <div className='text-center'>
                                <img src={card} alt="" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                            </div>
                            <div className='position-absolute p-2 end-0 text-center mt-2' style={{ zIndex: 10 }}>
                                <div className='text-white fs-12 fw-black pt-1' style={{ width: "60px", height: "30px", border: "2px solid #D10024" }}>50%</div>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <span className="me-2 fw-black">Category</span>
                                    <span>The product name there</span>
                                </div>
                                <div className="d-flex align-items-center fs-12">
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning" />
                                    <span className="text-secondary ms-1 fs-11">(31369)</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="small text-decoration-line-through text-secondary">999 TMT</div>
                                    <div className="text-danger fw-black ms-2">998 TMT</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/' className='col-xl-3 text-decoration-none mb-3'>
                        <div className="card rounded-0" style={{ width: "300px" }}>
                            <div className='text-center'>
                                <img src={card} alt="" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                            </div>
                            <div className='position-absolute p-2 end-0 text-center mt-2' style={{ zIndex: 10 }}>
                                <div className='text-white fs-12 fw-black pt-1' style={{ width: "60px", height: "30px", border: "2px solid #D10024" }}>50%</div>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <span className="me-2 fw-black">Category</span>
                                    <span>The product name there</span>
                                </div>
                                <div className="d-flex align-items-center fs-12">
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning" />
                                    <span className="text-secondary ms-1 fs-11">(31369)</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="small text-decoration-line-through text-secondary">999 TMT</div>
                                    <div className="text-danger fw-black ms-2">998 TMT</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/' className='col-xl-3 text-decoration-none mb-3'>
                        <div className="card rounded-0" style={{ width: "300px" }}>
                            <div className='text-center'>
                                <img src={card} alt="" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                            </div>
                            <div className='position-absolute p-2 end-0 text-center mt-2' style={{ zIndex: 10 }}>
                                <div className='text-white fs-12 fw-black pt-1' style={{ width: "60px", height: "30px", border: "2px solid #D10024" }}>50%</div>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <span className="me-2 fw-black">Category</span>
                                    <span>The product name there</span>
                                </div>
                                <div className="d-flex align-items-center fs-12">
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning" />
                                    <span className="text-secondary ms-1 fs-11">(31369)</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="small text-decoration-line-through text-secondary">999 TMT</div>
                                    <div className="text-danger fw-black ms-2">998 TMT</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/' className='col-xl-3 text-decoration-none mb-3'>
                        <div className="card rounded-0" style={{ width: "300px" }}>
                            <div className='text-center'>
                                <img src={card} alt="" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                            </div>
                            <div className='position-absolute p-2 end-0 text-center mt-2' style={{ zIndex: 10 }}>
                                <div className='text-white fs-12 fw-black pt-1' style={{ width: "60px", height: "30px", border: "2px solid #D10024" }}>50%</div>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <span className="me-2 fw-black">Category</span>
                                    <span>The product name there</span>
                                </div>
                                <div className="d-flex align-items-center fs-12">
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning" />
                                    <span className="text-secondary ms-1 fs-11">(31369)</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="small text-decoration-line-through text-secondary">999 TMT</div>
                                    <div className="text-danger fw-black ms-2">998 TMT</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/' className='col-xl-3 text-decoration-none mb-3'>
                        <div className="card rounded-0" style={{ width: "300px" }}>
                            <div className='text-center'>
                                <img src={card} alt="" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                            </div>
                            <div className='position-absolute p-2 end-0 text-center mt-2' style={{ zIndex: 10 }}>
                                <div className='text-white fs-12 fw-black pt-1' style={{ width: "60px", height: "30px", border: "2px solid #D10024" }}>50%</div>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <span className="me-2 fw-black">Category</span>
                                    <span>The product name there</span>
                                </div>
                                <div className="d-flex align-items-center fs-12">
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning" />
                                    <span className="text-secondary ms-1 fs-11">(31369)</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="small text-decoration-line-through text-secondary">999 TMT</div>
                                    <div className="text-danger fw-black ms-2">998 TMT</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/' className='col-xl-3 text-decoration-none mb-3'>
                        <div className="card rounded-0" style={{ width: "300px" }}>
                            <div className='text-center'>
                                <img src={card} alt="" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                            </div>
                            <div className='position-absolute p-2 end-0 text-center mt-2' style={{ zIndex: 10 }}>
                                <div className='text-white fs-12 fw-black pt-1' style={{ width: "60px", height: "30px", border: "2px solid #D10024" }}>50%</div>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <span className="me-2 fw-black">Category</span>
                                    <span>The product name there</span>
                                </div>
                                <div className="d-flex align-items-center fs-12">
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning" />
                                    <span className="text-secondary ms-1 fs-11">(31369)</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="small text-decoration-line-through text-secondary">999 TMT</div>
                                    <div className="text-danger fw-black ms-2">998 TMT</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home