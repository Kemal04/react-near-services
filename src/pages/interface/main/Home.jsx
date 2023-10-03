import { Link } from "react-router-dom";
import { Banner } from "../../../components"
import HomeCards from "../../../components/cards/HomeCards"
import useFetch from "../../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {

    const [categories] = useFetch(`${import.meta.env.VITE_API_FETCH}/home/category`, "category");

    return (
        <>
            <Banner />

            <div className="text-center h3 my-5">
                <Link to='/services' className="text-decoration-none text-dark" >
                    Recent Activity
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
                Categories
            </div>

            <div className="container">
                <div className="row justify-content-between">
                    {
                        categories?.map((category, index) => (
                            <div className="col-xl-auto mb-3 text-decoration-none text-dark" key={index}>
                                <div className="border rounded-1 p-3 d-flex flex-column align-items-center" style={{ width: "240px" }}>
                                    <img src={`http://localhost:3001/api/img/category/${category.category_img}`} alt="" style={{ width: "80px" }} />
                                    <div className="fw-semibold mt-3">{category.name_tm}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home