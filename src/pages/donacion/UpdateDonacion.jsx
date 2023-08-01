import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import pro from '../../assets/actualizar.png'
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
  const editar = () => {
    updateDonacion()
    navigate('/dashboard/donation')
  }

  const close = () => {
    navigate('/dashboard/donation')
  }
  const getUser = async () => {
    try {
      const { data } = await axios('http://localhost:3000/user/get', users, { headers: headers })
      if (data.users) {
        setUsers(data.users)
        console.log(data.users)
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || 'Error getting users')
    }
  }

  const getDetails = async () => {
    try {
      const { data } = await axios('http://localhost:3000/detalledonaciones/gets', { headers: headers })
      if (data.detalleDonaciones) {
        setDetalleDonaciones(data.detalleDonaciones)
        console.log(data.detalleDonaciones)
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || 'Error getting detail donaciones')
    }
  }

  const get = async () => {
    try {
      const { data } = await axios(`http://localhost:3000/donaciones/get/${id}`, { headers: headers })
      setDonacion(data.donacion)
    } catch (err) {
      console.error(err);
    }
  }

  const getsMy = async () => {
    try {
      const { data } = await axios('http://localhost:3000/donaciones/getsMy', { headers: headers })
      if (data.donations) {
        setDonaciones(data.donations)
        console.log(data.donations)
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || 'Error getting donaciones')
    }
  }

  const updateDonacion = async () => {
    try {
      let updatedDonacion = {
        monto: document.getElementById('inputMonto').value,
        detalleDonacion: document.getElementById('inputDetalle').value
      }
      const { data } = await axios.put(`http://localhost:3000/donaciones/update/${id}`, updatedDonacion, { headers: headers })
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
      <h1 className='text-center'>Update Donation</h1>
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
            <div className='card shadow-2-strong'>
              <div className='card-body p-5 text-center'>
                <form className="m-5 text-center">
                  <div className='form-group text-center'>
                    <img src={pro} alheight="50" width="130" />
                    <br />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputMonto" className="form-label">Monto</label>
                    <input type="text" defaultValue={donacion.monto} className='form-control' id="inputMonto" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputDetalle" className="form-label">Detalle Donaciones</label>
                    <select defaultValue={donacion.detalleDonaciones?._id} className="form-control" id="inputDetalle">
                      {
                        detalleDonaciones.map(({ _id, causa }, i) => {
                          return (
                            <option key={i} value={_id}>{causa}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link to="/dashboard/donation">
                      <button onClick={() => editar()} className="btn btn-success">UPDATE</button>
                    </Link>
                    <Link to="/dashboard/donation">
                      <button className="btn btn-danger">Cancel</button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}