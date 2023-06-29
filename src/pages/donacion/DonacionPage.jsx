import React from 'react'
import axios from 'axios'
import { CardDonacion } from './CardDonacion'
import { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import { Box, Modal, Typography } from '@mui/material'
export const DonacionPage = () => {
    const [donations, setDonaciones] = useState([{}])
    const [detalleDonaciones, setDetalleDonaciones] = useState([{}])
    const [user, setUsers] = useState([{}])
    const [open, setOpen] = useState(false);
    const Open = () => setOpen(true);
    const OpenUpdate = (id) => setOpenUpdate(true);
    const close = () => setOpen(false);
    const navigate = useNavigate();
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    } 

    const form = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
     
      };

      const getUser = async()=>{
        try{
          const { data } = await axios('http://localhost:3000/user/get'/* , {headers: headers} */)
          if(data.user){
            setUsers(data.user)
            console.log(data.user)
          }
        }catch(err){
          console.log(err);
          throw new Error(err.response.message ||'Error getting users')
        }
      }
      
      const getDetails = async()=>{
        try{
          const { data } = await axios('http://localhost:3000/detalledonaciones/gets', {headers: headers})
          if(data.detalleDonacines){
            setDetalleDonaciones(data.detalleDonacines)
            console.log(data.detalleDonacines)
          }
        }catch(err){
          console.log(err);
          throw new Error(err.response.message ||'Error getting detail donaciones')
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

      const getsToMy = async()=>{
        try{
          const { data } = await axios('http://localhost:3000/donaciones/getToMy', {headers: headers})
          if(data.donations){
            setDonaciones(data.donations)
            console.log(data.donations)
          }
        }catch(err){
          console.log(err);
          throw new Error(err.response.message ||'Error getting donaciones')
        }
      }

      const add = async () => {
        try {
            let donations = {
                monto: document.getElementById('inputMonto').value,
                noCuenta: document.getElementById('inputNoCuenta').value,
                beneficiario: document.getElementById('inputBeneficiario').value,
                detalleDonacion: document.getElementById('inputDetalle').value
            }
            const { data } = await axios.post('http://localhost:3000/donaciones/add' , donations  , {headers: headers} )
            alert(data.message)
            getsMy()
        } catch (err) {
            alert(err.response.data.message)
        }
      }

      const deleteDonacion = async(_id) => {
        try{
          let confirmDelete = confirm('Are you sure to delete this donation?')
            if(confirmDelete){
                const { data } = await axios.delete(`http://localhost:3000/donaciones/delete/${_id}`,  {headers: headers} )
                getsMy()
                alert(`${data.message}: ${data.deletedDonation}`)
            }
        }catch(err){
          console.error(err)
        }
      }

      const updatePage = (_id)=>{
        navigate(`/updateDonacion/${_id}`)
      }

      const addIt = async () => {
        close();
        add();
      }
    
      useEffect(()=> {getsMy(); /* getsToMy(); */ getDetails(); getUser();}, [])
  return (
    <>
    <main>
      <center>
      <div className="left binding color">
       <h1> <svg xmlns="http://www.w3.org/2000/svg" style={{ color: '#0F742F' }} width="70" height="70" fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
</svg> Donations </h1> 
      </div>
      <div>
        <button onClick={Open} className="btn btn-success mb-2 btn-lg"><i className="fa-solid fa-door-closed"></i> Make a donation</button>
      </div>
      <div>
        <button className="btn btn-success mb-2 btn-lg"><i className="fa-solid fa-door-closed"></i> My Donations</button>
        <button className="btn btn-success mb-2 btn-lg"><i className="fa-solid fa-door-closed"></i> Donations to me</button>
      </div>
      </center>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={form}>
        <div  className="card-body p-4 p-sm-5">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Donation
          </Typography>
          <Typography component={'div'} id="modal-modal-description" sx={{ mt: 2 }} >
            <form>
            <div className="form-floating mb-3">
              <input type="text" name="inputMonto" className="form-control" id="inputMonto" placeholder="." />
                <label htmlFor="floatingInput">Monto</label>
              </div>
              <div className="form-floating mb-3">
              <input type="text" name="inputNoCuenta" className="form-control" id="inputNoCuenta" placeholder="." />
                <label htmlFor="floatingInput">No Cuenta</label>
              </div>
              <div className="form-floating mb-3">
              <label htmlFor="inputBeneficiario" className="form-label">Beneficiario</label>
                <select className="form-control" id="inputBeneficiario">
                        {
                            user.map(({_id, name}, i)=>{
                                return(
                                    <option key={i} value={_id}>{name}</option>
                                )
                            })
                        }
                    </select>
              </div>
              <div className="form-floating mb-3">
              <label htmlFor="inputDetalle" className="form-label">Detalle Donacion</label>
                <select className="form-control" id="inputDetalle">
                        {
                            detalleDonaciones.map(({_id, causa}, i)=>{
                                return(
                                    <option key={i} value={_id}>{causa}</option>
                                )
                            })
                        }
                    </select>
              </div>
              <div className="d-grid">
                <button onClick={() =>addIt()} className="btn btn-primary btn-login text-uppercase fw-bold" type="submit"  >ADD</button>
              </div>
              <hr className="my-4" />
              <div className="d-grid mb-2">
                <button onClick={close} className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                  <i className="fab  me-2"></i> CANCEL
                </button>
              </div>
            </form>
          </Typography>
          </div>
        </Box>
      </Modal>
   
      <div className="row g-0 justify-content-center">
        {
          donations.map(({ _id, date, monto, noCuenta, donante, beneficiario, detalleDonacion}, i) => {
            return (
              <CardDonacion
                key={i}
                date={date}
                monto={monto}
                noCuenta={noCuenta}
                donante={donante}
                beneficiario={beneficiario}
                detalleDonacion={detalleDonacion}
                get={() =>updatePage(_id)}
                deleteDonacion={() => deleteDonacion(_id)}
              ></CardDonacion>
            )
          })
        }
      </div>
    </main>
  </>
  )
}
