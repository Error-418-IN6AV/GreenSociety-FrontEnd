import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


export const ProductCard = ({ _id, name, price, stock, image, category, deleteProduct }) => {
  return (
    <>
      <div className="card m-3 g-0" style={{ maxWidth: '19rem', maxHeight: '35rem' }}>
        <img
          crossOrigin="anonymous" src={image ? `http://localhost:3000/product/getImage/${image}` : '/1.png'}
          onError={(e) => { e.target.src = '/1.png'; // Ruta a la imagen predeterminada en el directorio public
          }}  className="card-img-top" alt="..."
        />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>Price: {price}</p>
          <p className='card-text'>Stock: {stock}</p>
          <p className='card-text'>Category: {category}</p>
          <button className='btn btn-danger' onClick={(e) => deleteProduct()} style={{ marginRight: '10px' }}>Delete</button>
          <Link to={`update/${_id}`}>
            <button className='btn btn-warning' style={{ marginRight: '10px' }}>Update</button>
          </Link>
           <Link to={`image/${_id}`}>
           <button className='btn btn-primary'>UpImage</button>
           </Link>
        </div>
      </div>
    </>
  )
}
