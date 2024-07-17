import axios from "axios";
import { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import HeaderComponent from "../Components/HeaderComponent";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [processing, setProcessing] = useState(false);
  const fileInputRef = useRef(null);
  const { isAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  if (!isAuthenticated) {
    toast.error("Login to Post!");

    setTimeout(() => {
      window.location = "/login";
    }, 1500);
  }

  const imageHandler = (e) => {
    const files = e.target.files;
    let fileList = Object.values(files);
    const imageArr = [];
    const previewArr = [];
    fileList.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        previewArr.push(reader.result);
        imageArr.push(file);
        setImages(imageArr);
        setImagePreview(previewArr);
      };
    });
  };

  const handlePost = async (e) => {
    e.preventDefault();
    console.log(title);
    console.log(Description);
    console.log(price);
    console.log(Category);
    console.log(images[0]);

    setProcessing(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("Description", Description);
    formData.append("price", price);
    formData.append("Category", Category);
    formData.append("images", images[0]);
    // images.map((image) => {
    //   formData.append("images", image);
    // });

    try {
      const { data } = await axios.post(
        "https://healthcare-backend-sjtm.onrender.com/api/v1/post/post",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      setCategory("");
      setDescription("");
      setPrice("");
      setTitle("");
      setImagePreview([]);
      setImages([]);
      window.location = "/";
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response);
    } finally {
      setProcessing(false);
    }
  };
  //         {processing && <div>{<BeatLoader size={50} color="gray" />}</div>}

  const handleClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
  {!isAuthenticated ? (
    <div className="bg-base-100 min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-red-600">Not authorized</h1>
    </div>
  ) : (
    <div>
      <HeaderComponent />
      <div
        id="drawer-update-product-default"
        className="z-40 p-4 bg-white dark:bg-gray-800 pt-10"
        tabIndex="-1"
        aria-labelledby="drawer-label"
        aria-hidden="true"
      >
        <div className="md:w-1/2 mx-auto pt-10">
          <h5
            id="drawer-label"
            className="inline-flex items-center mb-6 text-lg font-semibold text-gray-600 uppercase dark:text-gray-400"
          >
            Book Appointment
          </h5>
          <div className="">
            <div className="image-container flex gap-2 overflow-hidden flex-wrap">
              {imagePreview.length > 0 ? (
                imagePreview.map((url, index) => (
                  <div
                    key={index}
                    className="empty-box h-32 w-32 bg-slate-50 rounded-md overflow-hidden shadow-md"
                  >
                    <img
                      src={url}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))
              ) : (
                <div className="empty-box border dark:bg-base-100 border-gray-400 flex justify-center items-center h-32 w-32 bg-slate-50 rounded-md shadow-md">
                  IMG
                </div>
              )}
            </div>
            <div>
              <div
                className="empty-box border border-gray-400 flex flex-col text-center justify-center items-center h-32 w-32 dark:bg-base-100 bg-slate-50 rounded-md cursor-pointer hover:bg-slate-100 transition ease-in-out duration-200 shadow-md"
                onClick={handleClick}
              >
                <div className="text-2xl font-bold">+</div>
                <div className="mt-1">Upload IMG</div>
                <input
                  type="file"
                  className="hidden"
                  multiple
                  ref={fileInputRef}
                  onChange={imageHandler}
                />
              </div>
            </div>
          </div>

          <form onSubmit={handlePost}>
            <div className="space-y-6 mt-10">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="title"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your name"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Phone number"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="doctor"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Doctor
                </label>
                <input
                  type="text"
                  name="doctor"
                  id="doctor"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Doctor"
                  required
                  onChange={(e) => setDoctor(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter description here"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center w-full pb-4 mt-4 space-x-4 sm:px-4 sm:mt-0">
              <button
                type="submit"
                className="w-full justify-center mt-4 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
        {processing && (
          <div className="flex justify-center mt-6">
            <BeatLoader size={50} color="gray" />
          </div>
        )}
      </div>
    </div>
  )}
</>
  );
};

export default CreatePost;
