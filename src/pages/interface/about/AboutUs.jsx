import aboutImg from '../../../assets/cards/about.jpg'
import about1 from '../../../assets/cards/about-1.jpg'

const AboutUs = () => {
    return (
        <>
            <div className='container-fluid px-0 text-center'>
                <div style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${aboutImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom", height: "55vh", backgroundSize: "cover", backgroundAttachment: "fixed" }}></div>
                <div className="card-img-overlay text-white top-50 start-50" style={{ zIndex: "10", transform: "translate(-50%, -40%)" }}>
                    <div className="display-2 fw-bold">Biz Barada</div>
                </div>
            </div>

            <div className="container my-5 py-5">
                <div className="row align-items-center">
                    <div className="col-xl-6 text-center">
                        <img src={about1} alt="" style={{ width: "400px" }} className='rounded-1' />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                        <div className="h6 ls-2 my-3 text-yellow">Biz Barada</div>
                        <div className="h2 mb-4">20 Ýyllyk Tejribe</div>
                        <div className="text-secondary mb-3 w-75">Myhmanhana: Adamlaryň belli bir töleg üçin wagtlaýyn bolup, iýmit zerurlyklaryny kanagatlandyrýan ýeri.</div>
                        <div className="text-secondary mb-3 w-75">Stayaşaýan ýerleri ýa-da tanyşlarynyň öýleri ýa-da howpsuz ýerleri. Soň bolsa ýygy-ýygydan gatnaşyp, söwda edip başladylar.</div>
                    </div>
                </div>
            </div>

            <div className='container-fluid px-0 text-center'>
                <div className="text-white d-flex justify-content-center align-items-center flex-column" style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${aboutImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "55vh", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
                    <div className="small">Web Sahypasy barada düşünje</div>
                    <div className="h2">Web Sahypasyna düşünmedim,<br /> näme etmeli ?</div>
                </div>
            </div>

            <div className="container my-5 pt-5">
                <div className="text-center mb-5">
                    <div className="h6 ls-2 mb-3 text-yellow">Hyzmatlar</div>
                    <div className="h1">Biziň Otelimiz we Otaglarymyz</div>
                </div>

                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-12 mb-5">
                        <div className="position-relative card-about">
                            <img src={about1} alt="About Us" className="img-fluid" />
                            <div className="position-absolute bottom-0 start-0 w-100 footer-rgba text-center">
                                <div className="h5 text-white py-3">Restorant we Bar</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-12 mb-5">
                        <div className="position-relative card-about">
                            <img src={about1} alt="About Us" className="img-fluid" />
                            <div className="position-absolute bottom-0 start-0 w-100 footer-rgba text-center">
                                <div className="h5 text-white py-3">Spa &amp; Fitnes</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-12 mb-5">
                        <div className="position-relative card-about">
                            <img src={about1} alt="About Us" className="img-fluid" />
                            <div className="position-absolute bottom-0 start-0 w-100 footer-rgba text-center">
                                <div className="h5 text-white py-3">Howuzlar</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs