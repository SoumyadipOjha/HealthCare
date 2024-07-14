import React from "react";
import HeaderComponent from "./HeaderComponent";
import Footer from "./Footer";
// import contactImage from "../assets/contactImage.svg"; // Replace with an appropriate image

const Contact = () => {
  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen bg-white dark:bg-base-200 text-gray-900 dark:text-blue-400">
        <div className="hero min-h-screen bg-white dark:bg-base-200 text-gray-900 dark:text-blue-400">
          <div className="hero-content flex-col lg:flex-row">
            {/* <img src={contactImage} alt="Contact Us" className="w-full lg:w-1/2 object-cover" /> */}
            <div className="lg:ml-10">
              <h1 className="text-5xl font-bold">Contact Us</h1>
              <p className="py-6 text-3xl text-gray-700 dark:text-gray-400">
                We are here to assist you with any inquiries, appointments, or support you may need.
              </p>
              <div className="bg-white dark:bg-base-100 p-6 rounded-lg shadow-lg">
                <form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-gray-900 dark:text-gray-400">Your Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control mt-4">
                    <label className="label">
                      <span className="label-text text-gray-900 dark:text-gray-400">Your Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control mt-4">
                    <label className="label">
                      <span className="label-text text-gray-900 dark:text-gray-400">Your Message</span>
                    </label>
                    <textarea
                      placeholder="Your Message"
                      className="textarea textarea-bordered w-full"
                      required
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                  <button>
               
                  Book Appointment
                
              </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;