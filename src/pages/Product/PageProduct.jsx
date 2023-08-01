import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { ProductCard } from './ProductCard'
import { AuthContext } from '../../index'
import { useNavigate } from 'react-router-dom'
import './product.css'
import Swal from 'sweetalert2'



export const PageProduct = () => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }
    const { setLoggedIn, dataUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [products, setProducts, searchResult] = useState([{}])
    const [categories, setCategory] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        stock: '',
        categories: ''
    });

    const logOut = (_id) => {

        navigate(`compr/${_id}`)

    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const addProduct = async (e) => {
        try {
            e.preventDefault();
            const { data } = await axios.post('http://localhost:3000/product/add', formData, { headers: headers })
            Swal.fire('Your work has been saved', data.message, 'success')
            getProducts()
            e.target.reset()
        } catch (err) {
            console.log(err)
            Swal.fire('Oops...', err.response.data.message, 'error')
            e.target.reset()
        }
    }

    const getProducts = async () => {
        try {
            const { data } = await axios('http://localhost:3000/product/getProducts', { headers: headers })
            if (data.products) {
                setProducts(data.products)
            }
        } catch (err) {
            console.log(err)
            throw new Error(err.response.message || 'Error getting products')
        }
    }

    const getCategories = async () => {
        try {
            const { data } = await axios('http://localhost:3000/category/getCategories', { headers: headers })
            if (data.categories) {
                setCategory(data.categories)
            }
        } catch (err) {
            console.log(err)
            throw new Error(err.response.message || 'Error getting Categories')
        }
    }

    const deleteProduct = async (id) => {
        try {
            Swal.fire({
                title: 'Are you sure to delete this product',
                icon: 'question',
                showConfirmButton: true,
                showDenyButton: true,
            }).then(async (confirmDelete) => {
                if (confirmDelete.isConfirmed) {
                    const { data } = await axios.delete(`http://localhost:3000/product/delete/${id}`, { headers: headers }).catch(
                        (err) => {
                            Swal.fire('Oops...', err.message.data.message, 'error')
                        })
                    getProducts();
                    Swal.fire(`${data.message}`, '', 'success')
                } else {
                    Swal.fire('No warries!', '', 'success')
                }
            })

        } catch (err) {
            console.log(err)
            Swal.fire('Oops...', err.response.data.message, 'error')
        }
    }

    const getAll = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios('http://localhost:3000/product/getProducts', { headers: headers })
            if (data.products) {
                setProducts(data.products)
            }
        } catch (err) {
            console.log(err)
            throw new Error(err.response.message || 'Error getting products')
        }
    }


    const search = async (e) => {
        e.preventDefault()
        try {
            let getSearch = {
                search: document.getElementById('inputSearch').value
            }
            const { data } = await axios.post('http://localhost:3000/product/search', getSearch, { headers: headers })
            setProducts(data.searchResult)
        } catch (err) {
            console.log(err)
            Swal.fire(
                'Oops...',
                err.response.data.message,
                'error'
            )
        }
    }




    useEffect(() => { getProducts(); getCategories(); }, [])
    return (
        <>
            <h1 className='text-center'>Products Page</h1>
            <br />
            <div className='parent' style={{ width: '100%' }}>
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input id="inputSearch" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={search} className="btn btn-outline-success" type="submit" style={{ marginRight: '10px' }}>Search</button>
                        <button onClick={getAll} className='btn btn-primary'>All</button>
                    </form>
                </div>
            </div>
            <br />
            {
                dataUser.role == 'ADMIN' ? (
                    <div className='d-flex justify-content-center'>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal1" className='btn btn-success' style={{ marginRight: '10px' }}>Add Product</button>
                    </div>
                ) : <></>
            }
            {/*Modal Add*/}
            <div className='modal fade' id='exampleModal1' aria-label='exampleModalLabel' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h3 className='modal-title' id='exampleModalLabel'>Product</h3>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={(e) => addProduct(e)} id="formAdd">

                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Name</label>
                                    <input onChange={handleChange} name='name' type="text" className="form-control" id="inputName" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Price</label>
                                    <input onChange={handleChange} name='price' type="text" className="form-control" id="inputDescription" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Stock</label>
                                    <input onChange={handleChange} name='stock' type="text" className="form-control" id="inputDescription" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Category</label>
                                    <select className='form-control' onChange={handleChange} name='category'>{
                                        categories.map(({ _id, name }, e) => {
                                            return (
                                                <option key={e} value={_id}>{name}</option>
                                            )
                                        })

                                    }</select>
                                </div>
                                <div className='modal-footer'>
                                    <button className='btn btn-danger' data-bs-dismiss='modal'>Close</button>
                                    <button className='btn btn-success' data-bs-dismiss='modal' type='submit'>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <main>
                <div className='row g-0 justify-content-center'>
                    {
                        products.map(({ _id, image, name, price, stock, category }, i) => {
                            return (
                                <ProductCard
                                    key={i}
                                    _id={_id}
                                    name={name}
                                    price={price}
                                    stock={stock}
                                    category={category?.name}
                                    image={image}
                                    deleteProduct={() => deleteProduct(_id)}
                                    logOut={() => logOut(_id)}
                                >
                                </ProductCard>
                            )

                        })

                    }

                </div>

            </main>
        </>
    )
}