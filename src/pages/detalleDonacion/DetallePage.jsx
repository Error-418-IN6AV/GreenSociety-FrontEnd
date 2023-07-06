import React from 'react'
import axios from 'axios'
import { CardDetalle } from './CardDetalle'
import { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
export const DetallePage = () => {
    const [detalleDonaciones, setDetalleDonaciones] = useState([{}])
    const navigate = useNavigate();
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    } 

    /* const form = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
     
      }; */

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

      const add = async () => {
        try {
            let detalleDonation = {
                causa: document.getElementById('inputCausa').value,
                descripcion: document.getElementById('inputDescripcion').value
            }
            const { data } = await axios.post('http://localhost:3000/detalledonaciones/add' , detalleDonation  , {headers: headers} )
            alert(data.message)
            getDetails()
        } catch (err) {
            alert(err.response.data.message)
        }
      }

      const deleteDetail = async(_id) => {
        try{
          let confirmDelete = confirm('Are you sure to delete this donation detail?')
            if(confirmDelete){
                const { data } = await axios.delete(`http://localhost:3000/detalledonaciones/delete/${_id}`,  {headers: headers} )
                getDetails()
                alert(`${data.message}: ${data.deletedDetalle}`)
            }
        }catch(err){
          console.error(err)
        }
      }

      const updatePage = (_id)=>{
        navigate(`/updateDetalle/${_id}`)
      }

    
      useEffect(()=> {getDetails();}, [])
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
      <button type="button" className="btn btn-success mb-2 btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal1">
      Add Donation Detail
                </button>
      </div>
      </center>
      {/* Empieza el modal */}
      <div className="modal fade" id="exampleModal1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Detail Donation</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form id="formAdd">

                                <div className="form-floating mb-3">
              <input type="text" name="inputCausa" className="form-control" id="inputCausa" placeholder="." />
                <label htmlFor="floatingInput">Causa</label>
              </div>
              <div className="form-floating mb-3">
              <input type="text" name="inputDescripcion" className="form-control" id="inputDescripcion" placeholder="." />
                <label htmlFor="floatingInput">Descripcion</label>
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
          detalleDonaciones.map(({ _id, causa, descripcion, deleteDetalle}, i) => {
            return (
              <CardDetalle
                key={i}
                causa={causa}
                descripcion={descripcion}
                get={() =>updatePage(_id)}
                deleteDetalle={() => deleteDetail(_id)}
              ></CardDetalle>
            )
          })
        }
      </div>
    </main>
  </>
  )
}
