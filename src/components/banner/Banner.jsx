import { Link } from "react-router-dom";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import banner from '../../assets/banner/home-banner.webp'

const Banner = () => {

    const options = {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        pagination: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 1000,
    };

    return (
        <div className='container-fluid p-0 text-center'>
            <Splide options={options} hasTrack={false}>
                <SplideTrack className='row g-0'>
                    <SplideSlide className='col-lg-12 p-0' >
                        <Link target='_blank' to={`/`}>
                            <img src={banner} alt="banner" className='img-fluid w-100' style={{ height: "80vh", objectFit:"cover" }} />
                        </Link>
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </div >
    )
}

export default Banner