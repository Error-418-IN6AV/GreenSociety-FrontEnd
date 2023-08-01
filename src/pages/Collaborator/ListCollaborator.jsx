import React, { useState, useEffect } from 'react'
import { CardCollaborator } from './CardCollaborator'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export const ListCollaborator = () => {
  const [collaborator, setcollaborator] = useState([{}])
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  const getCollaborator = async () => {
    try {
      const { data } = await axios('http://localhost:3000/user/getCollaborator', { headers: headers })
      if (data.collaborator) {
        setcollaborator(data.collaborator)
        console.log(data.collaborator)
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || 'Error getting Collaborator')
    }
  }

  const resetAdd = async () => {
    try {
      document.getElementById('inputName').value = '',
        document.getElementById('inputSurname').value = '',
        document.getElementById('inputUsername').value = '',
        document.getElementById('inputPhone').value = '',
        document.getElementById('inputEmail').value = '',
        document.getElementById('inputPassword').value = ''
    } catch (error) {
      console.log(error)
    }
  }

  const addCollaborator = async () => {
    try {
      let collaborator = {
        name: document.getElementById('inputName').value,
        surname: document.getElementById('inputSurname').value,
        username: document.getElementById('inputUsername').value,
        phone: document.getElementById('inputPhone').value,
        email: document.getElementById('inputEmail').value,
        password: document.getElementById('inputPassword').value
      }
      const { data } = await axios.post('http://localhost:3000/user/save', collaborator, { headers: headers })
      resetAdd()
      Swal.fire('Your work has been saved', data.message, 'success')
      getCollaborator()
    } catch (err) {
      console.log(err)
      Swal.fire('Oops...', err.response.data.message, 'error')
      e.target.reset()
    }
  }

  useEffect(() => getCollaborator, [])

  return (
    <>
      <main>
        <div className="left binding color">
          <h1 className='text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
            </svg>
            | Collaborator</h1>
          <div className='text-center'>
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Collaborator</button>
          </div>
        </div>
        <div className="row g-0 justify-content-center">
          {
            collaborator.map(({ _id, name, username, surname, phone, email, password, role }, i) => {
              return (
                <CardCollaborator
                  _id={_id}
                  key={i}
                  name={name}
                  username={username}
                  surname={surname}
                  phone={phone}
                  email={email}
                  password={password}
                  role={role}
                  getCollaborators={getCollaborator}
                ></CardCollaborator>
              )
            })
          }
        </div>
      </main>
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className='text-center modal-title'>ADD COLLABORATOR</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className='modal-body'>

              <div className="form-floating">
                <input type="text" id="inputName" name='text' className="form-control" placeholder='text' />
                <label className="form-label" htmlFor="inputName">Name</label>
              </div>
              <br />
              <div className="form-floating">
                <input type="text" id="inputSurname" name='text' className="form-control" placeholder='text' />
                <label className="form-label" htmlFor="inputSurname">Surname</label>
              </div>
              <br />
              <div className="form-floating">
                <input type="text" id="inputUsername" name='date' className="form-control" placeholder='text' />
                <label className="form-label" htmlFor="inputUsername">Username</label>
              </div>
              <br />
              <div className="form-floating">
                <input type="text" id="inputPhone" name='text' className="form-control" placeholder='text' />
                <label className="form-label" htmlFor="inputPhone">Phone</label>
              </div>
              <br />
              <div className="form-floating">
                <input type="text" id="inputEmail" name='text' className="form-control" placeholder='text' />
                <label className="form-label" htmlFor="inputEmail">Email</label>
              </div>
              <br />
              <div className="form-floating">
                <input type="Password" id="inputPassword" name='text' className="form-control" placeholder='text' />
                <label className="form-label" htmlFor="inputPassword">Password</label>
              </div>
              <br />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
              <Link to='/dashboard/collaborator'>
                <button onClick={addCollaborator} type="button" className="btn btn-primary" data-bs-dismiss="modal">ADD EVENT</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}