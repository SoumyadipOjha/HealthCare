import { Link } from "react-router-dom";
import { CLOUDINARY_CDN } from "../Utils/constants.js";

const ItemBody = (item) => {
  const { title, Description, price, Category } = item;
  return (
    <>
      <Link to={`/post/${item._id}`}>
        <div className="my-card card w-80 bg-white text-black dark:text-gray-300 dark:bg-base-100 shadow-xl m-1 hover:scale-95 duration-200 dark:border-opacity-10 border border-gray-300">
          <figure className="w-80 h-48 p-3 pb-0">
            <img
              src={CLOUDINARY_CDN + item.images[0].url}
              className=" object-contain  rounded-3xl"
              alt="Shoes"
            />
          </figure>
          <div className="card-body p-5">
            <p className="badge badge-outline">{Category}</p>
            <h2 className="card-title">
              {title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-ellipsis overflow-hidden text-nowrap">
              {Description}
            </p>

            <div className="card-actions">
              <div className="font-bold text-lg">₹{price}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ItemBody;
