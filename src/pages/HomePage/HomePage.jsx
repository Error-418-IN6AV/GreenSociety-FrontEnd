import React from "react";
import { Link } from "react-router-dom";
import './css/style.css'



export const HomePage = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Arsha Bootstrap Template - Index</title>
      <meta content="" name="description" />
      <meta content="" name="keywords" />
      {/* Vendor CSS Files */}
      <Link to="src/pages/HomePage" rel="stylesheet" />
      <Link
        to="src/pages/HomePage"
        rel="stylesheet"
      />
      {/* Template Main CSS File */}

      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <img
              src="src/assets/img/Green_Simple_Modern_Line_Ecology_and_Environment_Logo__2_-removebg-preview.png"
              alt="" />
            <a href=""> Green Society</a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>*/}
         <nav id="navbar" className="navbar navbar-expand-lg ">
           <div className="container-fluid">
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
              <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
             <li className="nav-item">
                <a className="nav-Link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-Link scrollto" href="#about">
                  About
                </a>
              </li>
               <li className="nav-item">
                <a className="nav-Link scrollto" href="#services">
                ¿Qué buscamos?
                </a>
              </li>
          <li className="nav-item">
                <a className="nav-Link   scrollto" href="#portfolio">
                  Portfolio
                </a>
              </li>
           <li className="nav-item">
                <a className="nav-Link scrollto" href="#team">
                Testimonials
                </a>
              </li>

            <li className="nav-item">
                <a className="nav-Link scrollto" href="#contact">
                  Contact
                </a>
              </li>
          <li className="nav-item">
                  <Link to='login'>
              <div className="getstarted scrollto">
                  Get Started
                </div>
                </Link>

              </li>
          <li className="nav-item">
              <Link to='register'>
              <div className="getstarted scrollto" >
                  Register
                </div>
                </Link>
            </li>
            </ul>
            </div>
            <i className="bi bi-list mobile-nav-toggle" />
            </div>
          </nav>

r


        </div> 
      </header>
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <h1>Trabajemos para conseguir una sociedad verde</h1>
              <h2>
                Somos un grupo de personas que buscamos el bienestar de nuestra comunidad, y tenemos la prioridad de velar por un mejor futuro.
              </h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
               
              <Link to='login'>
                <div className="btn-get-started scrollto">
                  Get Started
                </div>
                </Link>

              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <img
                src="src/assets/img/Taking care of the Earth-pana.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
      <main id="main">
        {/* ======= Clients Section ======= */}
        <section id="clients" className="clients section-bg">
          <div className="container">
            <div className="row" data-aos="zoom-in">
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="src/assets/img/National_Geographic-removebg-preview.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="src/assets/img/eviromet-removebg-preview.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="src/assets/img/CONANP-HORIZONTAL-JPG-COLOR-removebg-preview.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="src/assets/img/logobiorem-removebg-preview.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="src/assets/img/Logo-Ecofiltro-Mexico-2020_9a06a65e-09ac-43b1-9aa1-31f40fc3f2f0-removebg-preview.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="src/assets/img/conafort-removebg-preview.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* End Cliens Section */}
        {/* ======= About Us Section ======= */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About Us</h2>
            </div>
            <div className="row content">
              <div className="col-lg-6">
                <p>
                  Lo que buscamos es beneficiar a distintas personas por medio de diferentes proyectos.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line" /><i className="fa-solid fa-check"></i> Priorizar la educación ecológica dentro de nuestro país
                  </li>
                  <li>
                    <i className="ri-check-double-line" /><i className="fa-solid fa-check"></i> Dar trabajo a las personas por medio de nuestros proyectos
                  </li>
                  <li>
                    <i className="ri-check-double-line" /><i className="fa-solid fa-check"></i> Promover actividades que ayudan a mantener una vida ecológica
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  Nuestro objetivo es dar servicios que aporten al bienestar ambiental del país,
                  de manera en que proporcionamos trabajos a aquellos que necesitan, también
                  promoviendo los proyectos que busquen dar beneficios ecológicos a la ciudad y
                  buscamos que más personas se unan para promover estas ideas a las demás personas
                  de manera en que construyamos juntos una mejor sociedad.
                </p>
                <a href="#" className="btn-learn-more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End About Us Section */}
        {/* ======= Why Us Section ======= */}
        <section id="why-us" className="why-us section-bg-1">
          <div className="container-fluid" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                <div className="content">
                  <h3>
                    ¿Cuáles son nuestras estrategias para promocionar una {" "}
                    <strong>vida ecológica con las personas?</strong>
                  </h3>

                </div>
                <div className="accordion-list">
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        className="collapsed"
                        data-bs-target="#accordion-list-1"
                      >
                        <span>01</span>Concientizar{" "}
     
                      </a>
                      <div
                        id="accordion-list-1"
                        className="collapse show"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          Unos de los principales propósitos que tenemos es poder hacer que las personas se den cuanta el impacto ambiental que nuestras acciones, así que con pequeñas actividades como plantar un árbol reciclar, ect poder hacer mucho para nuestro planeta
                        </p>
                      </div>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-2"
                        className="collapsed"
                      >
                        <span>02</span> Reforestar{" "}
                
                      </a>
                      <div
                        id="accordion-list-2"
                        className="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          Una de las principales características de Green Society es que buscamos promover el plantación de árboles o plantar y la reforestación de aquellos lugares afectados por deforestación sin control dentro del país.
                        </p>
                      </div>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-3"
                        className="collapsed"
                      >
                        <span>03</span> Priorizar{" "}
            
                      </a>
                      <div
                        id="accordion-list-3"
                        className="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          Una de las prioridades que tenemos dentro de Green Society es poder proporcionar trabajos a aquellas personas que no pueden obtenerlo por diferentes circunstancias sin discriminación alguna.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                style={{ backgroundImage: 'url("src/assets/img/Green City.png")' }}
                data-aos="zoom-in"
                data-aos-delay={150}
              >
                &nbsp;
              </div>
            </div>
          </div>
        </section>
        {/* End Why Us Section */}
        {/* ======= Skills Section ======= */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                <p className="fs-5 fw-bold text-primary-1">Proyectos</p>
                <h1 className="display-5 mb-5">¿Qué proyectos tenemos a futro?</h1>
                <p className="mb-4">Buscamos poder abrir paso a estas propuestas por medio de diferentes proyectos, un paso a la vez hacemos el cambio</p>
                <center>
                  <lord-icon
                    src="https://cdn.lordicon.com/dpxilpbm.json"
                    trigger="loop"
                    delay="3500"
                    colors="primary:#121331,secondary:#ffc738,tertiary:#2ca58d"
                    style={{ width: "300px", height: "300px" }}>
                  </lord-icon>

                </center>

              </div>
              <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="src/assets/img/1.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="src/assets/img/2.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="src/assets/img/3.png" className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Skills Section */}
        {/* ======= Services Section ======= */}
        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
            <h2>¿Qué buscamos?</h2>


            </div>
            <div className="row">
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay={100}
              >
                <div className="icon-box">
                  <div className="icon">
                    <lord-icon
                      src="https://cdn.lordicon.com/jefnhaqh.json"
                      trigger="loop"
                      delay="3000"
                      colors="outline:#121331,primary:#2ca58d,secondary:#646e78,tertiary:#ebe6ef"
                      style={{ width: "100px", height: "100px" }}>
                    </lord-icon>
                  </div>
                  <h4>
                    <a href="">Ayuda a la comunidad</a>
                  </h4>
                  <p>
                    Buscamos que por medio de nuestros proyectos que las comunidades se beneficien
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <div className="icon-box">
                  <div className="icon">
                    <lord-icon
                      src="https://cdn.lordicon.com/xhbsnkyp.json"
                      trigger="loop"
                      delay="2000"
                      colors="outline:#121331,primary:#92140c,secondary:#9cf4a7"
                      style={{ width: "100px", height: "100px" }}>
                    </lord-icon>
                  </div>
                  <h4>
                    <a href="">Donaciones</a>
                  </h4>
                  <p>
                    Por medio de las donaciones que nos proporcionan las empresas, buscamos impulsar aquellos que busquen ayudar al medio ambiente
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay={300}
              >
                <div className="icon-box">
                  <div className="icon">
                    <lord-icon
                      src="https://cdn.lordicon.com/higecczg.json"
                      trigger="loop"
                      delay="4000"
                      colors="primary:#121331,secondary:#646e78,tertiary:#2ca58d,quaternary:#ebe6ef,quinary:#b26836,senary:#454e58"
                      style={{ width: "100px", height: "100px" }}>
                    </lord-icon>
                  </div>
                  <h4>
                    <a href="">Terrenos</a>
                  </h4>
                  <p>
                    Muchas veces las empresas son dueñas de terrenos los cuales la cual no tienen alguna utilidad, nosotros buscamos darle una segunda oportunidad a estos terrenos
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay={400}
              >
                <div className="icon-box">
                  <div className="icon">
                    <lord-icon
                      src="https://cdn.lordicon.com/fsihxwoq.json"
                      trigger="loop"
                      delay="2500"
                      colors="primary:#2ca58d,secondary:#121331"
                      style={{ width: "100px", height: "100px" }}>
                    </lord-icon>
                  </div>
                  <h4>
                    <a href="">Reciclar</a>
                  </h4>
                  <p>
                    Buscamos poder dar una segunda utilidad a muchas cosas, es por ello que promovemos las plantas de reciclaje, esto pasa beneficiar al medio ambiente y a personas con empleo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Services Section */}
        {/* ======= Cta Section ======= */}
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-start">
                <h3>Call To Action</h3>
                <p>
                  {" "}
                  Buscamos que las personas que nos ayuden en este proyecto sean personas que busquen y prioricen entregarles a las futuras generaciones un lugar digno donde vivir.
                </p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <a className="cta-btn align-middle" href="#">
                  Call To Action
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End Cta Section */}
        {/* ======= Portfolio Section ======= */}
        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Portfolio</h2>

            </div>
            <ul
              id="portfolio-flters"
              className="d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-delay={100}
            >

            </ul>
            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-img">
                <a className="btn"data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                  <img
                    src="src/assets/img/Reforestacion.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  </a>
                </div>


              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-img">
                <a className="btn"data-bs-toggle="modal" href="#exampleModalToggle2" role="button">
                  <img
                    src="src/assets/img/Recoger basura.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  </a>
                </div>

              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-img">
                <a className="btn"data-bs-toggle="modal" href="#exampleModalToggle3" role="button">
                  <img
                    src="src/assets/img/Reciclar Botellas.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  </a>
                </div>

              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-img">
                <a className="btn"data-bs-toggle="modal" href="#exampleModalToggle4" role="button">
                  <img
                    src="src/assets/img/Reciclaje.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  </a>
                </div>

              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-img">
                <a className="btn"data-bs-toggle="modal" href="#exampleModalToggle5" role="button">
                  <img
                    src="src/assets/img/Plantar Arboles.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  </a>
                </div>

              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-img">
                <a className="btn"data-bs-toggle="modal" href="#exampleModalToggle6" role="button">
                  <img
                    src="src/assets/img/planta-de-reciclaje.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  </a>
                </div>

              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-img">
                <a className="btn"data-bs-toggle="modal" href="#exampleModalToggle7" role="button">
                  <img
                    src="src/assets/img/Guatemala Reciclaje.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  </a>
                </div>

              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-img">
                <a className="btn"data-bs-toggle="modal" href="#exampleModalToggle8" role="button">
                  <img
                    src="src/assets/img/Ideas.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  </a>
                </div>

              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-img">
                <a className="btn"data-bs-toggle="modal" href="#exampleModalToggle9" role="button">
                  <img
                    src="src/assets/img/Arboles.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  </a>
                </div>

              </div>
 <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img
                    src="src/assets/img/Reforestacion.jpg"
                    className="img-fluid"
                    alt=""
                  />                 
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Next</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img
                    src="src/assets/img/Recoger basura.jpg"
                    className="img-fluid"
                    alt=""
                  />
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal">Next</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img
                    src="src/assets/img/Reciclar Botellas.jpg"
                    className="img-fluid"
                    alt=""
                  />
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal" data-bs-dismiss="modal">Next</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img
                    src="src/assets/img/Reciclaje.jpg"
                    className="img-fluid"
                    alt=""
                  />
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle5" data-bs-toggle="modal" data-bs-dismiss="modal">Next</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle5" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img
                    src="src/assets/img/Plantar Arboles.jpg"
                    className="img-fluid"
                    alt=""
                  />
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle6" data-bs-toggle="modal" data-bs-dismiss="modal">Next</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle6" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
  
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img
                    src="src/assets/img/planta-de-reciclaje.jpg"
                    className="img-fluid"
                    alt=""
                  />
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle7" data-bs-toggle="modal" data-bs-dismiss="modal">Next</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle7" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img
                    src="src/assets/img/Guatemala Reciclaje.jpg"
                    className="img-fluid"
                    alt=""
                  />
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle8" data-bs-toggle="modal" data-bs-dismiss="modal">Next</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle8" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img
                    src="src/assets/img/Ideas.jpg"
                    className="img-fluid"
                    alt=""
                  />
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle9" data-bs-toggle="modal" data-bs-dismiss="modal">Next</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle9" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img
                    src="src/assets/img/Arboles.jpg"
                    className="img-fluid"
                    alt=""
                  />
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Next</button>
      </div>
    </div>
  </div>
