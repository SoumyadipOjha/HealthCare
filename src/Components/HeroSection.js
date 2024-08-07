import React, { useState, useEffect } from "react";
import bghero from "../Utils/bghero.png";
import { Link } from "react-router-dom";
import hero2 from "../assets/hero2.svg";
import hero3 from "../assets/hero3.svg";
// import eyeLaser from "../assets/eyeLaser.webp";

import gastro from "../assets/gastro.webp";
import scoliosis from "../assets/scoliosis.webp";




const HeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 bg-gray-800 text-white p-2 rounded"
      >
        Toggle Dark Mode
      </button>

      <div className="max-w-screen-2xl container mx-auto mt-8 mb-8 md:px-20 px-4 flex flex-col md:flex-row dark:bg-base-200 dark:text-white bg-white text-black ">
        <div className="w-full md:w-1/2 mb-3 mt-12 md:mt-32 order-2 md:order-1 ">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              <span className="text-pink-500">MedHelp</span>-
              "One stop care for you and loved ones"
            </h1>
            <p className="text-x1">
            Experience top-tier medical care and personalized attention at our state-of-the-art hospital. Trust us for your health needs, where advanced technology meets compassionate care.
            </p>
            <button>
              <Link
                to={"/createpost"}
                className="button rounded-md bg-pink-500 text-white px-5 py-2"
              >
                Book Appointment
              </Link>
            </button>
          </div>
        </div>
        <div className="w-full order-1 md:w-1/2 flex justify-center">
          <img className="w-92 h-92" src={bghero} alt="hero" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 mb-10 pb-3">
        <h1 className="text-3xl md:text-4xl font-bold text-center pb-3 mb-8 mt-8 text-pink-500 ">
          Facilities We Provide with Care
        </h1>
        <div className="grid gap-4 xs:gap-6 sm:gap-8 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <div className="card w-full md:w-96 bg-white dark:bg-gray-800 shadow-xl">
    <figure>
      <img src={gastro} alt="gastro" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        Gastroenterology
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p className="text-x1">
        Gastroenterology focuses on the digestive system, addressing conditions like acid reflux, ulcers, and care for gastrointestinal health.
      </p>
    </div>
  </div>
  <div className="card w-full md:w-96 bg-white dark:bg-gray-800 shadow-xl">
    <figure>
      <img src={scoliosis} alt="Scoliosis" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        Scoliosis
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p className="text-x1">
        Scoliosis involves an abnormal curvature of the spine, with treatments including observation, bracing, and surgery.
      </p>
    </div>
  </div>
  <div className="card w-full md:w-96 bg-white dark:bg-gray-800 shadow-xl">
    <figure>
      <img src={scoliosis} alt="eyeLaser" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        Cardiac Rehab
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p className="text-x1">
        Eye laser treatment corrects vision problems such as myopia, hyperopia, and astigmatism, reshaping the cornea to improve eye health.
      </p>
    </div>
  </div>
</div>


      </div>

      <h1 className="text-4xl font-bold text-center pb-3 mb-8 mt-8 text-pink-500">
  Sign Up to Book Appointment
</h1>
<div className="hero min-h-screen bg-white dark:bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={hero2} alt="hero2" />
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white dark:bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-900 dark:text-white">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-900 dark:text-white">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <Link
              to={"/resetPassword"}
              className="label-text-alt link link-hover text-gray-900"
            >
              Forgot password?
            </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-pink-500 text-white" >Book Appointment</button>
        </div>
      </form>
    </div>
  </div>
</div>
<div className="hero min-h-screen bg-white dark:bg-base-200 text-gray-900 dark:text-blue-400">
  <div className="hero-content flex-col lg:flex-row">
    <img src={hero3} alt="hero3" />
    <div>
      <h1 className="text-5xl font-bold">
        We Always Ensure The Best Treatment With Care
      </h1>
      <p className="py-6 text-3xl text-gray-700 dark:text-gray-400">
        Modern Clinic
        <br />
        Professional Treatment
        <br />
        Discount on Medical Treatment
      </p>
    </div>
  </div>
</div>


    </>
  );
};

export default HeroSection;