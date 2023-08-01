import { Navbar } from '../components/Navbar';
import React, { useContext, useState } from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../index'
import '../pages/HomePage/style.css'

export const DashboardPage = () => {
    const { setLoggedIn, dataUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(true)


    const logOut = () => {
        localStorage.clear()
        setLoggedIn(false)
        navigate('/login')
    }

    return (
        <>
        <Navbar></Navbar>
            <div>
                <section id='content'>
                    <Outlet></Outlet>
                </section>
            </div>
        </>
    )
}