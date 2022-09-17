import React from "react";

// import Navbar from "components/Navbars/AuthNavbar.js";
import Navbar from "../components/MainNavbar";
import ContactForm  from "../components/ContactForm";
// import Footer from "components/Footers/Footer.js";

export default function Profile() {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
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
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={require("../assets/img/_me-800x800.jpeg")}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        <i className="fas fa-file-pdf mr-2 text-lg text-white-200"></i>
                        CV
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                   
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    José Pedro Silva
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    Porto, Portugal
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Full Stack Developer
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    Mestrado em Engenharia Informática - ISEP
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Preciso de uma descrição para mim e espero que a minha
                        esposa me ajude
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <section className="relative py-40 bg-blueGray-200">
        <ContactForm />
        </section>
        {/* <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full">
                <ul
                  className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                  role="tablist"
                >
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 1
                          ? "text-white bg-lightBlue-600"
                          : "text-lightBlue-600 bg-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      Education
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 2
                          ? "text-white bg-lightBlue-600"
                          : "text-lightBlue-600 bg-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      Experiences
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 3
                          ? "text-white bg-lightBlue-600"
                          : "text-lightBlue-600 bg-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      Linguagens de Programção
                    </a>
                  </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                  <div className="px-4 py-5 flex-auto">
                    <div className="tab-content tab-space">
                      <div
                        className={openTab === 1 ? "block" : "hidden"}
                        id="link1"
                      >
                        <div className="container px-4 mx-auto">
                          <div className="flex flex-wrap">
                            <div className="w-full px-4 flex-1">
                              <b>Degree in Computer Engineering (LEI)</b>,
                              Instituto Superior de Engenharia do Porto (ISEP)
                            </div>
                            <div className="w-full px-4 flex-1">2015-2019</div>
                            <div className="w-full"></div>
                            <br />
                            <br />
                            <div className="w-full px-4 flex-1">
                              <b>Master in Computer Engineering (LEI)</b>,
                              Instituto Superior de Engenharia do Porto (ISEP)
                            </div>
                            <div className="w-full px-4 flex-1">2019-2021</div>
                            <div className="w-full"></div>
                            <br />
                            <br />
                            <div className="w-full px-4 flex-1">
                              <b>Formation PHC</b>, PHC
                            </div>
                            <div className="w-full px-4 flex-1">2017</div>
                            <div className="w-full"></div>
                            <br />
                            <br />
                            <div className="w-full px-4 flex-1">
                              <b>English Course</b>, Instituto Portuense de
                              Línguas
                            </div>
                            <div className="w-full px-4 flex-1">2018</div>
                            <div className="w-full"></div>
                            <br />
                            <br />
                            <div className="w-full px-4 flex-1">
                              <b>Formação de Formadores - CCP,</b>, Escola de
                              Negócios e Administração
                            </div>
                            <div className="w-full px-4 flex-1">2022</div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={openTab === 2 ? "block" : "hidden"}
                        id="link2"
                      >
                        <ul className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                          <li>
                            <article>
                            <h5 className="text-2xl font-normal leading-normal mt-0 mb-2 text-lightBlue-800">
                                Senior Consultant
                              </h5>
                              <h6 className="text-xl font-normal leading-normal mt-0 mb-2 text-lightBlue-800">
                              Devoteam
                              </h6>
                              <time
                                datetime=""
                                className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400"
                              >
                                Aug 2021 -
                              </time>
                              <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                                EDP – Implementation of Dashboards on the Back
                                Office
                              </p>
                              <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                                Natixis Design System – Implementation of a
                                Design System in Angular.
                              </p>
                            </article>
                          </li>
                          <br />
                          <li>
                            <article>
                              <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
                                Earum at ipsa aliquid quis, exercitationem est.
                              </h3>
                              <time
                                datetime=""
                                className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400"
                              >
                                Oct 13, 2020
                              </time>
                              <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Similique saepe exercitationem
                                numquam, labore necessitatibus deleniti quasi.
                                Illo porro nihil necessitatibus debitis delectus
                                aperiam, fuga impedit assumenda odit, velit
                                eveniet est.
                              </p>
                            </article>
                          </li>
                          <br />
                          <li>
                            <article>
                              <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
                                Earum at ipsa aliquid quis, exercitationem est.
                              </h3>
                              <time
                                datetime=""
                                className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400"
                              >
                                Oct 13, 2020
                              </time>
                              <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Similique saepe exercitationem
                                numquam, labore necessitatibus deleniti quasi.
                                Illo porro nihil necessitatibus debitis delectus
                                aperiam, fuga impedit assumenda odit, velit
                                eveniet est.
                              </p>
                            </article>
                          </li>
                          <br />
                          <li>
                            <article>
                              <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
                                Earum at ipsa aliquid quis, exercitationem est.
                              </h3>
                              <time
                                datetime=""
                                className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400"
                              >
                                Oct 13, 2020
                              </time>
                              <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Similique saepe exercitationem
                                numquam, labore necessitatibus deleniti quasi.
                                Illo porro nihil necessitatibus debitis delectus
                                aperiam, fuga impedit assumenda odit, velit
                                eveniet est.
                              </p>
                            </article>
                          </li>
                        </ul>
                      </div>
                      <div
                        className={openTab === 3 ? "block" : "hidden"}
                        id="link3"
                      >
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                          <br />
                          <br /> Dramatically maintain clicks-and-mortar
                          solutions without functional solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Formação</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Formação Académica
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="pt-6 text-center">
                  <img
                    alt="..."
                    src={require("../assets/img/_me-800x800.jpeg")}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  /> 
                  <i className="fas fa-university shadow-lg rounded-full mx-auto max-w-120-px"></i>
                    <h5 className="text-xl font-bold">Degree in Computer Engineering(LEI)</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Instituto Superior deEngenharia do Porto (ISEP)
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Founder and CEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
