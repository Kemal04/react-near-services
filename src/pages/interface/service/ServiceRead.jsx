import { Link, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowUpFromBracket, faBookmark, faCalendarAlt, faCameraAlt, faSearch, faStar, faStarHalfAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import userImg from '../../../assets/user/kemal.jpg'
import useFetch from "../../../hooks/useFetch"
import { Fragment, useState, useContext, useEffect } from "react"
import axios from "axios"
import moment from "moment/moment"
import toast from "react-hot-toast"
import { AuthContext } from "../../../context/AuthContext"
import { Splide, SplideTrack } from "@splidejs/react-splide"

const ServiceRead = () => {

    const option2 = {
        type: 'loop',
        perPage: 5,
        focus: 0,
        omitEnd: true,
        perMove: 1,
        pagination: false,
        arrows: true,
        breakpoints:
        {
            991: { perPage: 3, gap: '1.5rem', },
            768: { perPage: 2, gap: '1.5rem', },
            575: { perPage: 2, gap: '1rem', },
        }
    };

    const { authState } = useContext(AuthContext);

    const { serviceId } = useParams()

    const [service] = useFetch(`${import.meta.env.VITE_API_FETCH}/home/service/${serviceId}`, "service");

    const [services] = useFetch(`${import.meta.env.VITE_API_FETCH}/home/service`, "services");

    //REVIEWS API
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${import.meta.env.VITE_API_FETCH}/home/review/${serviceId}`)
                .then((res) => {
                    setReviews(res.data.review)
                })
        }
        fetchData()
    }, [serviceId])

    //REVIEW CREATE API
    const [star, setStar] = useState(0)
    const [comment, setComment] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { stars: star, comment: comment, serviceId: serviceId }

        if (!star) {
            toast.error("Ýyldyz bermediňiz")
        }
        else if (!comment) {
            toast.error("Teswiriňi ýazyň")
        }
        else if (!authState.id) {
            toast.error("Login boluň")
        }

        await axios.post(`${import.meta.env.VITE_API_FETCH}/review/create`, data, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((res) => {
            toast.success(res.data.success);
            setReviews([...reviews, data])
        }).catch((res) => {
            toast.error(res.data.error.message);
        })
        setStar(0)
        setComment('')
    }

    //REVIEW DELETE API
    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_FETCH}/review/delete/${id}`, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            })
            toast.success(data.success)
            const afterDelete = reviews.filter((data) => {
                return data.id !== id
            })
            setReviews(afterDelete)
        } catch (error) {
            console.log(error);
        }
    }

    //REVIEW SUM
    const [reviewSum, setReviewSum] = useState(0)

    useEffect(() => {
        const sum = reviews?.reduce((accumulator, value) => {
            return accumulator + value.stars
        }, 0);

        setReviewSum(sum / reviews?.length)
    }, [reviews])

    //FILTER REVIEW
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState('');

    useEffect(() => {
        setFilteredData(reviews)
    }, [reviews])

    const handleFilter = (e) => {
        const searchWord = e.target.value;

        setWordEntered(searchWord);

        const newFilter = reviews.filter((value) => {
            return value.comment.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord == '') {
            setFilteredData(reviews);
        } else {
            setFilteredData(newFilter);
        }
    };

    return (
        <>
            {
                service?.map((service, index) => (
                    <Fragment key={index}>
                        <div className='container-fluid px-0 position-relative'>
                            <div style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${`https://it.net.tm/yakynynda_api/api/img/service/${service.service_img}`})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "65vh", width: "100%", backgroundSize: "cover" }}></div>

                            <div className="position-absolute bottom-0 text-white pb-5" style={{ zIndex: "10", left: "17%", width: "67%" }}>
                                <div className="display-4 fw-bold text-uppercase">{service.name_tm}</div>
                                <div className="d-flex align-items-center my-3">
                                    <div className="d-flex align-items-center me-3" style={{ fontSize: "10px" }}>
                                        {
                                            Math.floor(reviewSum) === 5 &&
                                            <>
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                            </>
                                        }
                                        {
                                            Math.floor(reviewSum) === 4 &&
                                            <>
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                            </>
                                        }
                                        {
                                            Math.floor(reviewSum) === 3 &&
                                            <>
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                            </>
                                        }
                                        {
                                            Math.floor(reviewSum) === 2 &&
                                            <>
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                            </>
                                        }
                                        {
                                            Math.floor(reviewSum) === 1 &&
                                            <>
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                            </>
                                        }
                                    </div>
                                    <small><span className="text-yellow fw-semibold">
                                        {!reviewSum ? '0' : reviewSum}
                                    </span> ({reviews?.length} teswir)</small>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <span className="fw-semibold">{!service.business_acc ? "Eyesiz" : "Eyeli"}</span>
                                        <span className="mx-3" style={{ display: "inline-block", width: "7px", height: "7px", marginBottom: "3px", backgroundColor: "white", borderRadius: "50%" }}></span>
                                        <span className="fw-semibold">{service.exp_price}</span>
                                        <span className="mx-3" style={{ display: "inline-block", width: "7px", height: "7px", marginBottom: "3px", backgroundColor: "white", borderRadius: "50%" }}></span>
                                        <span className="fw-semibold text-capitalize">{service.subcategory?.name_tm}</span>
                                    </div>
                                    <button className="btn btn-outline-light rounded-1">Suratlary gör</button>
                                </div>
                            </div>
                        </div>

                        <div className="container mt-5">
                            <div className="d-flex">
                                <button className="btn btn-yellow px-4 me-2 rounded-1 btn-sm"><FontAwesomeIcon icon={faStar} /> Teswir ýaz</button>
                                <button className="btn btn-light px-4 me-2 border rounded-1 btn-sm"><FontAwesomeIcon icon={faCameraAlt} /> Surat gör</button>
                                <button className="btn btn-light px-4 me-2 border rounded-1 btn-sm"><FontAwesomeIcon icon={faArrowUpFromBracket} /> Paýlaş</button>
                                <button className="btn btn-light px-4 me-2 border rounded-1 btn-sm"><FontAwesomeIcon icon={faBookmark} /> Ýatda sakla</button>
                            </div>
                        </div>

                        <div className="container">
                            <div className="text-start h4 mt-5 mb-4 border-top pt-4">
                                Ýerleşýän ýeri & sagat
                            </div>
                            <iframe src={`//maps.google.com/maps?q=${service.longitude},${service.latitude}&z=15&output=embed`} style={{ width: "400px", height: "300px" }} title="map" allowFullScreen="" loading="lazy" className="border border-1" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            <div className="mt-2 fw-semibold">
                                <b>Adresi: </b>{service.address}
                            </div>
                        </div>

                        <div className="container">
                            <div className="text-start h4 mt-5 mb-4 border-top pt-4">
                                Hyzmatlar
                            </div>
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="d-flex align-items-center mb-3">
                                        <FontAwesomeIcon icon={faCalendarAlt} />
                                        <div className="ms-2">Rezervasyon</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="text-start h4 mt-5 mb-4 border-top pt-4">
                                Teswirler
                            </div>

                            <div className="row align-items-center">
                                <div className="col-xl-4">
                                    <div className="fw-bold">Umumy Baha</div>
                                    <div className="d-flex align-items-center my-2" style={{ fontSize: "21px" }}>
                                        {
                                            Math.floor(reviewSum) === 5 &&
                                            <>
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                            </>
                                        }
                                        {
                                            Math.floor(reviewSum) === 4 &&
                                            <>
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                            </>
                                        }
                                        {
                                            Math.floor(reviewSum) === 3 &&
                                            <>
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                            </>
                                        }
                                        {
                                            Math.floor(reviewSum) === 2 &&
                                            <>
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                            </>
                                        }
                                        {
                                            Math.floor(reviewSum) === 1 &&
                                            <>
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                            </>
                                        }
                                    </div>
                                    <div className="small text-secondary">{reviews?.length} teswir</div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="progress mb-3">
                                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "100%", backgroundColor: "#f01a0b" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">5 ýyldyz</div>
                                    </div>
                                    <div className="progress mb-3">
                                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "75%", backgroundColor: "rgb(233, 60, 17)" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">4 ýyldyz</div>
                                    </div>
                                    <div className="progress mb-3">
                                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "30%", backgroundColor: "#f0670b" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">3 ýyldyz</div>
                                    </div>
                                    <div className="progress mb-3">
                                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "10%", backgroundColor: "#f0940b" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">2 ýyldyz</div>
                                    </div>
                                    <div className="progress mb-3">
                                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "5%", backgroundColor: "#f0b90b" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">1 ýyldyz</div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-4 justify-content-between">
                                <div className="col-xl-6">
                                    <div className="d-flex align-items-center">
                                        <select className="form-select rounded-5 me-4 py-1 fw-semibold">
                                            <option defaultValue>Sazlamak</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <select className="form-select rounded-5 me-4 py-1 fw-semibold">
                                            <option defaultValue>Dil</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <select className="form-select rounded-5 me-4 py-1 fw-semibold">
                                            <option defaultValue>Reýting</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="input-group">
                                        <input value={wordEntered} onChange={handleFilter} type="text" className="form-control ps-4 rounded-start-1" style={{ width: "100px" }} placeholder="Gözle" />
                                        <button className="btn btn-yellow px-3 fw-black rounded-end-1" type="button"><FontAwesomeIcon icon={faSearch} /></button>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-4">
                                {
                                    filteredData?.map((review, index) => (
                                        <div className="col-xl-12 mb-5" key={index}>
                                            <div className="d-flex align-items-center">
                                                <img src={userImg} alt="" className="rounded-1 me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                                <small>
                                                    <b>{review.user?.name}</b>
                                                    <div>{review.user?.role === 'User' ? 'Ulanyjy' : ''}</div>
                                                </small>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex align-items-center my-3 me-1" style={{ fontSize: "8px" }}>
                                                    {
                                                        review.stars === 5 &&
                                                        <>
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                        </>
                                                    }
                                                    {
                                                        review.stars === 4 &&
                                                        <>
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                        </>
                                                    }
                                                    {
                                                        review.stars === 3 &&
                                                        <>
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                        </>
                                                    }
                                                    {
                                                        review.stars === 2 &&
                                                        <>
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                        </>
                                                    }
                                                    {
                                                        review.stars === 1 &&
                                                        <>
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-yellow me-1 p-1 rounded-1" />
                                                        </>
                                                    }
                                                </div>
                                                <span style={{ fontSize: "12px" }} className="text-secondary">{moment(review.createdAt).format('DD.MM.YYYY')}</span>
                                            </div>
                                            <div className="w-50 fst-italic" style={{ textAlign: "justify" }}>
                                                {review.comment}
                                            </div>
                                            <div className="d-flex align-items-center mt-2">
                                                <button className="btn btn-light btn-sm border me-3">
                                                    🙂 Ulanyşly
                                                </button>
                                                <button className="btn btn-light btn-sm border me-3">
                                                    😂 Gülkünç
                                                </button>
                                                <button className="btn btn-light btn-sm border me-3">
                                                    😎 Gaty gowy
                                                </button>
                                                {
                                                    authState.role === "Admin" &&
                                                    <button className="btn btn-danger btn-sm border" onClick={() => handleDelete(review.id)}>
                                                        <FontAwesomeIcon icon={faTrashAlt} />
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="text-start h4 mt-5 mb-4 border-top pt-4">
                                Teswir ýaz
                            </div>
                            <form className="row">
                                <div className="col-xl-6">
                                    <div className="row">
                                        <div className="d-flex align-items-center my-3 me-1" style={{ fontSize: "20px" }}>
                                            <FontAwesomeIcon onClick={() => setStar(1)} icon={faStar} className="text-yellow me-1 p-1 rounded-1" style={{ cursor: "pointer" }} />
                                            <FontAwesomeIcon onClick={() => setStar(2)} icon={faStar} className="text-yellow me-1 p-1 rounded-1" style={{ cursor: "pointer" }} />
                                            <FontAwesomeIcon onClick={() => setStar(3)} icon={faStar} className="text-yellow me-1 p-1 rounded-1" style={{ cursor: "pointer" }} />
                                            <FontAwesomeIcon onClick={() => setStar(4)} icon={faStar} className="text-yellow me-1 p-1 rounded-1" style={{ cursor: "pointer" }} />
                                            <FontAwesomeIcon onClick={() => setStar(5)} icon={faStar} className="text-yellow me-1 p-1 rounded-1" style={{ cursor: "pointer" }} />
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-4">
                                            <textarea value={comment} onChange={(e) => setComment(e.target.value)} name="comment" className="form-control rounded-1" rows="6" placeholder="Mazmuny"></textarea>
                                        </div>
                                        <div className="col-xl-12 mb-4 text-center d-grid">
                                            <button onClick={handleSubmit} className="btn btn-yellow rounded-1">Ugrat</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Fragment>
                ))
            }

            <div className="container mt-5">
                <div className="h4">
                    Siziň üçin hyzmatlar
                </div>

                <Splide options={option2} hasTrack={false}>
                    <SplideTrack className='mt-3'>
                        {
                            services?.map((service, index) => (
                                <div className="card rounded-1 border-light bg-white shadow-sm h-100 mb-4 me-3" key={index} >
                                    <div className="d-flex align-items-center p-3">
                                        <img src={`https://it.net.tm/yakynynda_api/api/img/service/${service.service_img}`} alt="" className="rounded-circle me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                        <small>
                                            <b>Eýesiz</b>
                                            <div className="text-capitalize">{service.subcategory?.name_tm}</div>
                                        </small>
                                    </div>
                                    <img src={`https://it.net.tm/yakynynda_api/api/img/service/${service.service_img}`} alt="" style={{ height: "200px", width: "100%", objectFit: "cover" }} />
                                    <div className="card-body position-relative pb-5">
                                        <div className="text-dark h5" style={{ letterSpacing: "1px" }}>{service.name_tm}</div>
                                        <div className="d-flex align-items-center mb-2 mt-3" style={{ fontSize: "10px" }}>
                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                            <FontAwesomeIcon icon={faStarHalfAlt} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                        </div>
                                        <div className="small">{service.description}</div>
                                        <div className="position-absolute bottom-0 mb-2">
                                            <Link to={`/service/${service.id}`} className="text-decoration-none text-yellow small mt-2 d-inline-block">Dowamyny gör <FontAwesomeIcon icon={faArrowRight} /></Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </SplideTrack>
                </Splide>
            </div>
        </>
    )
}

export default ServiceRead