import React from 'react'
import product from '../../assets/1.png'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


export const ProductCard = ({_id, name, price, stock, image, category, deleteProduct}) => {
  return (
    <>
    <div className="card m-3 g-0" style={{ maxWidth: '19rem', maxHeight: '35rem' }}>
    <img className='card-img-top' src={product} alt="" /> 
      <div className='card-body'>
       <h5 className='card-title'>{name}</h5>
       <p className='card-text'>Price: {price}</p>
       <p className='card-text'>Stock: {stock}</p>
       <p className='card-text'>Category: {category}</p>
       <button className='btn btn-danger' onClick={(e)=> deleteProduct()} style={{ marginRight: '10px' }}>Delete</button>
       <Link to={`update/${_id}`}>
       <button className='btn btn-warning'>Update</button>
       </Link> 
      </div>
    </div>
    </>
  )
}
