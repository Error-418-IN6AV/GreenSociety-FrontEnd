import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

export const CardTransfer = ({ _id, nocuenta, dpi, date, monto, gettranssfer }) => {
  const [transfer, settransfer] = useState([{}])
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  const getTransfer = async () => {
    try {
      const { data } = await axios('http://localhost:3000/transfers/getTransfer', { headers: headers })
      if (data.transfer) {
        settransfer(data.transfer)
        console.log(data.transfer)
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || 'Error getting Transfers')
    }
  }

  const deleteTransfer = async (id) => {
    try {
      let confirmDelete = confirm('Are you sure to delete this Transfer?')
      if (confirmDelete) {
        const { data } = await axios.delete(`http://localhost:3000/transfers/delete/${id}`, { headers: headers })
        alert(`${data.message}`)
        gettranssfer()
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => getTransfer, [])


  return (
    <>
      <div className="card m-3 g-0" style={{ maxWidth: '19rem', maxHeight: '25rem' }}>
        <div className="card-body" style={{ backgroundColor: '#E6F4DE' }}>
          <h5 className="card-title">Account Number:</h5>
          <p className="card-title">{nocuenta}</p>
          <h5 className="card-title">DPI:</h5>
          <p className="card-title">{dpi}</p>
          <h5 className="card-title">Amount:</h5>
          <p className="card-title">{monto}</p>
          <h5 className="card-title">Date:</h5>
          <p className="card-title" >{date}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to={`updateTransfer/${_id}`} type="button" className="btn btn-success">Update</Link>
            <a onClick={() => deleteTransfer(_id)} type="button" className="btn btn-danger">Delete</a>
          </div>
        </div>
      </div>
    </>
  )
}