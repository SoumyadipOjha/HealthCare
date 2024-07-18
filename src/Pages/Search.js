import React, { Component } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import HeaderComponent from "../Components/HeaderComponent.js";
import Footer from "../Components/Footer.js";

const apikey = process.env.REACT_APP_GEMINI_KEY;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      loading: false,
      response: "",
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  searchfunc = async () => {
    const { text } = this.state;

    const genAI = new GoogleGenerativeAI({ apiKey: apikey });
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const inputbyUser = text;

    console.log("User Input:", inputbyUser);

    try {
      this.setState({ loading: true });
      const prompt = `You are a mental health assistant. The user will explain problems he/she is facing in life and you need to give advice based on the problem faced by the user. 
      Always provide descriptive answers in paragraphs but strictly not in points.
      User's input:
      ${inputbyUser}`;

      const result = await model.generateContent({ prompt });
      const response = result.text;
      console.log("Gemini Response:", response);
      this.setState({ loading: false, response });
    } catch (error) {
      console.error("Error:", error);
      this.setState({
        loading: false,
        response: "An error occurred. Please try again later.",
      });
    }
  };

  render() {
    const { text, loading, response } = this.state;

    return (
      <>
        <HeaderComponent />
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  value={text}
                  onChange={this.handleChange}
                  className="input input-bordered w-full pl-10 p-2.5 text-sm border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="What problems are you facing in life?"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary absolute right-2.5 bottom-2.5 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={(e) => {
                    e.preventDefault();
                    this.searchfunc();
                  }}
                >
                  {loading ? "Loading..." : "Ask!"}
                </button>
              </div>
            </form>
            {response && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p>{response}</p>
              </div>
            )}
          </div>
        </div>
        <Footer />
        <style>{`
          .input {
            transition: border-color 0.3s, box-shadow 0.3s;
          }
          .input:focus {
            border-color: #3b82f6;
            box-shadow: 0 0 0 1px #3b82f6;
          }
          .btn-primary {
            transition: background-color 0.3s;
          }
          .btn-primary:hover {
            background-color: #2563eb;
          }
        `}</style>
      </>
    );
  }
}

export default Search;
