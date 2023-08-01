import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CategoryTable } from './CategoryTable'
import Swal from 'sweetalert2'

export const PageCategory = () => {
  const [categories, setCategory, searchCategory] = useState([{}])
  const [idCategory, setIdCategory] = useState();
  const [formData, setFormData] = useState({
    name: '',
    description: ''

  })
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  const getCategories = async () => {
    try {
      const { data } = await axios('http://localhost:3000/category/getCategories', { headers: headers })
      if (data.categories) {
        setCategory(data.categories)
      }
    } catch (err) {
      console.log(err)
      throw new Error(err.response.message || 'Error getting Categories')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const addCategory = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post('http://localhost:3000/category/add', formData, { headers: headers })
      Swal.fire('Your work has been saved', data.message, 'success')
      getCategories();
      e.target.reset()
    } catch (err) {
      console.error(err);
      Swal.fire('Oops...', err.response.data.message, 'error')
      e.target.reset()
    }
  }

  const deleteCategory = async (id) => {
    try {
      Swal.fire({
        title: 'Are you sure to delete this category',
        icon: 'question',
        showConfirmButton: true,
        showDenyButton: true,
      }).then(async (confirmDelete) => {
        if (confirmDelete.isConfirmed) {
          const { data } = await axios.delete(`http://localhost:3000/category/delete/${id}`, { headers: headers }).catch(
            (err) => {
              Swal.fire('Oops...', err.response.data.message, 'error')
            })
          getCategories();
          Swal.fire(`${data.message}`, '', 'success')
        } else {
          Swal.fire('No worries!', '', 'success')
        }
      })
    } catch (err) {
      console.log(err)
      Swal.fire(
        'Oops...',
        err.response.data.message,
        'error'
      )
    }
  }



  useEffect(() => { getCategories(); }, [])
  return (
    <>
      <h1 className="fa-solid fa-bed">Category</h1><br />
      <div className='d-flex justify-content-center'>
        <button data-bs-toggle="modal" data-bs-target="#exampleModal1" className='btn btn-success' style={{ marginRight: '10px' }}>Add Category</button>
      </div>
      {/*empieza el modal de ADD*/}
      <div className='modal fade' id='exampleModal1' aria-label='exampleModalLabel' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h3 className='modal-title' id='exampleModalLabel'>Category</h3>
            </div>
            <div className="modal-body">
              <form onSubmit={(e) => addCategory(e)} id="formAdd">

                <div className="mb-3">
                  <label htmlFor="" className="form-label">Name</label>
                  <input onChange={handleChange} name='name' type="text" className="form-control" id="inputName" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">Description</label>
                  <input onChange={handleChange} name='description' type="text" className="form-control" id="inputDescription" required />
                </div>
                <div className='modal-footer'>
                  <button className='btn btn-danger' data-bs-dismiss='modal'>Close</button>
                  <button className='btn btn-success' data-bs-dismiss='modal' type='submit'>Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <table style={{ width: '85%', marginTop: '-1vh', marginLeft: '8vw' }} className="table table-dark table-striped-columns">
        <thead className="table-light table-bordered">
          <tr className='text-center'>
            <th>Name</th>
            <th>Description</th>
            <th>Accions</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            categories.map(({ _id, name, description }, i) => {

              const update = async (id) => {
                try {
                  let categoryUpdate = {
                    name: document.getElementById(`inputNameUp${id}`).value,
                    description: document.getElementById(`inputDesUp${id}`).value
                  }
                  const { data } = await axios.put(`http://localhost:3000/category/update/${idCategory}`, categoryUpdate, { headers: headers })
                  if (data.message) {
                    Swal.fire({
                      title: data.message, icon: 'success'
                    })
                  }
                  getCategories();
                  viuwUpdate();

                } catch (err) {
                  console.log(err);
                  Swal.fire(
                    'Oops...', err.respose.data.message, 'error'
                  )

                }
              }
              const viuwUpdate = async (idCategory) => {
                try {
                  setIdCategory(idCategory)
                  document.getElementById(`inputNameUp${idCategory}`).defaultValue = name,
                    document.getElementById(`inputDesUp${idCategory}`).defaultValue = description

                } catch (err) {
                }
              }


              return (
                <tr key={i}>
                  <CategoryTable
                    name={name}
                    description={description}
                  ></CategoryTable>
                  <td>
                    <div className='text-center'>
                      <svg onClick={() => viuwUpdate(_id)} data-bs-toggle="modal" data-bs-target={`#exampleModal2${_id}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className=" bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                      </svg>
                    </div>
                    <div className="modal fade" id={`exampleModal2${_id}`} aria-labelledby="exampleModalLabel" aria-hidden="true" >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Category</h5>
                          </div>
                          <div className="modal-body">
                            <form id="formUp">
                              <div className="mb-3">
                                <label htmlFor="inputNameUp" className="form-label">Name</label>
                                <input type="text" className="form-control" id={`inputNameUp${_id}`} required />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="inputDesUp" className="form-label">Description</label>
                                <input type="text" className="form-control" id={`inputDesUp${_id}`} required />
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-danger " data-bs-dismiss="modal">Close</button>
                            <button onClick={() => update(_id)} type="button" className="btn btn-success " data-bs-dismiss="modal">Save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className='text-center'>
                    <svg onClick={() => deleteCategory(_id)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </td>
                </tr>
              )

            })

          }
        </tbody>

      </table>
    </>
  )
}
