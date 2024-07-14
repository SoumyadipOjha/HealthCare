import { useContext } from "react";
import ItemBody from "./ItemBody";
import { Context } from "../main";
import { BeatLoader } from "react-spinners";
const Items = () => {
  const { Post } = useContext(Context);
  return (
    <div>
      <div className="flex justify-center text-2xl text-black dark:text-white ">
        Newly Posted Ads
      </div>
      <div className="max-w-screen-2xl  container mt-10 mb-10 md:px-20 px-4 flex flex-col md:flex-row flex-wrap items-center justify-center bg-white text-black dark:text-gray-300 dark:bg-base-100">
        {Post && Post.length > 0 ? (
          Post.map((item) => {
            return (
              <div className="md:w-auto w-80" key={item._id}>
                <ItemBody key={item._id} {...item} />
              </div>
            );
          })
        ) : (
          <BeatLoader size={30} color="grey" />
        )}
      </div>
    </div>
  );
};

export default Items;
