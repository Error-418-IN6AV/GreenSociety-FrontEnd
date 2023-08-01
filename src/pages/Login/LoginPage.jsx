import React, { useState, useContext } from 'react'
import { Navbar } from '../../components/Navbar'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../..'
import Logo from '../../assets/Logo.png.png'
import Logo2 from '../../assets/img/Green_Simple_Modern_Line_Ecology_and_Environment_Logo__2_-removebg-preview.png'
import '../Das.css'
import Swal from 'sweetalert2'

export const LoginPage = () => {
  const { loggedIn, setLoggedIn, setDataUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const logIn = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post('http://localhost:3000/user/login', form)
      Swal.fire('Welcome', data.message, 'success')
      if (data.message) {
        localStorage.setItem('token', data.token)
        setDataUser(data.userLogged)
        setLoggedIn(true)
        localStorage.setItem('ClaveSuperSecreta', JSON.stringify(data.userLogged))
        navigate('/dashboard')
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
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3 className="text-center mb-5 text-uppercase">Login</h3>
                    <form className="mx-1 mx-md-4">

                      <div className="form-floating">
                        <input onChange={handleChange} type="username" name='username' className="form-control" placeholder='text' />
                        <label className="form-label" htmlFor="">Username</label>
                      </div>
                      <br />
                      <div className="form-floating">
                        <input onChange={handleChange} type="password" name='password' className="form-control" placeholder='text' />
                        <label className="form-label" htmlFor="">password</label>
                      </div>
                      <br />
                      <br />
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 gap-2 d-md-flex">
                        <button onClick={logIn} type="button" className="btn btn-success">Login</button>
                        <Link to='/' type="button" className="btn btn-secondary">Home</Link>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">Don't have an account?
                        <Link to='/register' className="fw-bold text-body">Register here</Link></p>
                    </form>
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
