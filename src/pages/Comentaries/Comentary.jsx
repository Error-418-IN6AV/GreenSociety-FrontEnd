import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './Comentary.css'
import { AuthContext } from '../../index'
import User from './User.jpg'


export const Comentary = ({ _id, name, fecha, description, user, like, dislike, addLike, addDislike, update, eliminar }) => {

  const { setLoggedIn, dataUser } = useContext(AuthContext);
  //Obtenemos los valores del token
  const headers = {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  };


  //aqui creamos un par de variables que nos ayudaran a poder visualizar el foro comentarios y obtener el valro del id
  const [comentary, setComentary] = useState([]);
  const [foro, setForo] = useState({});
  const { id } = useParams();

  //Aqui hacemos un get del foro al ucal pertenece nustros comentarios
  const getForo = async () => {
    try {
      const { data } = await axios(`http://localhost:3000/foro/getForo/${id}`, { headers });
      setForo(data.foro);
    } catch (err) {
      console.error(err);
    }
  };

  //ademas de que hacemos un get para obtener cada uno de nustros comentarios de nuestros comentarios
  const get = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/comment/get/${id}`, { headers });
      if (data.comentary) {
        setComentary(data.comentary);
        console.log(data.comentary);
      }
    } catch (error) {
      console.error('Error al cargar la imagen:', error);
    }
  };

  //creamos las cosntantes editing y es edtitng el las cuales son estados que n os ayudaran a poder crear un updatye

  const [editing, setEditing] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  //Este nos servira para poder dar un valor de true a nuestro estado de setEditing
  const handleEditClick = () => {
    setEditing(true);
    get();
  };
  //aqui haremos lo contrario que lo anterior y daremos un valor de falso a nuestro setEditing
  const handleCancelClick = () => {
    setEditing(false);
    get();
  };

  // Función para manejar el cambio en la descripción del comentario en el componente de actualización
  const handleDescriptionChange = (e) => {
    setUpdatedDescription(e.target.value); // Actualiza el estado "updatedDescription" con el valor del input
    get(); // Realiza una nueva llamada a la función "get" que obtiene los comentarios desde el servidor (esto podría no ser necesario en esta función).
  };

  // Función para manejar el clic en el botón de actualizar comentario
  const handleUpdateClick = async () => {
    try {
      // Crea un objeto con la descripción actualizada para enviar al servidor
      const updatedComment = {
        description: updatedDescription,
      };
      // Realiza una petición PUT al servidor para actualizar el comentario con el ID "_id" con los nuevos datos proporcionados
      await axios.put(`http://localhost:3000/comment/update/${_id}`, updatedComment, { headers });
      setEditing(false); // Cambia el estado "editing" a "false" para salir del modo de edición del comentario
      // Llama a la función "update" proporcionada por props con el ID del comentario y su descripción actualizada, para refrescar la lista de comentarios.
      update(_id, updatedDescription);
    } catch (error) {
      console.error(error); // Muestra cualquier error en la consola si ocurre algún problema durante la actualización del comentario.
    }
  };


  useEffect(() => {
    getForo();
    get();
  }, []);

  return (
    <>

      <div className="card p-3" id='comentary'>
        <div className="d-flex justify-content-between align-items-center">
          <div className="user flex-row align-items-center">
            <img
              src={User}
              width={30}
              className="user-img rounded-circle mr-2"
            />
            <span>{" "}
              <small className="font-weight-bold text-primary">
                &nbsp;&nbsp;{name}
              </small>{" "}
              <div
                style={{ fontSize: 20 }}
              >
                <br />
                {editing ? (
                  // Si "editing" es verdadero, muestra el formulario de edición
                  <>
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                        name="description"
                        cols={30}
                        rows={5}
                        style={{ fontSize: 20 }}
                        value={updatedDescription} // Asigna el estado "updatedDescription" al valor del textarea para mostrar la descripción actual
                        onChange={handleDescriptionChange} // Asigna la función "handleDescriptionChange" al evento onChange del textarea para actualizar el estado "updatedDescription" al escribir en el campo
                      ></textarea>
                    </div>
                    <br />
                    <button type="button" className="btn btn-info" onClick={handleUpdateClick}>Guardar</button> {/* Botón para guardar los cambios, llama a la función "handleUpdateClick" cuando se hace clic */}
                    <button type="button" className="btn btn-danger" onClick={handleCancelClick}>Cancelar</button> {/* Botón para cancelar la edición, llama a la función "handleCancelClick" cuando se hace clic */}
                  </>
                ) : (
                  // Si "editing" es falso, muestra el párrafo con la descripción actual
                  <p>{description}</p>
                )}

              </div>
            </span>
          </div>
          <small>{new Date(fecha).toLocaleString()}</small>
        </div>
        <div className="action d-flex justify-content-between mt-2 align-items-center">
          <div className="reply px-4">
            {dataUser._id === user && !editing ? (
              // Si el "_id" del usuario autenticado (dataUser._id) coincide con el "_id" del usuario del comentario (user)
              // Y el estado "editing" es falso, muestra los botones de edición (Editar y Eliminar)
              <>
                <button type="button" className="btn btn-warning" onClick={handleEditClick}>Edit</button> {/* Botón para editar el comentario, llama a la función "handleEditClick" cuando se hace clic */}
                <span className="dots" /> {/* Punto de separación */}
                <button onClick={eliminar} type="button" className="btn btn-danger">Eliminar</button> {/* Botón para eliminar el comentario, llama a la función "eliminar" cuando se hace clic */}
                <span className="dots" /> {/* Punto de separación */}
              </>
            ) : null}

          </div>
          {/*           Aqui es donde los comentarios obtendran un like o un dislike cada dato cambiara dependiendo el valro que obtenga */}
          <div className="icons align-items-center">
            {like}
            <lord-icon
              src="https://cdn.lordicon.com/hqrgkqvs.json"
              trigger="hover"
              colors="outline:#121331,primary:#f28ba8,secondary:#ebe6ef"
              style={{ width: 50, height: 50 }}
              onClick={addLike}
              type="button"
            ></lord-icon>
            {dislike}
            <lord-icon
              src="https://cdn.lordicon.com/qxjdtzah.json"
              trigger="hover"
              colors="outline:#0000,primary:#66a1ee,secondary:#f9c9c0"
              style={{ width: 50, height: 50 }}
              onClick={addDislike}
              type="button"
            ></lord-icon>
          </div>
        </div>
      </div>
    </>

  );
};