import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './foro.css'
import { AuthContext } from '../../index'
//aqui buscamos poder darle un valor a cada uno de nuestros elementos
export const ForoVistas = ({ name, description, id, getForo, update, eliminar }) => {

  //ese es un cosnt que utlizamos para poder visuzalizar los datso denteo de token
  const { setLoggedIn, dataUser } = useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <>
      <div className="example-2 card1">
        <div className="wrapper">
          <div className="header">
            {/*             estos son algunos botonoes que nos permitirsan alterar la forma de nuestros ForoVistas
            solo si estos tiene unn rol Admin de no ser asi no se mostraran a los clientes normales */}
            {
              dataUser.role == 'ADMIN' ? (
                <li>
                  {/*                   este boton nos redirige al apartado de update el cual nos ayudara a cambiar datos dentro de nuestro foro
 */}                  <button type="button" onClick={update} className="btn btn-info">Update</button>
                  {/* este boton nos permite poder eliminar cualquier foro junto con los comentarios que este contenga */}
                  <button type="button" onClick={eliminar} className="btn btn-danger">Delete</button>
                </li>
              ) : <></>
            }


          </div>
          <div className="data">
            <div className="content">
              {/* estos so los valores que se mostaran dentro de del foro */}

              <h1 className="title">
                <a href="#">Tema : {name}</a>
              </h1>
              <p className="text">
                Descripción:  {description}
              </p>
              {/*               este sera el boton que nos ayudara a entrar al foro sin importar que rol sea esete poddra agregar ciertso comentatios */}
              <button type="button" onClick={getForo} className="button btn btn-outline-info">Go</button>

            </div>
          </div>
        </div>
      </div>

    </>

  )
}