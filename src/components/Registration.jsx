import React from "react";
import { useForm } from "react-hook-form";
import { FileInput, Label } from "flowbite-react";

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
          <h2 className="mb-4 text-center text-xl font-bold text-gray-900 dark:text-white">
            Registration
          </h2>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="Nama"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nama
                </label>
                <input
                  type="text"
                  {...register("nama", { required: true })}
                  id="nama"
                  className=" block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Name"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="tanggal"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  {...register("tanggal", { required: true })}
                  id="tanggal"
                  className=" block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="tanggal"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="alamat"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Alamat
                </label>
                <input
                  type="text"
                  {...register("alamat", { required: true })}
                  id="alamat"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Alamat"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="kontak"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Kontak
                </label>
                <input
                  type="text"
                  {...register("kontak", { required: true })}
                  id="kontak"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Kontak"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="Kategori"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Kategori
                </label>
                <select
                  {...register("kategori", { required: true })}
                  id="kategori"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                >
                  <option value="5K">5K</option>
                  <option value="10K">10K</option>
                  <option value="HM21">Half Marathon 21K</option>
                </select>
              </div>

              <div className=" grid justify-center">
                <h1 className=" m-1 text-center font-semibold">
                  Bukti Pembayaran
                </h1>
                <div className="flex w-full items-center justify-center">
                  <Label
                    htmlFor="dropzone-file"
                    className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5 ">
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
                        SVG, PNG, JPG or GIF (MAX. 1 mb)
                      </p>
                    </div>
                    <FileInput id="dropzone-file" className="hidden" />
                  </Label>
                </div>
                <button
                  type="submit"
                  className=" mt-4 inline-flex items-center justify-center rounded-lg bg-blue-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600 focus:ring-4 sm:mt-6"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Registration;
