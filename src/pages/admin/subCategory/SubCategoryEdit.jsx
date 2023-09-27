import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../../../hooks/useFetch"

const SubCategoryEdit = () => {

    const navigate = useNavigate()
    const { subId } = useParams()

    const [subCategory, setCategory] = useState({
        name_tm: "",
        name_en: "",
        name_ru: "",
        categoryId: "",
        subcategory_img: "",
    })
    const [img, setImg] = useState('')


    const handleChange = (e) => {
        setCategory((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const uploadPicture = (e) => {
        setImg({
            picturePreview: URL.createObjectURL(e.target.files[0]),
            pictureAsFile: e.target.files[0],
        });
    };

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_FETCH}/subcategory/edit/${subId}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((res) => {
            setCategory(res.data.subcategory)
            setImg(res.data.subcategory.subcategory_img)
        }).catch((res) => {
            toast.error(res.response.data.error)
        })

    }, [navigate, subId])

    const [categories] = useFetch(`${import.meta.env.VITE_API_FETCH}/category`, "category");

    const handleClick = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('name_tm', subCategory.name_tm)
        formData.append('name_en', subCategory.name_en)
        formData.append('name_ru', subCategory.name_ru)
        formData.append('categoryId', subCategory.categoryId)
        formData.append('category_img', img.pictureAsFile === undefined ? img : img.pictureAsFile)

        if (!subCategory.name_tm) {
            toast.error("Adyny ýazyň (TM)")
        }
        else if (!subCategory.name_en) {
            toast.error("Adyny ýazyň (EN)")
        }
        else if (!subCategory.name_ru) {
            toast.error("Adyny ýazyň (RU)")
        }
        else if (!subCategory.categoryId) {
            toast.error("Category saýla")
        }
        else if (!img) {
            toast.error("Suraty saýlaň")
        }
        else {
            await axios.post(`${import.meta.env.VITE_API_FETCH}/subcategory/edit/${subId}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    accessToken: localStorage.getItem("accessToken"),
                },
            })
                .then((res) => {
                    toast.success(res.data.success)
                    navigate('/admin/sub-categories')
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
                        <div>Sub category üýgetmek</div>
                    </div>
                </div>
                <div className={`card-body d-flex justify-content-center align-items-center`} style={{ height: "711px" }}>
                    <div className='row justify-content-center'>
                        <div className='col-xl-8'>
                            <form className='row' onSubmit={handleClick}>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                    <label className="form-label fw-bold">Ady (TM)</label>
                                    <input name='name_tm' value={subCategory.name_tm} onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                    <label className="form-label fw-bold">Ady (EN)</label>
                                    <input name='name_en' value={subCategory.name_en} onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-5">
                                    <label className="form-label fw-bold">Ady (RU)</label>
                                    <input name='name_ru' value={subCategory.name_ru} onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-xl-12 mb-3">
                                    <label className="form-label fw-bold">Category</label>
                                    <select name='categoryId' onChange={handleChange} className="form-select" required>
                                        <option value={subCategory.categoryId}>{subCategory.categoryId}</option>
                                        {categories?.map((data, index) => (
                                            <option key={index} value={data.id}>
                                                {data.name_tm}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-lg-12 mb-3">
                                    <label className="form-label fw-bold">Suraty</label>
                                    <div className="input-group mb-3">
                                        <input name='subcategory_img' onChange={uploadPicture} type="file" className="form-control rounded-0" autoComplete="off" />
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

export default SubCategoryEdit