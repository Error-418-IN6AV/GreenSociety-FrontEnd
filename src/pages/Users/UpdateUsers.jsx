import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import User from '../Comentaries/User.jpg'

export const UpdateUsers = () => {
    const [user, setUser] = useState([{}])
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }


    const getUser = async () => {
        try {
            const { data } = await axios(`http://localhost:3000/user/get/${id}`, { headers: headers })
            setUser(data.user)
            setLoading(false)
        } catch (err) {
            console.error(err);
        }
    }

    const updateUser = async () => {
        try {
            let updateUser = {
                name: document.getElementById('inputName').value,
                surname: document.getElementById('inputSurname').value,
                phone: document.getElementById('inputPhone').value,
                email: document.getElementById('inputEmail').value
            }
            const { data } = await axios.put(`http://localhost:3000/user/update/${id}`, updateUser, { headers: headers })
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => getUser, [])


    return (
        <>
            <div className='container py-5 h-100'>
                <div className='row d-flex justify-content-center align-items-center h-100'>
                    <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
                        <div className='card shadow-2-strong'>
                            <form className="m-5 text-center">
                                <div className='card-body p-5 text-center'>
                                    <h1 className='text-center'>Update {user.name}</h1>
                                    <img src={User} alheight="50" width="130" />
                                    <br />
                                </div>
                                <div className='form-group text-center'>
                                    <div className="mb-3">
                                        <label htmlFor="inputName" className="form-label">Name</label>
                                        <input type="text" defaultValue={user.name} className='form-control' id="inputName" />
                                    </div>
                                    <br />
                                    <div className="mb-3">
                                        <label htmlFor="inputSurname" className="form-label">Surname</label>
                                        <input type="text" defaultValue={user.surname} className='form-control' id="inputSurname" />
                                    </div>
                                    <br />
                                    <div className="mb-3">
                                        <label htmlFor="inputPhone" className="form-label">Phone</label>
                                        <input type="number" defaultValue={user.phone} className='form-control' id="inputPhone" />
                                    </div>
                                    <br />
                                    <div className="mb-3">
                                        <label htmlFor="inputEmail" className="form-label">Email</label>
                                        <input type="text" defaultValue={user.email} className='form-control' id="inputEmail" />
                                    </div>
                                    <br />
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <Link to="/dashboard/users">
                                            <button onClick={() => updateUser()} className="btn btn-success">UPDATE</button>
                                        </Link>
                                        <Link to="/dashboard/users">
                                            <button className="btn btn-danger">Cancel</button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}