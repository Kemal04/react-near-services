import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"

const BannerEdit = () => {

    const navigate = useNavigate()
    const { bannerId } = useParams()

    const [banner, setBanner] = useState({
        name_tm: "",
        name_en: "",
        name_ru: "",
        description_tm: "",
        description_en: "",
        description_ru: "",
        url: "",
        banner_img: "",
    })
    const [img, setImg] = useState('')

    const handleChange = (e) => {
        setBanner((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const uploadPicture = (e) => {
        setImg({
            picturePreview: URL.createObjectURL(e.target.files[0]),
            pictureAsFile: e.target.files[0],
        });
    };

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_FETCH}/banner/edit/${bannerId}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((res) => {
            setBanner(res.data.banner)
            setImg(res.data.banner.banner_img)
        }).catch((res) => {
            toast.error(res.response.data.error)
        })

    }, [navigate, bannerId])

    const handleClick = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('name_tm', banner.name_tm)
        formData.append('name_en', banner.name_en)
        formData.append('name_ru', banner.name_ru)
        formData.append('description_tm', banner.description_tm)
        formData.append('description_en', banner.description_en)
        formData.append('description_ru', banner.description_ru)
        formData.append('url', banner.url)
        formData.append('banner_img', img.pictureAsFile === undefined ? img : img.pictureAsFile)


        if (!banner.name_tm) {
            toast.error("Adyny ýazyň (TM)")
        }
        else if (!banner.name_en) {
            toast.error("Adyny ýazyň (EN)")
        }
        else if (!banner.name_ru) {
            toast.error("Adyny ýazyň (RU)")
        }
        else if (!banner.description_tm) {
            toast.error("Mazmuny ýazyň (TM)")
        }
        else if (!banner.description_en) {
            toast.error("Mazmuny ýazyň (EN)")
        }
        else if (!banner.description_ru) {
            toast.error("Mazmuny ýazyň (RU)")
        }
        else if (!banner.url) {
            toast.error("Url ýazyň")
        }
        else if (!img) {
            toast.error("Suraty saýlaň")
        }
        else {
            await axios.post(`${import.meta.env.VITE_API_FETCH}/banner/edit/${bannerId}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    accessToken: localStorage.getItem("accessToken"),
                },
            })
                .then((res) => {
                    toast.success(res.data.success)
                    navigate('/admin/banner')
                }).catch((res) => {
                    toast.error(res.response.data.error)
                });
        }
    }

    return (
        <>
            <div className='card border-0 shadow my-5'>
                <div className={`card-header p-3`}>
                    <div className='h5'>
                        <div>Banner üýgetmek</div>
                    </div>
                </div>
                <div className={`card-body d-flex justify-content-center align-items-center`} style={{ height: "711px" }}>
                    <div className='row justify-content-center'>
                        <div className='col-xl-8'>
                            <form className='row' onSubmit={handleClick}>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                    <label className="form-label fw-bold">Ady (TM)</label>
                                    <input name='name_tm' value={banner.name_tm} onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                    <label className="form-label fw-bold">Mazmuny (TM)</label>
                                    <input name='description_tm' value={banner.description_tm} onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                    <label className="form-label fw-bold">Ady (EN)</label>
                                    <input name='name_en' value={banner.name_en} onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                    <label className="form-label fw-bold">Mazmuny (EN)</label>
                                    <input name='description_en' value={banner.description_en} onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-5">
                                    <label className="form-label fw-bold">Ady (RU)</label>
                                    <input name='name_ru' value={banner.name_ru} onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-5">
                                    <label className="form-label fw-bold">Mazmuny (RU)</label>
                                    <input name='description_ru' value={banner.description_ru} onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-5">
                                    <label className="form-label fw-bold">Url</label>
                                    <input name='url' value={banner.url} onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-lg-12 mb-3">
                                    <label className="form-label fw-bold">Suraty</label>
                                    <div className="input-group mb-3">
                                        <input name='banner_img' onChange={uploadPicture} type="file" className="form-control rounded-0" autoComplete="off" />
                                    </div>
                                </div>

                                <div className='d-grid mt-3'>
                                    <button type="submit" className={`btn btn-primary`}>Goşmak</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerEdit