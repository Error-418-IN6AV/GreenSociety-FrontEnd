import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './Comentary.css'
import { AuthContext } from '../../Index'


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
    <>

      <div className="card p-3" id='comentary'>
        <div className="d-flex justify-content-between align-items-center">
          <div className="user flex-row align-items-center">
            <img
              src="/User.jpg"
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
                        value={updatedDescription}
                        onChange={handleDescriptionChange}
                      >

                      </textarea>
                    </div>
                    <br />
                    <button type="button" className="btn btn-info" onClick={handleUpdateClick} >Guardar</button>

                    <button type="button" className="btn btn-danger" onClick={handleCancelClick} >Cancelar</button>
                  </>
                ) : (

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

              <>
                <button type="button" className="btn btn-warning" onClick={handleEditClick} >Edit</button>
                <span className="dots" />
                <button onClick={eliminar} type="button" className="btn btn-danger">Eliminar</button>
                <span className="dots" />
              </>
            ) : null}

          </div>
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
