import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
export const UpdateDonacion = () => {
  const navigate = useNavigate();
  const [donacion, setDonacion] = useState([{}])
  const [donations, setDonaciones] = useState([{}])
  const [detalleDonaciones, setDetalleDonaciones] = useState([{}])
  const [users, setUsers] = useState([{}])
  const { id } = useParams();
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  } 
  const editar = ()=>{
    updateDonacion()
    navigate('/donacion')
   }

  const close = ()=>{
    navigate('/donacion')
  }

  const getUser = async()=>{
    try{
      const { data } = await axios('http://localhost:3000/user/get', users/* , {headers: headers} */)
      if(data.users){
        setUsers(data.users)
        console.log(data.users)
      }
    }catch(err){
      console.log(err);
      throw new Error(err.response.message ||'Error getting users')
    }
  }
  
  const getDetails = async()=>{
    try{
      const { data } = await axios('http://localhost:3000/detalledonaciones/gets', {headers: headers})
      if(data.detalleDonaciones){
        setDetalleDonaciones(data.detalleDonaciones)
        console.log(data.detalleDonaciones)
      }
    }catch(err){
      console.log(err);
      throw new Error(err.response.message ||'Error getting detail donaciones')
    }
  }

  const get = async()=>{
    try{
      const { data } = await axios(`http://localhost:3000/donaciones/get/${id}` ,{ headers: headers })
      setDonacion(data.donacion)
    }catch(err){
      console.error(err);
    }
  }

  const getsMy = async()=>{
    try{
      const { data } = await axios('http://localhost:3000/donaciones/getsMy', {headers: headers})
      if(data.donations){
        setDonaciones(data.donations)
        console.log(data.donations)
      }
    }catch(err){
      console.log(err);
      throw new Error(err.response.message ||'Error getting donaciones')
    }
  }

  const updateDonacion = async ()=>{
    try {
        let updatedDonacion = {
            monto: document.getElementById('inputMonto').value,
            beneficiario: document.getElementById('inputBeneficiario').value,
            detalleDonacion: document.getElementById('inputDetalle').value
        }
        const  { data } = await axios.put(`http://localhost:3000/donaciones/update/${id}`,updatedDonacion,{ headers: headers } )
        console.log(data)
        getsMy()
    } catch (err) {
        console.log(err)
    }
}


  useEffect(() => {
    get(); getDetails(); getUser();
  }, [])
  return (
    <>
    <h1>Update Donation</h1>
    <form className="m-5 text-center">
        <div className="mb-3">
            <label htmlFor="inputMonto" className="form-label">Monto</label>
            <input type="text" defaultValue={donacion.monto} className='form-control' id="inputMonto" />
        </div>
        <div className="mb-3">
            <label htmlFor="inputBeneficiario" className="form-label">Beneficiario</label>
            <select defaultValue={donacion.users?._id} className="form-control" id="inputBeneficiario">
                {
                    users.map(({_id, name}, i)=>{
                        return(
                            <option key={i} value={_id}>{name}</option>
                        )
                    })
                }
            </select>
        </div>
        <div className="mb-3">
            <label htmlFor="inputDetalle" className="form-label">Detalle Donaciones</label>
            <select defaultValue={donacion.detalleDonaciones?._id}  className="form-control" id="inputDetalle">
                {
                    detalleDonaciones.map(({_id, causa}, i)=>{
                        return(
                            <option key={i} value={_id}>{causa}</option>
                        )
                    })
                }
            </select>
        </div>
        <Link to="/donacion">
            <button onClick={()=>editar()} className="btn btn-success">UPDATE</button>
        </Link>
        <Link to="/donacion">
            <button className="btn btn-danger">Cancel</button>
        </Link>
    </form>
    </>
  )
}