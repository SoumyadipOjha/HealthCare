import { useContext } from "react";
import { Context } from "../main";

import Items from "../Components/Items";
import HeaderComponent from "../Components/HeaderComponent";



const Posts = () => {
  const {
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
    Post,
    setPost,
    mode,
    setMode,
  } = useContext(Context);

  return (
    <>
      <div className="bg-base-100">
        <HeaderComponent />
        <Items />
        
      </div>
    </>
  );
};

export default Posts;
