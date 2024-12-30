import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RegistrationList = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    getRegistrations();
  }, []);

  const getRegistrations = async () => {
    const response = await axios.get("http://localhost:5000/registrations");
    setRegistrations(response.data);
  };

  const deleteRegistration = async (registrationId) => {
    try {
      await axios.delete(
        `http://localhost:5000/registrations/${registrationId}`,
      );
      getRegistrations();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="columns is-multiline mt-2">
        {registrations.map((registration) => (
          <div className="column is-one-quarter" key={registration.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={registration.url} alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{registration.name}</p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{registration.tanggalLahir}</p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{registration.alamat}</p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{registration.kontak}</p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{registration.kategori}</p>
                  </div>
                </div>
              </div>

              <footer className="card-footer">
                <Link
                  to={`edit/${registration.id}`}
                  className="card-footer-item"
                >
                  Edit
                </Link>
                <a
                  onClick={() => deleteRegistration(registration.id)}
                  className="card-footer-item"
                >
                  Delete
                </a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistrationList;
