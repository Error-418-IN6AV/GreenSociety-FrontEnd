import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../index'
import axios from "axios";
import Swal from 'sweetalert2'

export const CardEvent = ({ _id, name, description, date, typeevent, getEventt }) => {
    const [event, setevent] = useState([{}])
    const { setLoggedIn, dataUser } = useContext(AuthContext);
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

    const getEvent = async () => {
        try {
            const { data } = await axios('http://localhost:3000/event/get', { headers: headers })
            if (data.event) {
                setevent(data.event)
                console.log(data.event)
            }
        } catch (err) {
            console.log(err);
            throw new Error(err.response.message || 'Error getting Event')
        }
    }

    const deleteEvent = async (id) => {
        try {
            Swal.fire({
                title: 'Are you sure to delete this product',
                icon: 'question',
                showConfirmButton: true,
                showDenyButton: true,
            }).then(async (confirmDelete) => {
                if (confirmDelete.isConfirmed) {
                    const { data } = await axios.delete(`http://localhost:3000/event/delete/${id}`, { headers: headers }).catch(
                        (err) => {
                            Swal.fire('Oops...', err.message.data.message, 'error')
                        })
                    getEventt();
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

    useEffect(() => getEvent, [])


    return (
        <>
            <div className="card m-3 g-0" style={{ maxWidth: '19rem', maxHeight: '22rem' }}>
                <div className="card-body text-center">
                    <h5 className="card-title">Name</h5>
                    <p className="card-title">{name}</p>
                    <h5 className="card-title">Description</h5>
                    <p className="card-title">{description}</p>
                    <h5 className="card-title">Date</h5>
                    <p className="card-title">{date}</p>
                    <h5 className="card-title">Type Event</h5>
                    <p className="card-title">{typeevent}</p>
                    {
                        dataUser.role == 'ADMIN' ? (
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 gap-2 d-md-flex">
                                <button to={`updateEvent/${_id}`} type="button" className="btn btn-success" >Update <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                </svg></button>
                                <button onClick={() => deleteEvent(_id)} type="button" className="btn btn-danger">Delete <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                </svg></button>
                            </div>
                        ) : <></>
                    }
                </div>
            </div>
        </>
    )
}