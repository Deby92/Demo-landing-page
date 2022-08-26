import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/profile.css";
import { FaInstagram, FaFacebook, FaTwitterSquare, FaLinkedin, FaPhone, FaEnvelope, FaUser, FaUserEdit, FaStar, FaListUl } from 'react-icons/fa';


const Profile = () => {


  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-lg-4'>
          <img
            style={{ height: 200, width: 200 }}
            className='img mt-5 mx-5 img-thumbnail'
            src= 'https://i.pinimg.com/280x280_RS/12/75/75/12757564e7b83387bb5fc7634db783a5.jpg'
            alt='profile pic'
            id="img-profile"
          />
        </div>
        <div className='col-lg-7 ms-5 p-3'
            style={{textAlign: "center" }}>
          <table className='table p-3'>
            <thead>
              <tr>
                <th scope='col'><h1 className='col mb-4'>Informacion Personal</h1></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'><FaUser /> &nbsp; Nombre</th>
                <td></td>
     
              </tr>
              <tr>
                <th scope='row'><FaUserEdit /> &nbsp; Apellido</th>
                <td></td>
 
              </tr>
              <tr>
                <th scope='row'><FaEnvelope /> &nbsp; Email</th>
                <td></td>

              </tr>
              <tr>
                <th scope='row'><FaPhone /> &nbsp;Numero de telefono</th>
                <td></td>
             
              </tr>
              <tr>
                <th scope='row'><FaFacebook /> &nbsp; Facebook</th>
                <td></td>
             
              </tr>
              <tr>
                <th scope='row'><FaInstagram /> &nbsp; Instagram</th>
                <td></td>
              
              </tr>
              <tr>
                <th scope='row'><FaTwitterSquare /> &nbsp; Twitter</th>
                <td></td>
                
              </tr>
              <tr>
                <th scope='row'><FaLinkedin /> &nbsp; Linkedin</th>
                <td></td>
                
              </tr>
              <tr>
                <th scope='row'><FaListUl /> &nbsp; Categoria</th>
                <td>Insertar categoria</td>
                
              </tr>
              <tr>
                <th scope='row'><FaStar /> &nbsp; Topicos favoritos</th>
                <td>
                  <ul>
        
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='row d-flex pt-4'>
            <div className='col-md-2 mb-2 pt-3 float-start'><span className='btn btn-danger'>Atras</span></div>
            <div className='col-md-3 mb-2 pt-3 ms-auto'><span className='btn btn-info'>Actualizar informacion</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile