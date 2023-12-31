import { faPencil, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${import.meta.env.VITE_API_FETCH}/category`, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                }
            }).then((res) => {
                setCategories(res.data.category)
            })
        }
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_FETCH}/category/delete/${id}`)
            toast.success(data.success)
            const afterDelete = categories.filter((data) => {
                return data.id !== id
            })
            setCategories(afterDelete)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='card border-0 shadow my-5'>
                <div className={`card-header p-3`}>
                    <div className='row align-items-center'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-12'>
                            <Link to="/admin/category/create" className={`h5 d-flex align-items-center text-decoration-none text-dark`}>
                                <div>Categories ( {categories?.length} )</div>
                                <FontAwesomeIcon icon={faPlus} className='ms-2' />
                            </Link>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-3 col-6 d-flex justify-content-end'>
                            <input className="form-control form-control-sm" type="text" placeholder="Gözle..." />
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-3 col-6 d-flex justify-content-end'>
                            <select className={`form-select form-select-sm select-month me-2`}>
                                <option defaultValue>Hemme maglumatlar</option>
                                <option>Täzeler</option>
                                <option>Köneler</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={`card-body p-3`}>
                    <div className='row justify-content-between aling-items-center'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>N</th>
                                    <th>Suraty</th>
                                    <th>Ady</th>
                                    <th>Redaktirlemek</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categories?.map((data, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td><img src={`https://it.net.tm/yakynynda_api/api/img/category/${data.category_img}`} className="img-fluid" alt="" crossOrigin="anonymous" style={{ width: "100px" }} /></td>
                                            <td>{data.name_tm}</td>
                                            <td className='d-flex justify-content-between align-items-center'>
                                                <Link className='btn btn-sm btn-outline-warning mx-3' to={`/admin/category/edit/${data.id}`}><FontAwesomeIcon icon={faPencil} /></Link>
                                                <button className='btn btn-sm btn-outline-danger mx-3' onClick={() => handleDelete(data.id)}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories