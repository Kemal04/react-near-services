import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import aboutImg from '../../../assets/cards/about.jpg'
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'

const ServiceFilter = () => {

    const [services] = useFetch(`${import.meta.env.VITE_API_FETCH}/home/service`, "services");

    return (
        <>
            <div className='container-fluid px-0 text-center'>
                <div style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${aboutImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom", height: "55vh", backgroundSize: "cover", backgroundAttachment: "fixed" }}></div>
                <div className="card-img-overlay text-white top-50 start-50" style={{ zIndex: "10", transform: "translate(-50%, -40%)" }}>
                    <div className="display-2 fw-bold">Hyzmatlar</div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row justify-content-between">
                    <div className="col-xl-2">
                        <div className='row'>

                            <div className='col-xl-12 mb-3 pb-3 border-bottom'>
                                <div className='mb-3 h5'>Filters</div>
                                <div className="d-flex align-items-center">
                                    <button className='btn btn-white border rounded-0 rounded-start-5 fw-semibold px-3 btn-sm'>$</button>
                                    <button className='btn btn-white border rounded-0 border-start-0 fw-semibold px-3 btn-sm'>$$</button>
                                    <button className='btn btn-white border rounded-0 border-start-0 border-end-0 fw-semibold px-3 btn-sm'>$$$</button>
                                    <button className='btn btn-white border rounded-0 rounded-end-5 fw-semibold px-3 btn-sm'>$$$$</button>
                                </div>
                            </div>

                            <div className='col-xl-12 mb-3 pb-3 border-bottom'>
                                <div className='mb-3 h5'>Suggested</div>
                                <div className="d-flex flex-column justify-content-center">
                                    <div className="d-flex align-items-center"><input id='checkbox1' type="checkbox" className='form-check-input me-2 ms-1 rounded-1 h5' /><label htmlFor="checkbox1"> Restoran</label></div>
                                    <div className="d-flex align-items-center"><input id='checkbox2' type="checkbox" className='form-check-input me-2 ms-1 rounded-1 h5' /><label htmlFor="checkbox2"> Restoran</label></div>
                                    <div className="d-flex align-items-center"><input id='checkbox3' type="checkbox" className='form-check-input me-2 ms-1 rounded-1 h5' /><label htmlFor="checkbox3"> Restoran</label></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="row">
                            {
                                services?.map((service, index) => (
                                    <Link to={`/service/${service.id}`} className="col-xl-12 mb-4 text-dark text-decoration-none" key={index}>
                                        <div className="card rounded-1 border-light bg-white shadow-sm h-100">
                                            <div className="row align-items-center">
                                                <div className="col-xl-5">
                                                    <img src={`https://it.net.tm/yakynynda_api/api/img/service/${service.service_img}`} alt="" style={{ height: "200px", width: "100%", objectFit: "cover" }} />
                                                </div>
                                                <div className='col-xl-7'>
                                                    <div className="card-body position-relative pb-5">
                                                        <div className="text-dark h5" style={{ letterSpacing: "1px" }}>{service.name_tm}</div>
                                                        <div className="d-flex align-items-center mb-2 mt-3" style={{ fontSize: "10px" }}>
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
                                                            <div style={{ fontSize: "14px" }}> <span className='text-yellow fw-semibold ms-2'>4.5</span> (1.4k reviews)</div>
                                                        </div>
                                                        <div className="btn btn-light fw-bold text-secondary btn-sm rounded-1 py-0 mb-3" style={{ fontSize: "12px" }}>{service.subcategory?.name_tm}</div>
                                                        <div className="small">{service.description_tm}</div>
                                                        <div className="position-absolute bottom-0 mb-2">
                                                            <div className="text-decoration-none text-yellow small mt-2 d-inline-block">Dowamyny gör <FontAwesomeIcon icon={faArrowRight} /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceFilter