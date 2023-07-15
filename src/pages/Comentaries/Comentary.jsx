import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './Comentary.css'
import { AuthContext } from '../../index'

export const Comentary = ({ _id, name, fecha, description, user, like, dislike, addLike, addDislike, update, eliminar }) => {

  const { setLoggedIn, dataUser } = useContext(AuthContext);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  };

  const [comentary, setComentary] = useState([]);
  const [foro, setForo] = useState({});
  const { id } = useParams();

  const getForo = async () => {
    try {
      const { data } = await axios(`http://localhost:3000/foro/getForo/${id}`, { headers });
      setForo(data.foro);
    } catch (err) {
      console.error(err);
    }
  };

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

  const [editing, setEditing] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const handleEditClick = () => {
    setEditing(true);
    get();
  };

  const handleCancelClick = () => {
    setEditing(false);
    get();
  };

  const handleDescriptionChange = (e) => {
    setUpdatedDescription(e.target.value);
    get();
  };

  const handleUpdateClick = async () => {
    try {
      const updatedComment = {
        description: updatedDescription,
      };
      await axios.put(`http://localhost:3000/comment/update/${_id}`, updatedComment, { headers });
      setEditing(false);
      update(_id, updatedDescription); // Llama a la función de actualización proporcionada por props
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    getForo();
    get();
  }, []);

  return (
    <div className="comment text-justify float-left">
      <img
        src="/User.jpg"
        alt=""
        className="rounded-circle"
        width={40}
        height={40}
      />
      <h4 className='NameUser'>  {name}</h4>
      <br />
      <span>{new Date(fecha).toLocaleString()}</span>

      <br />
      <div className='like'>
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
          colors="outline:#ffffff,primary:#66a1ee,secondary:#f9c9c0"
          style={{ width: 50, height: 50 }}
          onClick={addDislike}
          type="button"
        ></lord-icon>
      </div>


      <br />
      {editing ? (
        // Formulario de edición
        <>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={5}
            className="form3-control"
            value={updatedDescription}
            onChange={handleDescriptionChange}
          ></textarea>
          <button type="button" className="btn btn-info" onClick={handleUpdateClick} >Guardar</button>

          <button type="button" className="btn btn-danger" onClick={handleCancelClick} >Cancelar</button>
        </>
      ) : (
        // Mostrar el comentario normalmente
        <p className="comment-description">{description}</p>
      )}

      <div>
        {dataUser._id === user && !editing ? (
          // Mostrar el botón de edición solo si el usuario actual es el autor del comentario y no se está editando actualmente
          <>
            <button type="button" className="btn btn-warning" onClick={handleEditClick} >Edit</button>        <button onClick={eliminar} type="button" className="btn btn-danger">Eliminar</button>


          </>



        ) : null}
      </div>

    </div>
  );
};
