import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export const UpdateForo = () => {
  const navigate = useNavigate();
  //Aqui creamos a obtener los datos y tendremos el token de la persona
  const [foro, setForo] = useState([{}])
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  //aqqui creamos la constante de id el cual cambiera el valor dependiedo del id del foro
  const { id } = useParams();
  //aqui usamos el metodo logOut para pooder salir de nutro update hacia la pagina de foro

  const logOut = () => {
    /*     pero el valor se ira junto con los cambios que hayamos hecho */
    updateProduct()
    navigate('/dashboard/foro')


  }

  //aqui usamos el metodo logOut para pooder salir de nutro update hacia la pagina de foro

  const close = () => {

    navigate('/dashboard/foro')


  }



  //Aqui usamos el metodo de getForo el cual nos permite pooder obtenr el valor de un solo foro
  const getForo = async () => {
    try {
      //aqui llamos al metodo dentro dell back
      const { data } = await axios(`http://localhost:3000/foro/getForo/${id}`, { headers: headers })
      setForo(data.foro)
    } catch (err) {
      console.error(err);
    }
  }

  //Aqui obtenemos el valor de nuestro foro y hacemos la actualizacion 

  const updateProduct = async () => {
    try {
      let updatedForo = {
        //aqui hacemos la obtension de datos 
        description: document.getElementById('description').value,

      }
      //aqui hacemos llamdao al metod para poder obtener el valor del producto y poder cambiarlo
      const { data } = await axios.put(`http://localhost:3000/foro/update/${id}`, updatedForo, { headers: headers })
      console.log(data)
      getForo()
    } catch (err) {
      console.error(err)
    }
  }


  useEffect(() => { getForo() }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-8 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5" id="carta">
              <div className="card-body p-4 p-sm-10">
                <h5 className="card-title text-center fw-light">{foro.name}</h5>
                <div className=" text-center">
                  <lord-icon
                    src="https://cdn.lordicon.com/qtqvorle.json"
                    trigger="loop"
                    delay="4000"
                    colors="outline:#121331,primary:#646e78,secondary:#ebe6ef,tertiary:#4cb4fd"
                    style={{ width: "150px", height: "150px" }}>
                  </lord-icon>
                </div>

                <form>

                  <div className="mb-3">
                    <textarea defaultValue={foro.description} className="form-control" id="description" rows="3"></textarea>
                  </div>

                  {/*llamamos al metodo logOut para poder regresar a la pagina foro pero ya con los cambios hechos */}
                  <div className="d-grid">
                    <button onClick={() => logOut()} className="btn btn-primary btn-login text-uppercase fw-bold" type="submit"  >UPDATE</button>
                  </div>


                  <hr className="my-4" />
                  <div className="d-grid mb-2">
                    {/* aqui estamos obteniendo el metodo close y regresamos a nuestra pagina de foro
                    sin ningun cambio solo cancelnado la accion
                    */}
                    <div className="d-grid mb-2">
                      <button onClick={close} className="btn btn-outline-danger" type="submit"><i className="fa-solid fa-ban"></i> CANCEL</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
} 