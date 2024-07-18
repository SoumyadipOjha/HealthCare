import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Posts from "./Pages/Posts";
import SinglePost from "./Pages/SinglePost";
import About from "./Components/About.js";
import UpdatePost from "./Pages/UpdatePost";
import axios from "axios";
import { Context } from "./main.js";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer.js";
import About from "./Components/About.js";
import HeaderComponent from "./Components/HeaderComponent.js";
import CreatePost from "./Pages/CreatePost.js";
import UserProfile from "./Pages/Profile.js";
import MyPosts from "./Pages/Myposts.js";
import Services from "./Components/Services.js";
import Contact from './Components/Contact.jsx'
import Search from "./Pages/Search.js";

const AppLayout = () => {
  const { isAuthenticated, setIsAuthenticated, user, setUser, Post, setPost } =
    useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          "https://healthcare-backend-sjtm.onrender.com/api/v1/user/getmyprofile",
          {
            withCredentials: true,
          }
        );
        setUser(data.user);
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
        console.log(error);
      }
    };

    const fetchPost = async () => {
      try {
        const { data } = await axios.get(
          "https://healthcare-backend-sjtm.onrender.com/api/v1/post/posts",
          {
            withCredentials: true,
          }
        );
        setPost(data.items.reverse());
      } catch (error) {
        setPost([]);
      }
    };

    fetchUser();
    fetchPost();
  }, [isAuthenticated, setIsAuthenticated]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile" element={<UserProfile user={user} />} />
          <Route path="/myposts" element={<MyPosts user={user} />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/about" element={<About />} />
          <Route path="/updatepost/:id" element={<UpdatePost />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/bot" element={<Search/>} />

        </Routes>
      </Router>
      <Toaster />
    </>
  );
};

export default AppLayout;
