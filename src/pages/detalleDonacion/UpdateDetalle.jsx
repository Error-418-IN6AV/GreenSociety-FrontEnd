import React from 'react'
import axios from 'axios';
import { useState,  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const UpdateDetalle = () => {
  const navigate = useNavigate();
  const [detalle, setDetalle] = useState({});
  const { id } = useParams();
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  } 

  const editar = ()=>{
    update()
    navigate('/detalle')
   }

    const get = async()=>{
        try{
          const { data } = await axios(`http://localhost:3000/detalledonaciones/get/${id}` ,{ headers: headers })
          setDetalle(data.detalle)
        }catch(err){
          console.error(err);
        }
      }

      const update = async()=>{
        try{
          let updatedDetalle = {
            causa: document.getElementById('causa').value,
            descripcion: document.getElementById('descripcion').value
          }
          const { data } = await axios.put(`http://localhost:3000/detalledonaciones/update/${id}`,updatedDetalle ,{ headers: headers })
          alert(data.message)
        }catch (err) {
        }
      }
    
      useEffect(() => {
        get();
      }, [])

  return (
    <>
    <h1>Update Donation</h1>
    <form className='m-5 text-center'>
                <div className="mb-3">
                  <label htmlFor="floatingInput" className="form-label">Causa</label>
                  <input defaultValue={detalle.causa} type="text" name="causa" className="form-control" id="causa" placeholder="Enter causa" />
                </div>
                <div className="mb-3">
                  <label htmlFor="floatingInput" className="form-label">Descripción</label>
                  <input defaultValue={detalle.descripcion} type="text" name="descripcion" className="form-control" id="descripcion" placeholder="Enter descripción" />
                </div>
                <Link to="/detalle">
                    <button onClick={()=>editar()} className="btn btn-success">UPDATE</button>
                </Link>
                <Link to="/detalle">
                    <button className="btn btn-danger">Cancel</button>
                </Link>
              </form>
    </>
  )
}