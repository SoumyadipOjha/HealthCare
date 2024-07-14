import React from "react";
import haha from "../assets/undraw_doctors_p6aq (1).svg";
import scoliosis from "../assets/scoliosis.webp";
import cardiology from "../assets/cardiology.webp";
import cardioThoracic from "../assets/cardioThoracic.webp";
import dentistry from "../assets/dentistry.webp";
import gastro from "../assets/gastro.webp";
import nephrology from "../assets/nephrology.jpg";
import { useNavigate } from 'react-router-dom';
import HeaderComponent from "./HeaderComponent";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Services = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/appointment');
  };

  return (
    <>
      <HeaderComponent />
      <div className="hero min-h-screen bg-white dark:bg-base-200 text-gray-900 dark:text-blue-400">
        <div className="hero-content flex-col lg:flex-row">
          <img src={haha} alt="Healthcare Illustration" />
          <div>
            <h1 className="text-5xl font-bold">Best Care For Close Ones!</h1>
            <p className="py-6 text-3xl text-gray-700 dark:text-gray-400">
              Our hospital provides emergency care, advanced surgeries, specialized treatments, and comprehensive diagnostic services, including imaging and laboratory tests, ensuring high-quality healthcare tailored to our patients' needs.
            </p>
            <button className="btn btn-primary color-blue-400">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mt-10">
        {[
          { img: cardiology, title: "Cardiology" },
          { img: nephrology, title: "Nephrology" },
          { img: dentistry, title: "Dentistry" },
          { img: cardioThoracic, title: "Cardio Thoracic Surgery" },
          { img: gastro, title: "Gastroenterology" },
          { img: scoliosis, title: "Scoliosis Surgery" },
        ].map((service, index) => (
          <div key={index} className="card card-compact w-96 bg-white dark:bg-base-100 shadow-xl">
            <figure>
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-10 text-gray-900 dark:text-white">{service.title}</h2>
              <button>
                <Link to={"/createpost"} className="button rounded-md bg-pink-500 text-white px-5 py-2">
                  Book Appointment
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Services;