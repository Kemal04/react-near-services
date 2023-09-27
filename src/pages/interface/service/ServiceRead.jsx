import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpFromBracket, faBookmark, faCalendarAlt, faCameraAlt, faSearch, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons"
import userImg from '../../../assets/user/kemal.jpg'
import useFetch from "../../../hooks/useFetch"
import { Fragment } from "react"

const ServiceRead = () => {

    const { serviceId } = useParams()

    const [services] = useFetch(`${import.meta.env.VITE_API_FETCH}/home/service/${serviceId}`, "service");

    const [reviews] = useFetch(`${import.meta.env.VITE_API_FETCH}/reviews`, "reviews");

    return (
        <>
            {
                services?.map((service, index) => (
                    <Fragment key={index}>
                        <div className='container-fluid px-0 position-relative'>
                            <div style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${`http://localhost:3001/api/img/service/${service.service_img}`})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "65vh", width: "100%", backgroundSize: "cover" }}></div>

                            <div className="position-absolute bottom-0 text-white pb-5" style={{ zIndex: "10", left: "17%", width: "67%" }}>
                                <div className="display-4 fw-bold text-uppercase">{service.name_tm}</div>
                                <div className="d-flex align-items-center my-3">
                                    <div className="d-flex align-items-center me-3" style={{ fontSize: "10px" }}>
                                        <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                        <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                        <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                        <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                        <FontAwesomeIcon icon={faStarHalfAlt} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                    </div>
                                    <small><span className="text-yellow fw-semibold">4.3</span> (39 comment)</small>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <span className="fw-semibold">Eyesiz</span>
                                        <span className="mx-3" style={{ display: "inline-block", width: "7px", height: "7px", marginBottom: "3px", backgroundColor: "white", borderRadius: "50%" }}></span>
                                        <span className="fw-semibold">$$$</span>
                                        <span className="mx-3" style={{ display: "inline-block", width: "7px", height: "7px", marginBottom: "3px", backgroundColor: "white", borderRadius: "50%" }}></span>
                                        <span className="fw-semibold text-capitalize">{service.subcategory?.name_tm}</span>
                                    </div>
                                    <button className="btn btn-outline-light rounded-1">Suratlary gör</button>
                                </div>
                            </div>
                        </div>

                        <div className="container mt-5">
                            <div className="d-flex">
                                <button className="btn btn-yellow px-4 me-2 rounded-1 btn-sm"><FontAwesomeIcon icon={faStar} /> Comment ýaz</button>
                                <button className="btn btn-light px-4 me-2 border rounded-1 btn-sm"><FontAwesomeIcon icon={faCameraAlt} /> Surat gör</button>
                                <button className="btn btn-light px-4 me-2 border rounded-1 btn-sm"><FontAwesomeIcon icon={faArrowUpFromBracket} /> Paýlaş</button>
                                <button className="btn btn-light px-4 me-2 border rounded-1 btn-sm"><FontAwesomeIcon icon={faBookmark} /> Ýatda sakla</button>
                            </div>
                        </div>

                        <div className="container">
                            <div className="text-start h4 mt-5 mb-4 border-top pt-4">
                                Konum & sagat
                            </div>
                            <iframe src={`//maps.google.com/maps?q=${service.longitude},${service.latitude}&z=15&output=embed`} style={{ width: "400px", height: "300px" }} title="map" allowFullScreen="" loading="lazy" className="border border-1" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            <div className="mt-2 fw-semibold">
                                <b>Adresi: </b>{service.address}
                            </div>
                        </div>

                        <div className="container">
                            <div className="text-start h4 mt-5 mb-4 border-top pt-4">
                                Services
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
                                Yorumlar
                            </div>

                            <div className="row align-items-center">
                                <div className="col-xl-4">
                                    <div className="fw-bold">Overall rating</div>
                                    <div className="d-flex align-items-center my-2" style={{ fontSize: "21px" }}>
                                        <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                        <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                        <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                        <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                        <FontAwesomeIcon icon={faStarHalfAlt} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                    </div>
                                    <div className="small text-secondary">30 yorum</div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="progress mb-3">
                                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "100%", backgroundColor: "#f01a0b" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">5 Stars</div>
                                    </div>
                                    <div className="progress mb-3">
                                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "75%", backgroundColor: "rgb(233, 60, 17)" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">4 Stars</div>
                                    </div>
                                    <div className="progress mb-3">
                                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "30%", backgroundColor: "#f0670b" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">3 Stars</div>
                                    </div>
                                    <div className="progress mb-3">
                                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "10%", backgroundColor: "#f0940b" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">2 Stars</div>
                                    </div>
                                    <div className="progress mb-3">
                                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "5%", backgroundColor: "#f0b90b" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">1 Stars</div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-4 justify-content-between">
                                <div className="col-xl-6">
                                    <div className="d-flex align-items-center">
                                        <select className="form-select rounded-5 me-4 py-1 fw-semibold">
                                            <option defaultValue>Sort</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <select className="form-select rounded-5 me-4 py-1 fw-semibold">
                                            <option defaultValue>Language</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <select className="form-select rounded-5 me-4 py-1 fw-semibold">
                                            <option defaultValue>Rating</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="input-group">
                                        <input type="text" className="form-control ps-4 rounded-start-1" style={{ width: "100px" }} placeholder="Search here" />
                                        <button className="btn btn-yellow px-3 fw-black rounded-end-1" type="button"><FontAwesomeIcon icon={faSearch} /></button>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-4">
                                {
                                    reviews?.map((review, index) => (
                                        <div className="col-xl-12 mb-3" key={index}>
                                            <div className="d-flex align-items-center">
                                                <img src={userImg} alt="" className="rounded-1 me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                                <small>
                                                    <b>{review.name}</b>
                                                    <div>{review.email}</div>
                                                </small>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex align-items-center my-3 me-1" style={{ fontSize: "8px" }}>
                                                    <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                    <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                    <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                    <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                    <FontAwesomeIcon icon={faStarHalfAlt} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                </div>
                                                <span style={{ fontSize: "12px" }} className="text-secondary">{review.createdAt}</span>
                                            </div>
                                            <div className="w-50 fst-italic" style={{ textAlign: "justify" }}>
                                                {review.comment}
                                            </div>
                                            <div className="d-flex align-items-center mt-2">
                                                <button className="btn btn-light btn-sm border me-3">
                                                    🙂 Useful
                                                </button>
                                                <button className="btn btn-light btn-sm border me-3">
                                                    😂 Funny
                                                </button>
                                                <button className="btn btn-light btn-sm border">
                                                    😎 Cool
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="text-start h4 mt-5 mb-4 border-top pt-4">
                                Yorum yaz
                            </div>
                            <form className="row">
                                <div className="col-xl-6">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4">
                                            <input name="name" type="text" className="form-control rounded-1" placeholder="Ady" autoComplete="off" />
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4">
                                            <input name="email" type="email" className="form-control rounded-1" placeholder="E-mail adresi" autoComplete="off" />
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-4">
                                            <textarea name="comment" className="form-control rounded-1" rows="6" placeholder="Mazmuny"></textarea>
                                        </div>
                                        <div className="col-xl-12 mb-4 text-center d-grid">
                                            <button className="btn btn-yellow rounded-1">Ugrat</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Fragment>
                ))
            }
        </>
    )
}

export default ServiceRead