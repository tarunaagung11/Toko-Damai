import React, { useState } from "react";
import { Card, Checkbox } from "flowbite-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Waveline from "../assets/Damairun/WAVELINE.png";

const Registration = () => {
  const [title, setTitle] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [nik, setNik] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [ukuranJersey, setUkuranJersey] = useState("");
  const [kategori, setKategori] = useState("");
  const [kontak, setKontak] = useState("");
  const [kontakDarurat1, setKontakDarurat1] = useState("");
  const [kontakDarurat2, setKontakDarurat2] = useState("");
  const [namaBib, setNamaBib] = useState("");
  const [group, setGroup] = useState("");
  const [golonganDarah, setGolonganDarah] = useState("");
  const [pekerjaan, setPerkerjaan] = useState("");
  const [penyakit, setPenyakit] = useState("");
  const [info, setInfo] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveRegistration = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("jenisKelamin", jenisKelamin);
    formData.append("nik", nik);
    formData.append("tempatLahir", tempatLahir);
    formData.append("tanggalLahir", tanggalLahir);
    formData.append("alamat", alamat);
    formData.append("email", email);
    formData.append("ukuranJersey", ukuranJersey);
    formData.append("kontak", kontak);
    formData.append("kontakDarurat1", kontakDarurat1);
    formData.append("kontakDarurat2", kontakDarurat2);
    formData.append("namaBib", namaBib);
    formData.append("group", group);
    formData.append("golonganDarah", golonganDarah);
    formData.append("pekerjaan", pekerjaan);
    formData.append("penyakit", penyakit);
    formData.append("info", info);
    formData.append("kategori", kategori);
    try {
      await axios.post("http://localhost:5000/registrations", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });

      navigate("/successmessage");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section
        className=" dark:bg-gray-900"
        style={{ backgroundImage: `url(${Waveline})` }}
      >
        <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
          <h2 className="mb-4 text-center text-xl font-bold text-white dark:text-white">
            Registration
          </h2>
          <form onSubmit={saveRegistration}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="Name"
                  className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                  Nama Lengkap
                </label>

                <input
                  type="text"
                  name="name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Nama Lengkap"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="JenisKelamin"
                  className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                  Jenis Kelamin
                </label>
                <select
                  name="jenisKelamin"
                  as="select"
                  value={jenisKelamin}
                  onChange={(e) => setJenisKelamin(e.target.value)}
                  id="jenisKelamin"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                >
                  <option value="Pilih">Pilih Jenis Kelamin</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="nik"
                  className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                  Nomor Identitas (KTP/SIM/Passport)
                </label>
                <input
                  type="text"
                  name="nik"
                  value={nik}
                  onChange={(e) => setNik(e.target.value)}
                  id="nik"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Nomor Identitas"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="TempatLahir"
                  className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                  Tempat Lahir
                </label>
                <input
                  type="text"
                  name="tempatLahir"
                  value={tempatLahir}
                  onChange={(e) => setTempatLahir(e.target.value)}
                  id="tempatLahir"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Tempat Lahir"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="tanggal"
                  className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  name="tanggal"
                  value={tanggalLahir}
                  onChange={(e) => setTanggalLahir(e.target.value)}
                  id="tanggal"
                  className=" block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="alamat"
                  className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                  Alamat Lengkap
                </label>
                <input
                  type="text"
                  name="alamat"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  id="alamat"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Alamat"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Email"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="kontak"
                  className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                  Nomor Kontak/Whatsapps
                </label>
                <input
                  type="text"
                  name="kontak"
                  value={kontak}
                  onChange={(e) => setKontak(e.target.value)}
                  id="kontak"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Kontak"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="UkuranJersey"
                  className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                  Ukuran Jersey
                </label>
                <select
                  name="ukuranJersey"
                  as="select"
                  value={ukuranJersey}
                  onChange={(e) => setUkuranJersey(e.target.value)}
                  id="ukuranJersey"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                >
                  <option value="Pilih">Pilih Ukuran</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="X">X</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="Kategori"
                  className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                  Kategori Lomba
                </label>
                <select
                  name="kategori"
                  as="select"
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  id="kategori"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                >
                  <option value="Pilih">Pilih Kategori</option>
                  <option value="5K">5K</option>
                  <option value="10K">10K</option>
                  <option value="HM21K">Half Marathon 21K</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="KontakDarurat1"
                  className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                  Kontak Darurat 1
                </label>
                <input
                  type="text"
                  name="kontakDarurat1"
                  value={kontakDarurat1}
                  onChange={(e) => setKontakDarurat1(e.target.value)}
                  id="kontakDarurat1"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Kontak Darurat 1"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="KontakDarurat2"
                  className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                  Kontak Darurat 2
                </label>
                <input
                  type="text"
                  name="kontakDarurat2"
                  value={kontakDarurat2}
                  onChange={(e) => setKontakDarurat2(e.target.value)}
                  id="kontakDarurat2"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Kontak Darurat 2"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="namaBib"
                  className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                  Nama di Nomor Dada/BIB
                </label>
                <input
                  type="text"
                  name="namaBib"
                  value={namaBib}
                  onChange={(e) => setNamaBib(e.target.value)}
                  id="namaBib"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Nama di Nomor Dada/BIB"
                  required=""
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="Group"
                  className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                  Group Lari/Komunitas/Instansi (Jika tidak ada isi: - )
                </label>
                <input
                  type="text"
                  name="group"
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                  id="Group"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Group Lari/Komunitas/Instansi"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="GolonganDarah"
                  className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                  Golongan Darah
                </label>
                <select
                  name="golonganDarah"
                  as="select"
                  value={golonganDarah}
                  onChange={(e) => setGolonganDarah(e.target.value)}
                  id="golonganDarah"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                >
                  <option value="Pilih">Pilih Golongan Darah</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="AB">AB</option>
                  <option value="O">O</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="Pekerjaan"
                  className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                  Pekerjaan
                </label>
                <input
                  type="text"
                  name="pekerjaan"
                  value={pekerjaan}
                  onChange={(e) => setPerkerjaan(e.target.value)}
                  id="pekerjaan"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Pekerjaan"
                  required=""
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="Penyakit"
                  className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                  Riwayat Penyakit
                </label>
                <input
                  type="text"
                  name="penyakit"
                  value={penyakit}
                  onChange={(e) => setPenyakit(e.target.value)}
                  id="penyakit"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Riwayat Penyakit"
                  required=""
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="Info"
                  className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                  Tahu Event ini darimana(Sosmed/Flyer/Keluarga/Teman)
                </label>
                <input
                  type="text"
                  name="info"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                  id="info"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Tahun Event ini darimana"
                  required=""
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="accept" defaultChecked />
                <label htmlFor="accept" className="flex text-white">
                  Dengan ini menyatakan&nbsp; dengan sesungguhnya bahwa saya
                  dalam keadaan sehat dan sanggup untuk mengikuti event Damai
                  Half Marathon 2025. Apabila di saat kegiatan terjadi sesuatu
                  yang menimpa diri saya, maka saya maupun keluarga tidak akan
                  menuntut apapun terhadap panitia penyelenggara.
                </label>
              </div>
              <Card className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Pembayaran melalui
                </h5>
                <p className="font-semibold text-black">
                  Bank BCA <br></br>
                  No. Rek. 791 171 2206 <br></br>
                  a/n PT ANOA RUNNERS KENDARI
                </p>
              </Card>
              <div className=" grid justify-center">
                <h1 className=" m-1 text-center font-semibold text-white">
                  Bukti Pembayaran
                </h1>
                <div className="flex w-full items-center justify-center">
                  <label
                    htmlFor="dropzone-file"
                    className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <svg
                        className="mb-4 size-8 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={loadImage}
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className=" mt-4 inline-flex h-10 w-full items-center justify-center rounded-lg bg-blue-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600 focus:ring-4 sm:mt-6"
                >
                  Submit
                </button>
              </div>
              <div className="w-full">
                {preview ? (
                  <figure className=" size-[300px] place-self-center">
                    <img src={preview} alt="Preview Image" />
                  </figure>
                ) : (
                  ""
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Registration;
