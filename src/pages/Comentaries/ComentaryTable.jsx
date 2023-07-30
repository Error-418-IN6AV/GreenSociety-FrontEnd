import React, { useState, useEffect, useContext } from 'react';
import { Comentary } from './Comentary';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export const ComentaryTable = () => {
  const [comentary, setComentary] = useState([]);
  const [foro, setForo] = useState({});
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [likedCommentIds, setLikedCommentIds] = useState([]);
  const [dislikedCommentIds, setdisLikedCommentIds] = useState([]);
  const navigate = useNavigate();

  const headers = {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  };

  const { id } = useParams();

  const add = async () => {
    try {
      let comment = {
        description: document.getElementById('description').value,
        foro: foro._id,
      };
      const { data } = await axios.post('http://localhost:3000/comment/add', comment, { headers });
      Swal.fire('Your work has been saved', data.message, 'success')
      fetchComments(); // Llama a la función fetchComments para obtener los comentarios actualizados
    } catch (err) {
      Swal.fire('Oops...', err.response.data.message, 'error')
    }
  };

  const updateComment = async (commentId, updatedDescription) => {
    try {
      const updatedComment = {
        description: updatedDescription,
      };
      await axios.put(`http://localhost:3000/comment/update/${commentId}`, updatedComment, { headers });
      fetchComments(); // Llama a la función fetchComments para obtener los comentarios actualizados
      setEditingCommentId(null);
    } catch (error) {
      console.error('Error al actualizar el comentario:', error);
    }
  };


  const deleteComentary = async (id) => {
    try {
      Swal.fire({
        title: 'Are you sure to delete this product',
        icon: 'warning',
        showConfirmButton: true,
        showDenyButton: true,
      }).then(async (confirmDelete) => {
        if (confirmDelete.isConfirmed) {
          const { data } = await axios.delete(`http://localhost:3000/comment/delete/${id}`, { headers }).catch(
            (err) => {
              Swal.fire('Oops...', err.message.data.message, 'error')
            })
          fetchComments()
          Swal.fire(`${data.message}`, '', 'success')
        } else {
          Swal.fire('No warries!', '', 'success')
        }
      })

    } catch (err) {
      console.log(err)
      Swal.fire('Oops...', err.response.data.message, 'error')
    }

  }



  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/comment/get/${id}`, { headers });
      if (data.comentary) {
        setComentary(data.comentary);
        console.log(data.comentary);
      }
    } catch (error) {
      console.error('Error al cargar los comentarios:', error);
    }
  };

  const getForo = async () => {
    try {
      const { data } = await axios(`http://localhost:3000/foro/getForo/${id}`, { headers });
      setForo(data.foro);
    } catch (err) {
      console.error(err);
    }
  };


  const addLike = async (id) => {
    try {
      // Verificar si el comentario ya ha sido dado like
      if (likedCommentIds.includes(id)) {

        return;
      }

      const { data } = await axios.put(`http://localhost:3000/comment/updateLike/${id}`, null, {
        headers: { Authorization: localStorage.getItem('token') },
        withCredentials: true,
      });
      fetchComments();
      setLikedCommentIds([...likedCommentIds, id]); // Agregar el ID del comentario al estado local de comentarios con like
    } catch (err) {
      console.error(err);
    }
  };

  const addDislike = async (id) => {
    try {
      // Verificar si el comentario ya ha sido dado dislike
      if (dislikedCommentIds.includes(id)) {

        return;
      }

      const { data } = await axios.put(`http://localhost:3000/comment/updateDislike/${id}`, null, {
        headers: { Authorization: localStorage.getItem('token') },
        withCredentials: true,
      });
      fetchComments();
      setdisLikedCommentIds([...dislikedCommentIds, id]); // Agregar el ID del comentario al estado local de comentarios con dfislike
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchComments(); // Llama a la función fetchComments para obtener los comentarios iniciales
    getForo();
  }, []);

  useEffect(() => {
    setUpdatedDescription(''); // Reiniciar el campo de descripción al cargar nuevos comentarios
  }, [comentary]);

  return (

    <div className="container mt-5">
      <div className="row  d-flex justify-content-center">
        <div className="col-md-8">
          <div className="headings d-flex justify-content-between align-items-center mb-3">
            <h1>{foro.name}</h1>
            <div className="buttons">
              <span className="badge bg-white d-flex flex-row align-items-center">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Send message
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Post a Comment
                        </h1>

                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">

                            <textarea
                              className="form-control"
                              id="description"

                              value={updatedDescription}
                              onChange={(e) => setUpdatedDescription(e.target.value)}
                            />
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary" onClick={add}>
                          Send message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </span>
            </div>
          </div>
          {comentary.map(({ _id, name, description, like, dislike, fecha, user }) => (
            <Comentary
              key={_id}
              _id={_id}
              name={name}
              description={description}
              addLike={() => addLike(_id)}
              dislike={dislike}
              addDislike={() => addDislike(_id)}
              fecha={fecha}
              user={user}
              like={like}
              eliminar={() => deleteComentary(_id)}
              updatedDescription={updatedDescription}
              setUpdatedDescription={setUpdatedDescription}
              update={(commentId, updatedDescription) => updateComment(commentId, updatedDescription)}
              fetchComments={fetchComments}
            />
          ))}


        </div>
      </div>
    </div>



  );
};