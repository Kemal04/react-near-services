import { Link } from "react-router-dom";
import { Banner } from "../../../components"
import HomeCards from "../../../components/cards/HomeCards"
import useFetch from "../../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {

    const [subCategories] = useFetch(`${import.meta.env.VITE_API_FETCH}/home/subcategory`, "subcategory");

    return (
        <>
            <Banner />

            <div className="text-center h3 my-5">
                <Link to='/services' className="text-decoration-none text-dark" >
                    Meşhur hyzmatlar
                </Link>
            </div>

            <div className="container">
                <div className="row">
                    <HomeCards max={8} />
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <Link to='/services' className="btn btn-yellow rounded-1 btn-sm">
                        Hemmesini gör <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
            </div>

            <div className="text-center h3 my-5">
                Kategoriýalar
            </div>

            <div className="container">
                <div className="row justify-content-between">
                    {
                        subCategories?.map((subCategory, index) => (
                            <div className="col-xl-auto mb-3" key={index}>
                                <Link to={`/sub-category/${subCategory.id}`} className="border rounded-1 p-3 d-flex flex-column align-items-center text-decoration-none text-dark" style={{ width: "240px" }}>
                                    <img src={`https://it.net.tm/yakynynda_api/api/img/subcategory/${subCategory.subcategory_img}`} alt="" style={{ width: "80px" }} />
                                    <div className="fw-semibold mt-3">{subCategory.name_tm}</div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home