import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export const UpdateProduct = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const getProduct = async () => {
        try {
          console.log(id);
          const { data } = await axios.get(`http://localhost:3000/product/getProduct/${id}`);
          console.log(data);
          setProduct(data.product);
        } catch (err) {
          console.log(err);
        }
      };


    const updateProduct = async ()=>{
        try {
            let updatePro ={
                name: document.getElementById('inputName').value,
                price: document.getElementById('inputPrice').value,
                stock: document.getElementById('inputStock').value
            }
            const { data } = await axios.put(`http://localhost:3000/product/update/${id}`, updatePro)
            console.log(data)
            
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => { getProduct() }, [])
    return (
        <>
            <section className='vh-100'>
                <div className='container py-5 h-100'>
                    <div className='row d-flex justify-content-center align-items-center h-100'>
                        <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
                            <div className='card shadow-2-strong'>
                                <div className='card-body p-5 text-center'>
                                    <form>
                                        <br />
                                        <div className='form-group text-center'>
                                            <img src="" alheight="50" width="130" />
                                            <br /> <br />
                                            <h6>Update Product</h6>
                                        </div>
                                        <br />
                                        <div className='mb-3'>
                                            <label htmlFor="inputName" className='form-label'>Name</label>
                                            <input type="text" defaultValue={product.name} className='form-control' id="inputName" />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="inputDescription" className='form-label'>Price</label>
                                            <input type="text" defaultValue={product.price} className='form-control' id='inputPrice' />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="inputlocation" className='form-label'>Stock</label>
                                            <input type="text" defaultValue={product.stock} className='form-control' id="inputStock" />
                                        </div>

                                    </form>
                                    <br />
                                    <Link to="/product">
                                        <button onClick={()=> updateProduct()} className="btn btn-success" style={{ marginRight: '10px' }}>Update</button>
                                    </Link>
                                    <Link to="/product">
                                        <button className='btn btn-danger'>Cancel</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