</div>

            </div>
          </div>
        </section>
        {/* End Portfolio Section */}
        {/* ======= Team Section ======= */}
        <section id="team" className="team section-bg-2">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Testimonials</h2>

            </div>
            <div className="row">
              <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={100}>
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="src/assets/img/cara 2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Maria Gozales</h4>
                    <span>Gerente</span>
                    <p>
                    He visto como este proyecto ayuda a muchas personas, la visión que se tiene es muy bueno espero que crezca y se vea el valor de ella
                    </p>

                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 mt-4 mt-lg-0"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="src/assets/img/cara 1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Sarah Martinez</h4>
                    <span>Ama de casas</span>
                    <p>
                    Green Society me ha ayudado a poder darle un mejor futro a mis hijos , gracias a que me proporcionan de trabaja y ayuda
                    </p>
                    
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 mt-4"
                data-aos="zoom-in"
                data-aos-delay={300}
              >
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="src/assets/img/cara 3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Marcos del Cid</h4>
                    <span>Defensor de la Naturaleza</span>
                    <p>
                    Soy parte de un grupo de personas que se dedica a poder devolverle la vida a distintos territorios, Green Society me ha proporcionado el apoyo para continuar con este proyecto
                    </p>
                    
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 mt-4"
                data-aos="zoom-in"
                data-aos-delay={400}
              >
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="src/assets/img/cara 4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Jose Lopez</h4>
                    <span>Vecino de Colonia Mariscal</span>
                    <p>
                    Mi comunidad era afectada por la basura y la contaminación, pero personas de Green Society logro revivir lugares para el uso de la comunidad además que fomento la vida sostenible en nosotros.
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Team Section */}
        {/* ======= Pricing Section ======= */}

        {/* End Pricing Section */}
        {/* ======= Frequently Asked Questions Section ======= */}
        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
              <p>
                Algunas de las preguntas que más frecuentes que hacen sobre nosotros son la siguiente, si tienes alguna otra con gusto te la responderemos solo debes ir al área de contactos enviar tu pregunta y alguien de nosotros te contactara pronto, sino también puedes comunicarte a algunas de nuestras redes sociales.
              </p>
            </div>
            <div className="faq-list">
              <ul>
                <li data-aos="fade-up" data-aos-delay={100}>
                <i className="fa-regular fa-circle-question"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#faq-list-1"
                  >
                    ¿Cómo puedo apoyar a la causa?{" "}
                   <i className="fa-solid fa-arrow-up"></i>
      <i className="fa-solid fa-arrow-down"></i>
                  </a>
                  <div
                    id="faq-list-1"
                    className="collapse show"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Tenemos muchas manera de poder hacer que las personas puedan integrarse dentro de ello,
                       puedes ser un voluntario el cual nos ayude a poder realizar distintas actividades, 
                       si deseas donar dinero puedes comunicarte y con gusto te responderemos también de la misma manera si deseas donar ya sea , suplementos para plantas, plantas, ropa, terrenos ect.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={200}>
                <i className="fa-regular fa-circle-question"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-2"
                    className="collapsed"
                  >
                  ¿Qué hacen con los terrenos?{" "}
                   <i className="fa-solid fa-arrow-up"></i>
      <i className="fa-solid fa-arrow-down"></i>
                  </a>
                  <div
                    id="faq-list-2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Regularmente buscamos que los terrenos sean reforestados esto para ayudar a medio ambiente, pero también buscamos con ello poder concientizar a las personas con estos actos acerca del impacto que tenemos sobre el planeta.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={300}>
                <i className="fa-regular fa-circle-question"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-3"
                    className="collapsed"
                  >
                   ¿Qué ocurre con el dinero que yo dono?{" "}
                   <i className="fa-solid fa-arrow-up"></i>
      <i className="fa-solid fa-arrow-down"></i>
                  </a>
                  <div
                    id="faq-list-3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Ese dinero se reparte para distintas actividades, como lo son ayuda para la comunidad, mantenimiento de áreas verdes, promocionar proyectos, compra de distintos utensilios ect.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={400}>
                <i className="fa-regular fa-circle-question"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-4"
                    className="collapsed"
                  >
                  ¿Cómo puedo ayudar sin necesidad de ser voluntario o donador? 
                  <i className="fa-solid fa-arrow-up"></i>
      <i className="fa-solid fa-arrow-down"></i>
                  </a>
                  <div
                    id="faq-list-4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Puedes hacer lo promocionado esta idea hacia tus conocidos además que puedes empezar desde tu casa a cambiar tu estilo de vida, puedes encontrar muchas referencias dentro e nuestras redes sociales
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={500}>
                <i className="fa-regular fa-circle-question"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-5"
                    className="collapsed"
                  >
                  ¿Dónde más puedo encontrarlos o contactarlos?{" "}
                   <i className="fa-solid fa-arrow-up"></i>
      <i className="fa-solid fa-arrow-down"></i>
                  </a>
                  <div
                    id="faq-list-5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Puedes ir a nuestra sucursal en la ciudad de Guatemala o puedes comunicarte con nosotros por medio de nuestra página web.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* End Frequently Asked Questions Section */}
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Contact</h2>
              <p>
                Si quieres ser parte de este proyecto o buscas información sobre algo en específico no dudes en contactarnos por los siguientes medios, será un gusto atenderte.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                  <i className="fa-solid fa-location-dot fa-2x"></i>
                    <h4>Location:</h4>
                    <p>Guatemala City</p>
                  </div>
                  <div className="email">
                  <i className="fa-solid fa-envelope-open-text fa-2x"></i>
                    <h4>Email:</h4>
                    <p>infogreensoiety@green.edu.gt</p>
                  </div>
                  <div className="phone">
                  <i className="fa-solid fa-mobile-screen-button fa-2x"></i>
                  <h4>Call:</h4>
                  <p>+502 2258 2239</p>
                  </div>

                  
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.532269122428!2d-90.53854362555973!3d14.625700476462997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a190308858f1%3A0x6795822b2b81d4ac!2sCentro%20Educativo%20T%C3%A9cnico%20Laboral%20KINAL!5e0!3m2!1ses-419!2sgt!4v1687489844798!5m2!1ses-419!2sgt"
                    frameBorder={0}
                    style={{ border: 0, width: "100%", height: 290 }}
                    allowFullScreen=""
                  />
                </div>
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form

                  className="php-email-form"
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"

                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows={10}
                      required=""
                      defaultValue={""}
                    />
                  </div>

                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* End #main */}
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4>Correos</h4>
                <p>
                Escribe tu correo si quieres más información acerca de este proyecto
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
         
                <img
                  src="src/assets/img/Logo.png"
                /> 
               
                <p>
                   <br />
       
                  <br />
                  <strong>Ubication:</strong>Guatemala 
                  <br />
                  <strong>Phone:</strong> +502 2258 2239
                  <br />
                  <strong>Email:</strong> infogreensoiety@green.edu.gt
                  <br />
                </p>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#hero">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#about">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#services">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#">Ayuda a la comunidad</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Miembros</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Donaciones</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#">Plantas de Reciclaje</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>
                Tambien puedes comunicarte por los siguientes medios
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                  <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="#" className="facebook">
                  <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" className="instagram">
                  <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="instagram">
                  <i className="fa-brands fa-facebook"></i>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>                
          Green Society</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ */}
            Designed by <a href="https://bootstrapmade.com/">Green Society</a>
          </div>
        </div>
      </footer>
      {/* End Footer */}

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* Vendor JS Files */}

      {/* Template Main JS File */}

      <script src="js/scripts.js"></script>
    </>

  );
};
