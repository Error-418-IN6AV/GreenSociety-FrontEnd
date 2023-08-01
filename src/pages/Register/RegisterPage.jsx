import { Navbar } from '../../components/Navbar'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png.png'
import Logo2 from '../../assets/img/Green_Simple_Modern_Line_Ecology_and_Environment_Logo__2_-removebg-preview.png'
import '../Das.css'
import Swal from 'sweetalert2'

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    surname: '',
    username: '',
    password: '',
    phone: '',
    email: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const register = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post('http://localhost:3000/user/register', form)
      Swal.fire('Successful registration', data.message, 'success')
      if (data.message) {
        navigate('/login')
      }
    } catch (err) {
      console.log(err)
      Swal.fire('Oops...', err.response.data.message, 'error')
    }
  }

  return (
    <>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <img
              src={Logo2}
              alt="" />
            <a href=""> Green Society</a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>*/}
          <nav id="navbar" className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to='/login'>
                      <div className="getstarted scrollto">
                        Login
                      </div>
                    </Link>

                  </li>
                  <li className="nav-item">
                    <Link to='/register'>
                      <div className="getstarted scrollto" >
                        Register
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <i className="bi bi-list mobile-nav-toggle" />
            </div>
          </nav>
        </div>
      </header>
      <br />
      <section className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img src={Logo} alt="Sample photo" className="img-fluid" />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="text-center mb-5 text-uppercase">Register</h3>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-floating">
                          <input onChange={handleChange} type="text" name='name' className="form-control" placeholder='text' />
                          <label className="form-label" htmlFor="">Name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-floating">
                          <input onChange={handleChange} type="text" name='surname' className="form-control" placeholder='text' />
                          <label className="form-label" htmlFor="">Surname</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-floating">
                          <input onChange={handleChange} type="text" name='username' className="form-control" placeholder='text' />
                          <label className="form-label" htmlFor="">Username</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-floating">
                          <input onChange={handleChange} type="password" name='password' className="form-control" placeholder='password' />
                          <label className="form-label" htmlFor="">Password</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-floating">
                      <input onChange={handleChange} type="number" name='phone' className="form-control" placeholder='number' />
                      <label className="form-label" htmlFor="">Phone</label>
                    </div>
                    <br />
                    <div className="form-floating">
                      <input onChange={handleChange} type="text" name='email' className="form-control" placeholder='text' />
                      <label className="form-label" htmlFor="">Email</label>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">
                      <button onClick={register} type="button" className="btn btn-success">Register</button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">Have already an account?
                      <Link to='/login' className="fw-bold text-body">Login here</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
