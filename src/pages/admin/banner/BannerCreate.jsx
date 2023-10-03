import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const BannerCreate = () => {

    const navigate = useNavigate()

    const [banner, setBanner] = useState({
        name_tm: "",
        name_en: "",
        name_ru: "",
        description_tm: "",
        description_en: "",
        description_ru: "",
        url: ""
    })
    const [img, setImg] = useState('')

    const handleChange = (e) => {
        setBanner((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

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
        formData.append('banner_img', img)

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
            await axios.post(`${import.meta.env.VITE_API_FETCH}/banner/create`, formData, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            })
                .then((res) => {
                    toast.success(res.data.success)
                    navigate('/admin/banners')
                }).catch((res) => {
                    console.log(res.response.data.error.errors)
                });
        }
    }

    return (
        <>
            <div className='card border-0 shadow my-5'>
                <div className={`card-header p-3`}>
                    <div className='h5'>
                        <div>Banner Goşmak</div>
                    </div>
                </div>
                <div className={`card-body d-flex justify-content-center align-items-center`} style={{ height: "711px" }}>
                    <div className='row justify-content-center'>
                        <div className='col-xl-8'>
                            <form className='row' onSubmit={handleClick}>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                    <label className="form-label fw-bold">Ady (TM)</label>
                                    <input name='name_tm' onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                    <label className="form-label fw-bold">Description (TM)</label>
                                    <input name='description_tm' onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                    <label className="form-label fw-bold">Ady (EN)</label>
                                    <input name='name_en' onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                    <label className="form-label fw-bold">Description (EN)</label>
                                    <input name='description_en' onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                    <label className="form-label fw-bold">Ady (RU)</label>
                                    <input name='name_ru' onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                    <label className="form-label fw-bold">Description (RU)</label>
                                    <input name='description_ru' onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                    <label className="form-label fw-bold">URL</label>
                                    <input name='url' onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-lg-12 mb-3">
                                    <label className="form-label fw-bold">Suraty</label>
                                    <div className="input-group mb-3">
                                        <input name='service_img' onChange={(e) => setImg(e.target.files[0])} type="file" className="form-control rounded-0" autoComplete="off" />
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

export default BannerCreate