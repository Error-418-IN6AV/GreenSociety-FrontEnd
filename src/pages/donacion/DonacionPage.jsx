import React from 'react'
import axios from 'axios'
import { CardDonacion } from './CardDonacion'
import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const DonacionPage = () => {
  const [donations, setDonaciones] = useState([{}])
  const [detalleDonaciones, setDetalleDonaciones] = useState([{}])
  const [user, setUsers] = useState([{}])
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const navigate = useNavigate();
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  const getUser = async () => {
    try {
      const { data } = await axios('http://localhost:3000/user/get', { headers: headers })
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

  const getsToMy = async () => {
    try {
      const { data } = await axios('http://localhost:3000/donaciones/getToMe', { headers: headers })
      if (data.donations) {
        setDonaciones(data.donations)
        console.log(data.donations)
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || 'Error getting donaciones')
    }
  }

  const add = async () => {
    try {
      let donations = {
        monto: document.getElementById('inputMonto').value,
        beneficiario: document.getElementById('inputBeneficiario').value,
        detalleDonacion: document.getElementById('inputDetalle').value
      }
      const { data } = await axios.post('http://localhost:3000/donaciones/add', donations, { headers: headers })
      Swal.fire('Your work has been saved', data.message, 'success')
      getsMy()
    } catch (err) {
      console.log(err)
      Swal.fire('Oops...', err.response.data.message, 'error')
      e.target.reset()
    }
  }

  const deleteDonaciones = async (id) => {
    try {
      Swal.fire({
        title: 'Are you sure to delete this Donation',
        icon: 'question',
        showConfirmButton: true,
        showDenyButton: true,
      }).then(async (confirmDelete) => {
        if (confirmDelete.isConfirmed) {
          const { data } = await axios.delete(`http://localhost:3000/donaciones/delete/${id}`, { headers: headers }).catch(
            (err) => {
              Swal.fire('Oops...', err.message.data.message, 'error')
            })
          getsMy();
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

  const updatePage = (id) => {
    navigate(`updateDonacion/${id}`)
  }

  useEffect(() => { getsMy();  /* getsToMy(); */  getDetails(); getUser(); }, [])
  return (
    <>
      <main>
        <center>
          <div className="left binding color">
            <h1> <svg xmlns="http://www.w3.org/2000/svg" style={{ color: '#0F742F' }} width="70" height="70" fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
              <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
              <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
              <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
            </svg> Donations </h1>
          </div>
          <div>
            <button type="button" className="btn btn-success mb-2 btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal1">
              Make a donation
            </button>
          </div>
          <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4 gap-2 d-md-flex'>
            <button onClick={() => getsMy()} type="button" className="btn btn-success mb-2 btn-lg"> My Donations</button>
            <button onClick={() => getsToMy()} type="button" className="btn btn-success mb-2 btn-lg">Donations to me</button>
          </div>
        </center>
        {/* Empieza el modal */}
        <div className="modal fade" id="exampleModal1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Make a donation</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form id="formAdd">

                  <div className="form-floating mb-3">
                    <input type="text" name="inputMonto" className="form-control" id="inputMonto" placeholder="." />
                    <label htmlFor="floatingInput">Monto</label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputBeneficiario" className="form-label">Beneficiario</label>
                    <select className="form-control" id="inputBeneficiario">
                      {
                        user.map(({ _id, name }, i) => {
                          return (
                            <option key={i} value={_id}>{name}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputDetalle" className="form-label">Detalle Donacion</label>
                    <select className="form-control" id="inputDetalle">
                      {
                        detalleDonaciones.map(({ _id, causa }, i) => {
                          return (
                            <option key={i} value={_id}>{causa}</option>
                          )
                        })
                      }
                    </select>
                  </div>

                  <hr className="my-4" />
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button onClick={add} type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
              </div>
            </div>
          </div>
        </div>
        <br /><br />

        <div className="row g-0 justify-content-center">
          {
            donations.map(({ id, date, monto, donante, beneficiario, detalleDonacion, get, deleteDonacion }, i) => {
              return (
                <CardDonacion
                  key={i}
                  date={date}
                  monto={monto}
                  donante={donante?.name}
                  beneficiario={beneficiario?.name}
                  detalleDonacion={detalleDonacion?.causa}
                  get={() => updatePage(id)}
                  deleteDonacion={() => deleteDonaciones(id)}
                ></CardDonacion>
              )
            })
          }
        </div>
      </main>
    </>
  )
}
