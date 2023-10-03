import { Link } from "react-router-dom";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import useFetch from "../../hooks/useFetch";

const Banner = () => {

    const options = {
        type: 'fade',
        rewind: true,
        perPage: 1,
        perMove: 1,
        pagination: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 1000,
    };

    const [banners] = useFetch(`${import.meta.env.VITE_API_FETCH}/banner`, "banner");

    return (
        <>
            {/* <img src={banner} alt="banner" className='img-fluid w-100' style={{ height: "95vh", objectFit: "cover" }} /> */}
            <div className='container-fluid px-0 text-center'>
                <Splide options={options} hasTrack={false}>
                    <SplideTrack>
                        {
                            banners?.map((banner, index) => (
                                <SplideSlide key={index}>
                                    <div style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${`http://localhost:3001/api/img/banner/${banner.banner_img}`})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "85vh", backgroundSize: "cover" }}></div>
                                    <div className="card-img-overlay text-white top-50 start-50" style={{ zIndex: "10", transform: "translate(-50%, -20%)" }}>
                                        <div className="display-2 fw-bold">{banner.name_tm}</div>
                                        <p className="fw-semibold mt-4">
                                            {banner.description_tm}
                                        </p>
                                        <Link target="_blank" to={banner.url} className="btn btn-yellow rounded-1 px-5 fw-semibold">Ýör gideýli</Link>
                                    </div>
                                </SplideSlide>
                            ))
                        }
                    </SplideTrack>
                </Splide>
            </div>
        </>
    )
}

export default Banner