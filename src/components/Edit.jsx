import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditRegistration = () => {
  const [title, setTitle] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kontak, setKontak] = useState("");
  const [kategori, setKategori] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getRegistrationById();
  }, []);

  const getRegistrationById = async () => {
    const response = await axios.get(
      `http://localhost:5000/registrations/${id}`,
    );
    setTitle(response.data.name);
    setTanggalLahir(response.data.tanggalLahir);
    setAlamat(response.data.alamat);
    setKontak(response.data.kontak);
    setKategori(response.data.kategori);
    setFile(response.data.image);
    setPreview(response.data.url);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateRegistration = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("tanggalLahir", tanggalLahir);
    formData.append("alamat", alamat);
    formData.append("kontak", kontak);
    formData.append("kategori", kategori);

    try {
      await axios.patch(`http://localhost:5000/registrations/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={updateRegistration}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tanggal Lahir</label>
            <div className="control">
              <input
                type="date"
                className="input"
                value={tanggalLahir}
                onChange={(e) => setTanggalLahir(e.target.value)}
                placeholder="Tanggal Lahir"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Alamat</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Alamat"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Kontak</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kontak}
                onChange={(e) => setKontak(e.target.value)}
                placeholder="Kontak"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Kategori</label>
            <div className="control">
              <select
                className="input"
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
              >
                <option value="null">Pilih Kategori</option>
                <option value="5K">5K</option>
                <option value="10K">10K</option>
                <option value="HM21K">Half Marathon 21K</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                  <span className="file-cta">
                    <span className="file-label">Choose a file...</span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRegistration;
