import React, { useState, useEffect, useContext } from 'react'
import { ForoVistas } from './ForoVistas'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../index'
export const ForoPage = () => {
  const { setLoggedIn, dataUser } = useContext(AuthContext);
  const [foro, setForo] = useState([{}])
  const navigate = useNavigate();
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  const get = async () => {
    try {
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


  const resetAdd = async () => {
    try {
      document.getElementById('inputName').value = '',
        document.getElementById('inputDescription').value = '',
        document.getElementById('inputPrice').value = '',
        document.getElementById('inputDescuento').value = '',
        document.getElementById('inputStock').value = ''
    } catch (error) {
      console.log(error)
    }
  }

  const deleteForo = async (id) => {
    try {
      let confirmDelete = confirm('Are you sure to delete this account?')
      if (confirmDelete) {
        const { data } = await axios.delete(`http://localhost:3000/foro/delete/${id}`, { headers })
        get()
        alert('Deleted Sucessfully')
      }
    } catch (err) {
      console.error(err)
    }
  }


  const addForo = async () => {
    try {
      let foro = {
        name: document.getElementById('floatingInput').value,
        description: document.getElementById('inputDescription').value,
      }
      const { data } = await axios.post('http://localhost:3000/foro/add', foro)
      alert(data.message)
      get()

    } catch (err) {
      console.log(err);
    }
  }



  const logOut = (_id) => {

    navigate(`/dashboard/comentary/${_id}`)

  }

  const update = (_id) => {

    navigate(`/dashboard/updateForo/${_id}`)

  }



  useEffect(() => { get() }, [])

  return (
    <>
      <main>
        <div className="left binding color">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
</svg> Foro

        </div>

        {
          dataUser.role == 'ADMIN' ? (
            <li>
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
        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Add Foro</h1>

              </div>
              <div className="modal-body">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>


                <form id="formAdd">

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Reforestación"
                    />
                    <label htmlFor="floatingInput">Theme</label>
                  </div>
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
