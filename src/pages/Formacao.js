import React from "react";

import NodeJS from "../assets/img/nodejs.jpeg";
import Fullstack from "../assets/img/fullstack.png";
import Serverless from "../assets/img/serverless.png";
import Python from "../assets/img/python.jpeg";
import HTML from "../assets/img/html_css.jpeg";

import zipJS from "../assets/sources/formJS.zip";
import "../assets/styles/video.css";
import "../assets/styles/tailwind.css";

export default function Formacao() {

  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Formações
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Transformação digital começa agora.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      {/* <i className="fas fa-file-code"></i> */}
                      <img
                        alt="..."
                        src={require("../assets/img/react.jpg")}
                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                      />
                    </div>
                    <h6 className="text-xl font-semibold">Formação em React</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      {/* Formações em ReactJS */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      {/* <i className="fas fa-gears"></i> */}
                      <img
                        alt="..."
                        src={NodeJS}
                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                      />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Formação em NodeJS
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">{/* Desc. */}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      {/* <i className="fas fa-fingerprint"></i> */}
                      <img
                        alt="..."
                        src={Fullstack}
                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                        style={{ background: "white" }}
                      />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Formação Fullstack
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">{/* desc. */}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      {/* <i className="fas fa-file-code"></i> */}
                      <img
                        alt="..."
                        src={Serverless}
                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                      />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Serverless Functions
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      {/* Formações em React desc. */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      {/* <i className="fas fa-gears"></i> */}
                      <img
                        alt="..."
                        src={Python}
                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                        style={{ background: "white" }}
                      />
                    </div>
                    <h6 className="text-xl font-semibold">Python</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">{/* desc */}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      {/* <i className="fas fa-fingerprint"></i> */}
                      <img
                        alt="..."
                        src={HTML}
                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                        style={{ background: "white" }}
                      />
                    </div>
                    <h6 className="text-xl font-semibold">HTML & CSS</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">{/* desc */}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Projetos</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Recursos dos cursos
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="flex flex-wrap justify-center video-responsive">
              
                
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/nPXO2oHVmu4`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
              </div>
            </div>
            <div className="mt-3">
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fas fa-download"></i>
                    <a href={zipJS}> Download ficheiros </a>
                  </button>
                </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
