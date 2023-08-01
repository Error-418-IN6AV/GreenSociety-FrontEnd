import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import pro from '../../assets/actualizar.png'


export const UpdateEvent = () => {
    const [event, setEvent] = useState([{}])
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

    const getEvent = async () => {
        try {
            const { data } = await axios(`http://localhost:3000/event/get/${id}`, { headers: headers })
            setEvent(data.event)
            setLoading(false)
        } catch (err) {
            console.error(err);
        }
    }



    const updateEvent = async () => {
        try {
            let updateEvent = {
                name: document.getElementById('inputName').value,
                description: document.getElementById('inputDescription').value,
                date: document.getElementById('inputDate').value,
                typeevent: document.getElementById('inputTypeEvent').value
            }
            const { data } = await axios.put(`http://localhost:3000/event/update/${id}`, updateEvent, { headers: headers })
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getEvent();
    }, [])

    return (
        <>
            <div className='container py-5 h-100'>
                <div className='row d-flex justify-content-center align-items-center h-100'>
                    <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
                        <div className='card shadow-2-strong'>
                            <div className='card-body p-5 text-center'>
                                <h1 className='text-center'>Update Event</h1>
                                <form className="m-5 text-center">
                                    <div className='form-group text-center'>
                                        <img src={pro} alheight="50" width="130" />
                                        <br />
                                    </div>
                                    <br />
                                    <div className="form-floating">
                                        <input defaultValue={event.name} type="text" id="inputName" name='Name' className="form-control" placeholder='text' />
                                        <label className="form-label" htmlFor="inputName">Name</label>
                                    </div>
                                    <br />
                                    <div className="form-floating">
                                        <input defaultValue={event.description} type="text" id="inputDescription" name='Description' className="form-control" placeholder='text' />
                                        <label className="form-label" htmlFor="inputDescription">Description</label>
                                    </div>
                                    <br />
                                    <div className="form-floating">
                                        <input defaultValue={event.date} type="date" id="inputDate" name='Date' className="form-control" placeholder='date' />
                                        <label className="form-label" htmlFor="inputDate">Date</label>
                                    </div>
                                    <br />
                                    <div className="form-floating">
                                        <input defaultValue={event.typeevent} type="text" id="inputTypeEvent" name='Type Event' className="form-control" placeholder='text' />
                                        <label className="form-label" htmlFor="inputTypeEvent">Type Event</label>
                                    </div>
                                    <br />
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <Link to="/dashboard/event">
                                            <button onClick={() => updateEvent()} className="btn btn-success">UPDATE</button>
                                        </Link>
                                        <Link to="/dashboard/event">
                                            <button className="btn btn-danger">Cancel</button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}