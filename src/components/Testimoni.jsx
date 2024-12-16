import React from "react";
import Testi1 from "../assets/Testi1.jpg";
import Testi2 from "../assets/Testi2.jpg";
import Testi3 from "../assets/Testi3.jpg";

const Testimoni = () => {
  return (
    <div>
      <section className=" text-gray-600">
        <div className="container mx-auto px-5 py-24" bis_skin_checked="1">
          <div className="-m-4 flex flex-wrap" bis_skin_checked="1">
            <div className="mb-6 p-4 lg:mb-0 lg:w-1/3" bis_skin_checked="1">
              <div className="h-full text-center" bis_skin_checked="1">
                <img
                  alt="testimonial"
                  className="mb-8 inline-block size-20 rounded-full border-2 border-gray-200 bg-gray-100 object-cover object-center"
                  src={Testi1}
                />
                <p className="leading-relaxed text-white">
                  Toko Damai adalah tempat belanja terbaik di Kendari. Produk
                  lengkap, harga bersaing, dan pelayanan ramah. Saya sering
                  belanja grosir dan retail di sini, selalu puas dengan kualitas
                  barang dan kenyamanan berbelanja. Pilihan nomor satu di
                  Kendari!
                </p>
                <span className="mb-4 mt-6 inline-block h-1 w-10 rounded bg-indigo-500"></span>
                <h2 className=" text-sm font-medium tracking-wider text-white">
                  Rudi Setiawan
                </h2>
                <p className="text-gray-300">Pengusaha</p>
              </div>
            </div>
            <div className="mb-6 p-4 lg:mb-0 lg:w-1/3" bis_skin_checked="1">
              <div className="h-full text-center" bis_skin_checked="1">
                <img
                  alt="testimonial"
                  className="mb-8 inline-block size-20 rounded-full border-2 border-gray-200 bg-gray-100 object-cover object-center"
                  src={Testi2}
                />
                <p className="leading-relaxed text-white">
                  Saya selalu berbelanja di Toko Damai karena harga yang
                  terjangkau dan produk yang berkualitas. Pelayanan cepat dan
                  ramah, serta toko yang bersih dan teratur. Toko Damai adalah
                  supermarket yang sangat direkomendasikan di Kendari!
                </p>
                <span className="mb-4 mt-6 inline-block h-1 w-10 rounded bg-indigo-500"></span>
                <h2 className=" text-sm font-medium tracking-wider text-white">
                  Siti Rahma
                </h2>
                <p className="text-gray-300">Ibu Rumah Tangga</p>
              </div>
            </div>
            <div className="p-4 lg:mb-0 lg:w-1/3" bis_skin_checked="1">
              <div className="h-full text-center" bis_skin_checked="1">
                <img
                  alt="testimonial"
                  className="mb-8 inline-block size-20 rounded-full border-2 border-gray-200 bg-gray-100 object-cover object-center"
                  src={Testi3}
                />
                <p className="leading-relaxed text-white">
                  Sebagai pelanggan setia, saya selalu memilih Toko Damai untuk
                  memenuhi kebutuhan rumah tangga. Kualitas barangnya terjamin,
                  stok lengkap, dan harga bersaing. Toko ini memang pilihan
                  terbaik untuk berbelanja grosir dan retail di Kendari!
                </p>
                <span className="mb-4 mt-6 inline-block h-1 w-10 rounded bg-indigo-500"></span>
                <h2 className=" text-sm font-medium tracking-wider text-white">
                  Andi Prasetya
                </h2>
                <p className="text-gray-300">Karyawan Swasta</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimoni;
