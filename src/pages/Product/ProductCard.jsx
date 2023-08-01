import React, { useContext } from 'react'
import { AuthContext } from '../../index'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { useNavigate, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);


export const ProductCard = ({ _id, name, price, stock, image, category, deleteProduct, logOut }) => {
  const { setLoggedIn, dataUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="card m-3 g-0" style={{ maxWidth: '21rem', maxHeight: '40rem' }}>
        <img
          crossOrigin="anonymous" src={image ? `http://localhost:3000/product/getImage/${image}` : '/1.png'}
          onError={(e) => {
            e.target.src = '/1.png'; // Ruta a la imagen predeterminada en el directorio public
          }} className="card-img-top" alt="..."
        />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>Price: {price}</p>
          <p className='card-text'>Stock: {stock}</p>
          <p className='card-text'>Category: {category}</p>
          {
            dataUser.role == 'ADMIN' ? (
              <div>
                <button className='btn btn-danger' onClick={(e) => deleteProduct()} style={{ marginRight: '10px' }}>Delete</button>
                <Link to={`UpdateProduct/${_id}`}>
                  <button className='btn btn-warning' style={{ marginRight: '10px' }}>Update</button>
                </Link>
                <Link to={`image/${_id}`}>
                  <button className='btn btn-primary'>UpImage</button>
                </Link>
              </div>
            ) : <></>
          }

          <br />
          {
            dataUser.role == 'CLIENT' ? (
              <div className="action">
                <button type="button" onClick={logOut} >
                  <lord-icon
                    src="https://cdn.lordicon.com/cllunfud.json"
                    trigger="hover"
                    colors="outline:#121331,primary:#646e78,secondary:#ebe6ef"
                    style={{ width: "50px", height: "50px" }}>
                  </lord-icon>
                </button>
              </div>
            ) : <></>
          }
        </div>
      </div>
    </>
  )
}