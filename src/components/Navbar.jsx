import { React, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../index'
import Logo from '../assets/img/Green_Simple_Modern_Line_Ecology_and_Environment_Logo__2_-removebg-preview.png'

export const Navbar = ({ _id }) => {
    const { setLoggedIn, dataUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear()
        setLoggedIn(false)
        navigate('/login')
    }

    return (
        <>
            <header id="header" className="">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto">
                        <img
                            src={Logo}
                            alt="" />
                        <a href=""> Green Society</a>
                    </h1>
                    <nav id="navbar" className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    {
                                        dataUser.role == 'ADMIN' ? (
                                            <li className="nav-item">
                                                <Link to='estadistic' className="nav-Link scrollto" href="">
                                                    Estadistic
                                                </Link>
                                            </li>
                                        ) : <></>
                                    }
                                    {
                                        dataUser.role == 'COLLABORATOR' ? (
                                            <li className="nav-item">
                                                <Link to='estadistic' className="nav-Link scrollto" href="">
                                                    Estadistic
                                                </Link>
                                            </li>
                                        ) : <></>
                                    }
                                    {
                                        dataUser.role == 'ADMIN' ? (
                                            <li className="nav-item">
                                                <Link to='users' className="nav-Link scrollto" href="">
                                                    Users
                                                </Link>
                                            </li>
                                        ) : <></>
                                    }
                                    {
                                        dataUser.role == 'COLLABORATOR' ? (
                                            <li className="nav-item">
                                                <Link to='users' className="nav-Link scrollto" href="">
                                                    Users
                                                </Link>
                                            </li>
                                        ) : <></>
                                    }
                                    {
                                        dataUser.role == 'ADMIN' ? (
                                            <li className="nav-item">
                                                <Link to='collaborator' className="nav-Link scrollto" href="">
                                                    Collaborators
                                                </Link>
                                            </li>
                                        ) : <></>
                                    }
                                    <li className="nav-item">
                                        <Link to='foro' className="nav-Link scrollto" href="">
                                            Forum
                                        </Link>
                                    </li>
                                    {
                                        dataUser.role == 'ADMIN' ? (
                                            <li className="nav-item">
                                                <Link to='category' className="nav-Link scrollto" href="">
                                                    Category
                                                </Link>
                                            </li>
                                        ) : <></>
                                    }
                                    {
                                        dataUser.role == 'COLLABORATOR' ? (
                                            <li className="nav-item">
                                                <Link to='category' className="nav-Link scrollto" href="">
                                                    Category
                                                </Link>
                                            </li>
                                        ) : <></>
                                    }
                                    <li className="nav-item">
                                        <Link to='product' className="nav-Link scrollto" href="">
                                            Product
                                        </Link>
                                    </li>
                                    {
                                        dataUser.role == 'CLIENT' ? (
                                            <li className="nav-item">
                                                <Link to='donation' className="nav-Link scrollto" href="">
                                                    Donation
                                                </Link>
                                            </li>
                                        ) : <></>
                                    }
                                    {
                                        dataUser.role == 'ADMIN' ? (
                                            <li className="nav-item">
                                                <Link to='donationdatail' className="nav-Link scrollto" href="">
                                                    Donation Detail
                                                </Link>
                                            </li>
                                        ) : <></>
                                    }
                                    {
                                        dataUser.role == 'COLLABORATOR' ? (
                                            <li className="nav-item">
                                                <Link to='donationdatail' className="nav-Link scrollto" href="">
                                                    Donation Detail
                                                </Link>
                                            </li>
                                        ) : <></>
                                    }
                                    {
                                        dataUser.role == 'CLIENT' ? (
                                            <li className="nav-item">
                                                <Link to='compra' className="nav-Link scrollto" href="">
                                                    Bill
                                                </Link>
                                            </li>
                                        ) : <></>
                                    }
                                    <li className="nav-item">
                                        <Link to='event' className="nav-Link scrollto" href="">
                                            Event
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link onClick={logOut} className="nav-Link scrollto" href="">
                                            Sign off
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-Link scrollto">
                                            Welcome: {dataUser.username}
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                            <i className="bi bi-list mobile-nav-toggle" />
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}
