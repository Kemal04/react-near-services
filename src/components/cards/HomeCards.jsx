import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import useFetch from '../../hooks/useFetch'

const HomeCards = ({ max }) => {

    const [services] = useFetch(`${import.meta.env.VITE_API_FETCH}/home/service`, "services");

    return (
        <>
            {
                services?.slice(0, max).map((service, index) => (
                    <div className="col-xl-3 mb-4" key={index}>
                        <div className="card rounded-1 border-light bg-white shadow-sm h-100">
                            <div className="d-flex align-items-center p-3">
                                <img src={`http://localhost:3001/api/img/service/${service.service_img}`} alt="" className="rounded-circle me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                <small>
                                    <b>Eýesiz</b>
                                    <div className="text-capitalize">{service.subcategory?.name_tm}</div>
                                </small>
                            </div>
                            <img src={`http://localhost:3001/api/img/service/${service.service_img}`} alt="" style={{ height: "200px", width: "100%", objectFit: "cover" }} />
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
                    </div>
                ))
            }
        </>
    )
}

export default HomeCards