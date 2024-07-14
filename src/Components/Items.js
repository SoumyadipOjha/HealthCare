import { useContext, useEffect, useState } from "react";
import ItemBody from "./ItemBody";
import { Context } from "../main";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Items = ({ props, userid }) => {
  const { Post, setPost } = useContext(Context);
  const [filteredPosts, setFilteredPosts] = useState([]);
  // setFilteredPosts(Post);

  const handleDelete = async (itemId) => {
    try {
      const { data } = await axios.delete(
        "https://unicycle-backend.onrender.com/api/v1/post/delete/" + itemId,
        {
          withCredentials: true,
        }
      );
      setFilteredPosts((filteredPosts) =>
        filteredPosts.filter((itm) => itm._id != itemId)
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handlePost = () => {
    if (userid) {
      console.log(userid);
      let itm = Post.filter((item) => {
        if (item.createdBy === userid) {
          return item;
        }
      });
      console.log(filteredPosts);
      setFilteredPosts(itm);
    } else {
      if (props != 1) {
        setFilteredPosts(Post.slice(0, 8));
      }
      if (props == 1) {
        setFilteredPosts(Post);
      }
    }
  };
  useEffect(() => {
    handlePost();
  }, [Post, userid]);
  return (
    <div>
      <div className="flex justify-center text-2xl text-black dark:text-white ">
        Newly Posted Ads
      </div>
      <div className="max-w-screen-2xl  container mt-10 mb-10 md:px-20 px-4 flex flex-col md:flex-row flex-wrap items-center justify-center bg-white text-black dark:text-gray-300 dark:bg-base-100">
        {Post && Post.length > 0 ? (
          filteredPosts.map((item) => {
            return (
              <div className="flex justify-center flex-col items-center">
                <div className="md:w-auto w-80" key={item._id}>
                  <ItemBody key={item._id} {...item} />
                </div>
                {userid && (
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="button mt-1 mb-2 rounded-lg w-1/2 bg-red-600"
                  >
                    Delete
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <BeatLoader size={30} color="grey" />
        )}
        {Post && props != 1 ? (
          <button className="">
            <Link
              to={"/posts"}
              className="flex items-center bg-slate-300 rounded-sm mt-5 dark:bg-gray-600 px-5 py-4"
            >
              View All{" "}
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                ></path>
              </svg>
            </Link>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Items;
