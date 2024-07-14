import { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import HeaderComponent from "../Components/HeaderComponent";
import { CLOUDINARY_CDN } from "../Utils/constants";
import Footer from "../Components/Footer";
const SinglePost = () => {
  const [Post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getSinglePost = async () => {
      try {
        const { data } = await axios.get(
          `https://healthcare-backend-sjtm.onrender.com/api/v1/post/getsingleitem/${id}`,
          { withCredentials: true }
        );
        setPost(data.item);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        setPost([]);
      }
    };
    getSinglePost();
  }, []);
  const date = new Date(Post.createdOn).toString();

  return (
    <>
      <div className="dark:bg-base-100 bg-white">
        <HeaderComponent />
        <div className="max-w-screen-2xl container mx-auto mt-16 pt-10 mb-8 md:px-20 px-4 flex flex-col md:flex-col  dark:bg-base-100 dark:text-white bg-white text-black ">
          <div className="flex flex-col md:flex-row">
            <figure className="md:w-1/2 w-full ">
              {Post && Post.images && (
                <img src={CLOUDINARY_CDN + Post.images[0].url} className="" />
              )}
            </figure>
            <div className="ml-5 mt-4">
              <div>
                Category : <span>{Post.Category}</span>
              </div>
              <div className="card-title mt-8 text-9xl">
                <h1 className="text-4xl font-bold">{Post.title}</h1>
              </div>
              <p className="mt-5 text-2xl">₹{Post.price}</p>
              <div className="mt-8">
                <h1>Description: </h1>
                <p>{Post.Description}</p>
              </div>
            </div>
          </div>
          <div className="mt-4">Posted By: {Post.username}</div>
          <div className="mt-2">Posted on : {date}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SinglePost;
