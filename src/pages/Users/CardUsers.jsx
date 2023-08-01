import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import Swal from 'sweetalert2'

export const CardUsers = ({ _id, name, surname, username, phone, email, role, getUserss }) => {
  const [user, setuser] = useState([{}])
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  const getUsers = async () => {
    try {
      const { data } = await axios('http://localhost:3000/user/get', { headers: headers })
      if (data.user) {
        setuser(data.user)
        console.log(data.user)
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || 'Error getting User')
    }
  }

  const deleteUsers = async (id) => {
    try {
      Swal.fire({
        title: 'Are you sure to delete this User',
        icon: 'question',
        showConfirmButton: true,
        showDenyButton: true,
      }).then(async (confirmDelete) => {
        if (confirmDelete.isConfirmed) {
          const { data } = await axios.delete(`http://localhost:3000/user/delete/${id}`, { headers: headers }).catch(
            (err) => {
              Swal.fire('Oops...', err.message.data.message, 'error')
            })
          getUserss();
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

  useEffect(() => getUsers, [])


  return (
    <>
      <div className="card m-3 g-0" style={{ maxWidth: '19rem', maxHeight: '32rem' }}>
        <div className="card-body text-center">
          <h3 className='tex-center'>Data {name}</h3>
          <h5 className="card-title">Name</h5>
          <p className="card-title">{name}</p>
          <h5 className="card-title">Surname</h5>
          <p className="card-title">{surname}</p>
          <h5 className="card-title">Username</h5>
          <p className="card-title">{username}</p>
          <h5 className="card-title">Phone</h5>
          <p className="card-title">{phone}</p>
          <h5 className="card-title">Email</h5>
          <p className="card-title">{email}</p>
          <h5 className="card-title">Role</h5>
          <p className="card-title">{role}</p>
          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 gap-2 d-md-flex">
            <Link to={`UpdateUsers/${_id}`} type="button" className="btn btn-success">Update <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
            </svg></Link>
            <a onClick={() => deleteUsers(_id)} type="button" className="btn btn-danger">Delete <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg></a>
          </div>
        </div>
      </div>
    </>
  )
}