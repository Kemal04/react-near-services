import { Link } from "react-router-dom";
import { Banner } from "../../../components";
import HomeCards from "../../../components/cards/HomeCards";

const Services = () => {

    return (
        <>
            <Banner />

            <div className="text-center h2 my-5">
                <Link to='/services' className="text-decoration-none text-dark" >
                    Serwisler
                </Link>
            </div>

            <div className="container">
                <div className="row">
                    <HomeCards />
                </div>
            </div>
        </>
    )
}

export default Services