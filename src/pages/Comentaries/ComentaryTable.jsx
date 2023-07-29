import React, { useState, useEffect, useContext } from 'react';
import { Comentary } from './Comentary';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


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
      alert(data.message);
      fetchComments(); // Llama a la función fetchComments para obtener los comentarios actualizados
    } catch (err) {
      alert(err.response.data.message);
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
        let confirmDelete = confirm('Are you sure to delete this account?')
        if (confirmDelete) {
            const { data } = await axios.delete(`http://localhost:3000/comment/delete/${id}`,{headers})
            fetchComments()
            alert('Deleted Sucessfully')
        }
    } catch (err) {
        console.error(err)
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
    <div className="main">
      <main className="comentaries">
        <h1>{foro.name}</h1>
      {comentary.map(({ _id, name, description, like, dislike, fecha, user }) => (
  <Comentary
    key={_id}
    _id={_id}
    name={name}
    description={description}
    addLike={() => addLike(_id)} // Llamar a la función addLike pasando el ID del comentario
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
      </main>
      <div className="form3-container">
        <form className='form-MainCLass'>
          <div className="form3-group">
            <h4 className='NameUser'>Leave a comment</h4>
            <textarea
              name="msg"
              id="description"
              cols={30}
              rows={5}
              className="form3-control"

              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
            />
          </div>
          <div className="form3-group">
            <button type="button" id="post" className="btn" onClick={add}>
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};