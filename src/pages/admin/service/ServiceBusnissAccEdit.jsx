import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../../../hooks/useFetch"

const ServiceBusnissAccEdit = () => {

    const navigate = useNavigate()
    const { serviceId } = useParams()

    const [service, setService] = useState({
        business_acc: "",
        userId: "",
    })

console.log(service);

    const handleChange = (e) => {
        setService((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const [users] = useFetch(`${import.meta.env.VITE_API_FETCH}/service/edit/business/${serviceId}`, "users");

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_FETCH}/service/edit/business/${serviceId}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((res) => {
            setService(res.data.service)
        }).catch((res) => {
            toast.error(res.response.data.error)
        })

    }, [navigate, serviceId])

    const handleClick = async (e) => {
        e.preventDefault()

        if (!service.business_acc) {
            toast.error("business_acc ýazyň")
        }
        else if (!service.userId) {
            toast.error("userId ýazyň")
        }
        else {
            await axios.post(`${import.meta.env.VITE_API_FETCH}/service/edit/business/${serviceId}`, service, {
                headers: {
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
                    <form className='row' onSubmit={handleClick}>
                        <div className="col-xl-12 mb-3">
                            <label className="form-label fw-bold">Biznes hasap</label>
                            <select name='business_acc' onChange={handleChange} className="form-select" required>
                                <option defaultValue>Sayla</option>
                                <option value='1'>Eyeli</option>
                                <option value='0'>Eyesiz</option>
                            </select>
                        </div>

                        <div className="col-xl-12 mb-3">
                            <label className="form-label fw-bold">Ulanyjylar</label>
                            <select name='userId' onChange={handleChange} className="form-select" required>
                                <option defaultValue>{service.users?.name === undefined ? "Ulanyjy gosulmadyk" : service.users?.name}</option>
                                {users?.map((data, index) => (
                                    <option key={index} value={data.id}>
                                        {data.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='d-grid mt-3'>
                            <button type="submit" className={`btn btn-primary`}>Goşmak</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ServiceBusnissAccEdit