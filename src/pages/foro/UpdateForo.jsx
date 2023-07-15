import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export const UpdateForo = () => {
  const navigate = useNavigate();

  const [foro, setForo] = useState([{}])
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }


  const { id } = useParams();

  const logOut = () => {
    updateProduct()
    navigate('/dashboard/foro')


  }


  const close = () => {

    navigate('/dashboard/foro')


  }




  const getForo = async () => {
    try {
      const { data } = await axios(`http://localhost:3000/foro/getForo/${id}`, { headers: headers })
      setForo(data.foro)
    } catch (err) {
      console.error(err);
    }
  }

  const updateProduct = async () => {
    try {
      let updatedForo = {

        description: document.getElementById('description').value,

      }

      const { data } = await axios.put(`http://localhost:3000/foro/update/${id}`, updatedForo, { headers: headers })
      console.log(data)
      getForo()
    } catch (err) {
      console.error(err)
    }
  }


  useEffect(() => {getForo()}, []);
  return(
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
                style={{width:"150px",height:"150px"}}>
                </lord-icon>
                  </div>

                <form>

                <div className="mb-3">
                  <textarea defaultValue={foro.description} className="form-control" id="description" rows="3"></textarea>
                  </div>
                  <div className="d-grid">
                    <button onClick={() => logOut()} className="btn btn-primary btn-login text-uppercase fw-bold" type="submit"  >UPDATE</button>
                  </div>


                  <hr className="my-4" />
                  <div className="d-grid mb-2">

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