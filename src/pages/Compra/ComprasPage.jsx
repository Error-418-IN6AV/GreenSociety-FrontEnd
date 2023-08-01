import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Compra.css'
import Swal from 'sweetalert2'

export const ComprasPage = () => {

    const navigate = useNavigate();

    const [compra, setCompra, existProducto] = useState({});
    const [products, setproducts] = useState({});
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }


    const { id } = useParams();

    const logOut = () => {
        add()
        navigate('/dashboard/product')


    }


    const close = () => {

        navigate('/dashboard/product')


    }

    const getProduct = async () => {
        try {
            const { data } = await axios(`http://localhost:3000/product/getProducct/${id}`)
            setproducts(data.products)
        } catch (err) {
            console.error(err);
        }
    }

    const add = async () => {
        try {

            let compra = {
                name: document.getElementById('name').value,
                lastname: document.getElementById('lastname').value,
                nit: document.getElementById('nit').value,
                ciudad: document.getElementById('ciudad').value,
                cantidad: document.getElementById('cantidad').value,
                product: products._id
            }
            const { data } = await axios.post('http://localhost:3000/compra/add', compra, { headers: headers })
            Swal.fire('Your purchase has been successful', data.message, 'success')
        } catch (err) {
            console.log(err)
            Swal.fire('Oops...', err.response.data.message, 'error')
        }
    }



    useEffect(() => { getProduct(); }, [])

    return (
        <main className="page payment-page">
            <section className="payment-form dark">
                <div className="container">
                    <div className="block-heading">
                        <h2>Payment</h2>

                    </div>
                    <form>
                        <div className="products">
                            <h3 className="title">ID and Product</h3>
                            <h4 className="title">{products.category}</h4>
                            <div className="total">Total<span className="price">${products.price}</span></div>
                        </div>
                        <div className="card-details">
                            <h3 className="title">Bill Details</h3>
                            <div className="row">
                                <div className="form-group col-sm-8">
                                    <div className="form-floating mb-3">
                                        <input id="name" type="text" className="form-control" placeholder="." aria-label="Card Holder" aria-describedby="basic-addon1"></input>
                                        <label htmlFor="floatingInput">Name</label>
                                    </div>
                                </div>
                                <div className="form-group col-sm-8">
                                    <div className="form-floating mb-3">
                                        <input id="lastname" type="text" className="form-control" placeholder="." aria-label="Card Holder" aria-describedby="basic-addon1"></input>
                                        <label htmlFor="floatingInput">LastName</label>
                                    </div>
                                </div>
                                <div className="form-group col-sm-4">
                                    <div className="form-floating mb-3">
                                        <input id="cantidad" type="number" defaultValue='1' className="form-control" placeholder="." aria-label="Card Holder" aria-describedby="basic-addon1"></input>
                                        <label htmlFor="floatingInput">Cantidad</label>
                                    </div>
                                </div>
                                <div className="form-group col-sm-8">
                                    <div className="form-floating mb-3">
                                        <input id="ciudad" type="text" className="form-control" placeholder="." aria-label="Card Holder" aria-describedby="basic-addon1"></input>
                                        <label htmlFor="floatingInput">Ciudad</label>
                                    </div>
                                </div>
                                <div className="form-group col-sm-4">
                                    <div className="form-floating mb-3">
                                        <input id="nit" type="text" className="form-control" maxLength="8" placeholder="." aria-label="Card Holder" aria-describedby="basic-addon1"></input>
                                        <label htmlFor="floatingInput">Nit</label>
                                    </div>
                                </div>

                                <div className="d-grid">
                                    <button onClick={() => logOut()} className="btn btn-outline-primary" type="button"  ><i className="fa-solid fa-money-check-dollar"></i> Comprar</button>
                                </div>

                                <div className="d-grid mb-2">
                                    <button onClick={close} className="btn btn-outline-danger" type="button"><i className="fa-solid fa-ban"></i> CANCEL</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}