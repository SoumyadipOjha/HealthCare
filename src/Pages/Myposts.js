import { useContext, useEffect } from "react";
import { Context } from "../main";
import Items from "../Components/Items";
import HeaderComponent from "../Components/HeaderComponent";
import Footer from "../Components/Footer";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
const MyPosts = () => {
  const {
    isAuthenticated,
    setIsAuthenticated,
    setUser,
    Post,
    user,
    setPost,
    mode,
    setMode,
  } = useContext(Context);

  const navigateTo = useNavigate();

  const handleAuth = () => {
    if (!isAuthenticated) {
      toast.error("Not Logged in!");
      navigateTo("/login");
    }
  };
  useEffect(() => {
    handleAuth();
  }, [isAuthenticated]);

  return (
    <>
      {isAuthenticated ? (
        <div className="dark:bg-base-100">
          <HeaderComponent />
          <Items props={1} userid={user._id} />
          <Footer />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MyPosts;
