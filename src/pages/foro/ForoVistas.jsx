import React, { useState, useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './foro.css'
import { AuthContext } from '../../index'
export const ForoVistas = ({name,description,id,getForo,update,eliminar}) => {
  const { setLoggedIn, dataUser } = useContext(AuthContext);

  const navigate = useNavigate();
 return (
    <>
    <div className="example-2 card1">
      <div className="wrapper">
        <div className="header">
        {
          dataUser.role == 'ADMIN' ? (
              <li>
            
    <button type="button"  onClick={update} class="btn btn-info">Update</button>
    
    <button type="button"  onClick={eliminar} class="btn btn-danger">Delete</button>
              </li>
          ) : <></>
        }


        </div>
        <div className="data">
          <div className="content">
            
   
            <h1 className="title">
              <a href="#">Tema : {name}</a>
            </h1>
            <p className="text">
              Descripción:  {description}
            </p>
            <button type="button" onClick={getForo} className="button btn btn-outline-info">Go</button>
           
          </div>
        </div>
      </div>
    </div>
    
  </>
  
  )
}
