import React, { useState, useEffect, useContext } from 'react'
import { ForoVistas } from './ForoVistas'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../index'
import Swal from 'sweetalert2'

export const ForoPage = () => {
  const { setLoggedIn, dataUser } = useContext(AuthContext);
  const [foro, setForo] = useState([{}])
  const navigate = useNavigate();
  // obtener el token de cada perosna que entre a foros
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }
  //obtner todos los foros y mostrarlos en pantall
  const get = async () => {
    try {
      //obtiene la ruta junto con los tokens
      const { data } = await axios.get('http://localhost:3000/foro/get', { headers: headers })
      if (data.foro) {
        setForo(data.foro)
        console.log(data.foro)
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || 'Error getting Products')
    }
  }

  //este es el metodo para poder eliminar un foro, este dependera de que rol tenga la persona
  const deleteForo = async (id) => {
    try {
      //utilizamos swal para poder darle estilo a las alerts
      Swal.fire({
        title: 'Are you sure to delete this Foro',
        icon: 'question',
        showConfirmButton: true,
        showDenyButton: true,
      }).then(async (confirmDelete) => {
        //utilizamos una vlacion para poder eliminar nustro foro junto con ello visualizamos mucho el tipo de rol que tinene
        if (confirmDelete.isConfirmed) {
          const { data } = await axios.delete(`http://localhost:3000/foro/delete/${id}`, { headers }).catch(
            (err) => {
              Swal.fire('Oops...', err.message.data.message, 'error')
            })
          get();
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



  //cons este metodo se busca poder agregar un foro obteniendo aca uno de los datos
  const addForo = async () => {
    try {
      let foro = {
        name: document.getElementById('floatingInput').value,
        description: document.getElementById('inputDescription').value,
      }
      //creamos el metodo para poder agregar e introducimos foro para poder darle los valores
      const { data } = await axios.post('http://localhost:3000/foro/add', foro)
      Swal.fire('Your work has been saved', data.message, 'success')
      get()
      resetAdd()
    } catch (err) {
      console.log(err)
      Swal.fire('Oops...', err.response.data.message, 'error')
      resetAdd()

    }
  }

  const resetAdd = async () => {
    try {
      document.getElementById('floatingInput').value = '',
        document.getElementById('inputDescription').value = ''
    } catch (error) {
      console.log(error)
    }
  }


  //este metodo lo utilizamos para poder obtener el id de nuestro foro e enviarlo a comentarios
  const logOut = (_id) => {
    //utilizamos navigate para poder mostrarnos de pantalla en pantall
    navigate(`/dashboard/comentary/${_id}`)

  }

  //este metodo lo utilizamos para poder obtener el id de nuestro foro e enviarlo a editar , esto para
  //poder hacer que cada comentario que se encuanre en arraigado a este foro se pueda mostrar
  const update = (_id) => {

    navigate(`/dashboard/updateForo/${_id}`)

  }



  useEffect(() => { get() }, [])

  return (
    <>
      <main>
        <div className="left binding color" style={{ textAlign: 'center' }}>
          <h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
            </svg> Foro
          </h1>

          {/* todo este bloque de aqui nnos servira poder mostrar ciertos datos que solo veran persona con rol ADMIN */}
          {
            dataUser.role == 'ADMIN' ? (
              <li>
                {/*   esta parte se utiliza para poder mostrar el boton de add foro el cual permite
    que cualquier con rol admin pueda pode agergar cualquier tipo de foro */}

                <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" href="#exampleModalToggle" >

                  <lord-icon
                    src="https://cdn.lordicon.com/kjkiqtxg.json"
                    trigger="hover"
                    colors="outline:#121331,primary:#16c79e,secondary:#4bb3fd,tertiary:#ebe6ef"
                    style={{ width: "110px", height: "110px" }}>
                    Add Foro
                  </lord-icon>
                </button>
              </li>
            ) : <></>
          }
        </div>
        {/* el boton no se mostrar si este es cliente */}
        <br />
        <br />


        <div className="row g-0 justify-content-center">
          {
            foro.map(({ _id, name, description }, i) => {
              return (

                <ForoVistas
                  key={i}
                  _id={_id}
                  name={name}
                  eliminar={() => deleteForo(_id)}
                  description={description}
                  getForo={() => logOut(_id)}
                  update={() => update(_id)}
                ></ForoVistas>

              )

            })


          }


        </div>
        {/* 
        este el el modal que mostrara al momwnro de agregar un foro sera un modal
        el cual pedira que de el nombre del foro y para que sirve */}
        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Add Foro</h1>

              </div>
              <div className="modal-body">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>


                <form id="formAdd">
                  {/* Aqui agregams el tema del foro */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Reforestación"
                    />
                    <label htmlFor="floatingInput">Theme</label>
                  </div>
                  {/*           Aqui obtenemos el valro de nuestra descripcio y de que tratara el foro */}
                  <div className="mb-3">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a description here"
                        id="inputDescription"
                        style={{ height: 100 }}
                        defaultValue={""}
                      />
                      <label>Description</label>
                    </div>
                  </div>


                </form>
              </div>
              {/*             Aqui agregaremos el valor de nuestro foro y tambie realizamos la accion agregar */}
              <div className="modal-footer">
                <button onClick={() => addForo()} type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}