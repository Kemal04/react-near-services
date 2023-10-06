import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../../../hooks/useFetch"

const ServiceEdit = () => {

    const navigate = useNavigate()
    const { serviceId } = useParams()

    const [service, setService] = useState({
        name_tm: "",
        name_en: "",
        name_ru: "",
        address: "",
        phone_num: "",
        longitude: "",
        latitude: "",
        subcategoryId: "",
        service_img: "",
    })
    const [img, setImg] = useState('')

    const handleChange = (e) => {
        setService((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const uploadPicture = (e) => {
        setImg({
            picturePreview: URL.createObjectURL(e.target.files[0]),
            pictureAsFile: e.target.files[0],
        });
    };

    const [subCategories] = useFetch(`${import.meta.env.VITE_API_FETCH}/subcategory`, "subcategory");

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_FETCH}/service/edit/${serviceId}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((res) => {
            setService(res.data.service)
            setImg(res.data.service.service_img)
        }).catch((res) => {
            toast.error(res.response.data.error)
        })

    }, [navigate, serviceId])

    const handleClick = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('name_tm', service.name_tm)
        formData.append('name_en', service.name_en)
        formData.append('name_ru', service.name_ru)
        formData.append('address', service.address)
        formData.append('phone_num', service.phone_num)
        formData.append('longitude', service.longitude)
        formData.append('latitude', service.latitude)
        formData.append('subcategoryId', service.subcategoryId)
        formData.append('service_img', img.pictureAsFile === undefined ? img : img.pictureAsFile)


        if (!service.name_tm) {
            toast.error("Adyny ýazyň (TM)")
        }
        else if (!service.name_en) {
            toast.error("Adyny ýazyň (EN)")
        }
        else if (!service.name_ru) {
            toast.error("Adyny ýazyň (RU)")
        }
        else if (!service.address) {
            toast.error("Adresi yazyn")
        }
        else if (!service.phone_num) {
            toast.error("Telefon belgi yazyn")
        }
        else if (!service.longitude) {
            toast.error("Longitude ýazyň")
        }
        else if (!service.latitude) {
            toast.error("Latitude ýazyň")
        }
        else if (!service.subcategoryId) {
            toast.error("Sub category saýla")
        }
        else if (!img) {
            toast.error("Suraty saýlaň")
        }
        else {
            await axios.post(`${import.meta.env.VITE_API_FETCH}/service/edit/${serviceId}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    accessToken: localStorage.getItem("accessToken"),
                },
            })
                .then((res) => {
                    toast.success(res.data.success)
                    navigate('/admin/services')
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
                        <div>Service üýgetmek</div>
                    </div>
                </div>
                <div className={`card-body d-flex justify-content-center align-items-center`} style={{ height: "711px" }}>
                    <div className='row justify-content-center'>
                        <div className='col-xl-8'>
                            <form className='row' onSubmit={handleClick}>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                    <label className="form-label fw-bold">Ady (TM)</label>
                                    <input value={service.name_tm} name='name_tm' onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                    <label className="form-label fw-bold">Ady (EN)</label>
                                    <input value={service.name_en} name='name_en' onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                    <label className="form-label fw-bold">Ady (RU)</label>
                                    <input value={service.name_ru} name='name_ru' onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                    <label className="form-label fw-bold">Adres</label>
                                    <input value={service.address} name='address' onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                    <label className="form-label fw-bold">Telefon belgi</label>
                                    <div className="input-group">
                                        <span className="input-group-text">+993</span>
                                        <input value={service.phone_num} name='phone_num' onChange={handleChange} type="number" className="form-control" autoComplete="off" />
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                    <label className="form-label fw-bold">Longitude</label>
                                    <input value={service.longitude} name='longitude' onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                    <label className="form-label fw-bold">Latitude</label>
                                    <input value={service.latitude} name='latitude' onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-6 mb-3">
                                    <label className="form-label fw-bold">Bahasy</label>
                                    <select name='exp_price' onChange={handleChange} className="form-select" required>
                                        <option defaultValue>Bahasy</option>
                                        <option value='Arzan'>$</option>
                                        <option value='Gymmat'>$$</option>
                                        <option value='Lux'>$$$</option>
                                    </select>
                                </div>

                                <div className="col-xl-6 mb-3">
                                    <label className="form-label fw-bold">Sub Category</label>
                                    <select name='subcategoryId' onChange={handleChange} className="form-select" required>
                                        <option defaultValue>{service.subcategory?.name_tm}</option>
                                        {subCategories?.map((data, index) => (
                                            <option key={index} value={data.id}>
                                                {data.name_tm}
                                            </option>
                                        ))}
                                    </select>
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

export default ServiceEdit