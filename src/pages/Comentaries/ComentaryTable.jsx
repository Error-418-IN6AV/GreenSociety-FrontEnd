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
  const navigate = useNavigate();

  const headers = {
    //Obetenemos el valor del token esto para visualizar los ids
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  };

  const { id } = useParams();

  //Hacemos un add esto para agregar nuestros comentarios
  const add = async () => {
    try {
      let comment = {
        //aqui agregamos la descripccion denuestros comentarios y ademasn se agrega 
        //el valor de foro.id esto para poder darle el valor del foro al que pertenece
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
  /* aqui creamos la funcion agregar donde colocamos como parametros commentId , UpdateDesxription el cual
  obtiene el valro del comentario al cual queremos actualizar */
  const updateComment = async (commentId, updatedDescription) => {
    try {
      const updatedComment = {
        description: updatedDescription,
      };
      //hacemos un put de los valores y actualizamos la pagina
      await axios.put(`http://localhost:3000/comment/update/${commentId}`, updatedComment, { headers });
      fetchComments(); // Llama a la función fetchComments para obtener los comentarios actualizados
      setEditingCommentId(null);
    } catch (error) {
      console.error('Error al actualizar el comentario:', error);
    }
  };

  /* 
    aqui creamos la funcoin de deleteComentary el cual nos ayudara a poder eliminar el comentario 
    que hemos creado  */
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


  //fetchComments sireve como get el cual nos permite poder agregar y hacer update de nuestro comentario
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
  //el get foro nos sirve para poder obtener el id del foro al cual pertenece nustro commetario

  const getForo = async () => {
    try {
      const { data } = await axios(`http://localhost:3000/foro/getForo/${id}`, { headers });
      setForo(data.foro);
    } catch (err) {
      console.error(err);
    }
  };

  //el metodo addd like nos ayuda a poder actualizar ls pagina y al mismo tiemmpo agregar un like al  cometario
  const addLike = async (id) => {
    try {
      const { data } = await axios.put(`http://localhost:3000/comment/updateLike/${id}`, null);
      fetchComments();
    } catch (err) {
      console.error(err);
    }
  };

  //el metodo addd duislike nos ayuda a poder actualizar ls pagina y al mismo tiemmpo agregar un dislike al  cometario

  const addDislike = async (id) => {
    try {
      const { data } = await axios.put(`http://localhost:3000/comment/updateDislike/${id}`, null);
      fetchComments();
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
                {/*          Aqui se abrira el modal en donde podremos agregar nuestro coemntario al foro */}
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
                            {/*                      este es textarea el cual nos permite poder obtener el vaalor de del 
                            comentario que creamos ademas lo alamdena en updatedDescription */}
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
                        {/*                         este boton nos permite poder agregar nuestro comentario ademas de que 
                        nos ayuda a inicializar la funcion add */}
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
          {/*         Aqui realizaremos al mapeo de nuestro comentario refirigiendolos a cada uno de ellos */}
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