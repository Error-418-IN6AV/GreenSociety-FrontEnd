import React, { useState, useEffect, useContext } from 'react'
import { CardEvent } from './CardEvent'
import { AuthContext } from '../../index'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export const ListEvent = () => {
    const { dataUser } = useContext(AuthContext);
    const [event, setEvent] = useState([{}])
    const [form, setForm] = useState({
        name: '',
        description: ''
    })
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

    const getEvent = async () => {
        try {
            const { data } = await axios('http://localhost:3000/event/get', { headers: headers })
            setEvent(data.event)
        } catch (err) {
            console.log(err);
        }
    }

    const resetAdd = async () => {
        try {
            document.getElementById('inputName').value = '',
                document.getElementById('inputDescription').value = '',
                document.getElementById('inputDate').value = '',
                document.getElementById('inputTypeEvent').value = ''
        } catch (error) {
            console.log(error)
        }
    }

    const addEvent = async () => {
        try {
            let event = {
                name: document.getElementById('inputName').value,
                description: document.getElementById('inputDescription').value,
                date: document.getElementById('inputDate').value,
                typeevent: document.getElementById('inputTypeEvent').value
            }
            const { data } = await axios.post('http://localhost:3000/event/add', event, { headers: headers })
            resetAdd()
            Swal.fire('Your work has been saved', data.message, 'success')
            getEvent()
        } catch (err) {
            console.log(err)
            Swal.fire('Oops...', err.response.data.message, 'error')
        }
    }


    useEffect(() => {
        getEvent();
    }, [])

    return (
        <>
            <main>
                <div className="left binding color">
                    <h1 className='text-center'>Event</h1>
                    {
                        dataUser.role == 'ADMIN' ? (
                            <div className='text-center'>
                                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Event</button>
                            </div>
                        ) : <></>
                    }
                    <br />
                </div>
                <div className="row g-0 justify-content-center">
                    {
                        event.map(({ _id, name, description, date, typeevent }, i) => {
                            return (
                                <CardEvent
                                    _id={_id}
                                    key={i}
                                    name={name}
                                    description={description}
                                    date={date}
                                    typeevent={typeevent}
                                    getEventt={getEvent}
                                ></CardEvent>
                            )
                        })
                    }
                </div>
            </main>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className='text-center'>ADD EVENT</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="form-floating">
                            <input type="text" id="inputName" name='Name' className="form-control" placeholder='text' />
                            <label className="form-label" htmlFor="inputName">Name</label>
                        </div>
                        <br />
                        <div className="form-floating">
                            <input type="text" id="inputDescription" name='Description' className="form-control" placeholder='text' />
                            <label className="form-label" htmlFor="inputDescription">Description</label>
                        </div>
                        <br />
                        <div className="form-floating">
                            <input type="Date" id="inputDate" name='Date' className="form-control" placeholder='Date' />
                            <label className="form-label" htmlFor="inputDate">Date</label>
                        </div>
                        <br />
                        <div className="form-floating">
                            <input type="text" id="inputTypeEvent" name='price' className="form-control" placeholder='text' />
                            <label className="form-label" htmlFor="inputTypeEvent">Type Event</label>
                        </div>
                        <br />
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">CLOSE</button>
                            <Link to='/dashboard/event'>
                                <button onClick={addEvent} type="button" className="btn btn-primary" data-bs-dismiss="modal">ADD EVENT</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}