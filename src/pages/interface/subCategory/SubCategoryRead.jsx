import { Link, useParams } from "react-router-dom"
import aboutImg from '../../../assets/cards/about.jpg'
import useFetch from "../../../hooks/useFetch";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubCategoryRead = () => {

    const { subId } = useParams()

    const [services] = useFetch(`${import.meta.env.VITE_API_FETCH}/home/subcategory/${subId}`, "services");

    return (
        <>
            <div className='container-fluid px-0 text-center'>
                <div style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${aboutImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom", height: "55vh", backgroundSize: "cover", backgroundAttachment: "fixed" }}></div>
                <div className="card-img-overlay text-white top-50 start-50" style={{ zIndex: "10", transform: "translate(-50%, -40%)" }}>
                    <div className="display-2 fw-bold">Hyzmatlar</div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    {
                        services?.map((service, index) => (
                            <div className="col-xl-3 mb-4" key={index}>
                                <div className="card rounded-1 border-light bg-white shadow-sm h-100">
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
                                            <FontAwesomeIcon icon={faStar} className="bg-yellow text-white me-1 p-1 rounded-1" />
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
                </div>
            </div>

        </>
    )
}

export default SubCategoryRead