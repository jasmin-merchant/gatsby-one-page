import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { FaGem, FaLaptopCode, FaGlobe, FaHeart, FaPhone, FaEnvelope } from "react-icons/fa";

const portfolioImg1 = require('../dist/img/portfolio/thumbnails/1.jpg');
const portfolioImg2 = require('../dist/img/portfolio/thumbnails/2.jpg');
const portfolioImg3 = require('../dist/img/portfolio/thumbnails/3.jpg');
const portfolioImg4 = require('../dist/img/portfolio/thumbnails/4.jpg');
const portfolioImg5 = require('../dist/img/portfolio/thumbnails/5.jpg');
const portfolioImg6 = require('../dist/img/portfolio/thumbnails/6.jpg');




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/*  Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/*  Masthead */}
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-10 align-self-end">
                        <h1 className="text-uppercase text-white font-weight-bold">Your Favorite Source of Free Bootstrap Themes</h1>
                        <hr className="divider my-4" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                        <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                    </div>
                </div>
            </div>
        </header>
        {/* About section */}
        <section className="page-section bg-primary" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">We've got what you need!</h2>
                        <hr className="divider light my-4" />
                        <p className="text-white-50 mb-4">Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!</p>
                        <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                    </div>
                </div>
            </div>
        </section>
        {/*  Services section */}
        <section className="page-section" id="services">
            <div className="container">
                <h2 className="text-center mt-0">At Your Service</h2>
                <hr className="divider my-4" />
                <div className="row">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <FaGem className="display-4 text-primary mb-4" />
                            <h3 className="h4 mb-2">Sturdy Themes</h3>
                            <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <FaLaptopCode className="display-4 text-primary mb-4" />
                            <h3 className="h4 mb-2">Up to Date</h3>
                            <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <FaGlobe className="display-4 text-primary mb-4" />
                            <h3 className="h4 mb-2">Ready to Publish</h3>
                            <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <FaHeart className="display-4 text-primary mb-4" />
                            <h3 className="h4 mb-2">Made with Love</h3>
                            <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*  Portfolio section */}
        <section id="portfolio">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-4 col-sm-6 portfolio-box">
                          <img className="img-fluid" src={portfolioImg1} alt="" />
                          <div className="portfolio-box-caption">
                              <div className="project-category text-white-50">Category</div>
                              <div className="project-name">Project Name</div>
                          </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 portfolio-box">
                          <img className="img-fluid" src={portfolioImg2} alt="" />
                          <div className="portfolio-box-caption">
                              <div className="project-category text-white-50">Category</div>
                              <div className="project-name">Project Name</div>
                          </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 portfolio-box">
                          <img className="img-fluid" src={portfolioImg3} alt="" />
                          <div className="portfolio-box-caption">
                              <div className="project-category text-white-50">Category</div>
                              <div className="project-name">Project Name</div>
                          </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 portfolio-box">
                          <img className="img-fluid" src={portfolioImg4} alt="" />
                          <div className="portfolio-box-caption">
                              <div className="project-category text-white-50">Category</div>
                              <div className="project-name">Project Name</div>
                          </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 portfolio-box">
                          <img className="img-fluid" src={portfolioImg5} alt="" />
                          <div className="portfolio-box-caption">
                              <div className="project-category text-white-50">Category</div>
                              <div className="project-name">Project Name</div>
                          </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 portfolio-box">
                          <img className="img-fluid" src={portfolioImg6} alt="" />
                          <div className="portfolio-box-caption p-3">
                              <div className="project-category text-white-50">Category</div>
                              <div className="project-name">Project Name</div>
                          </div>
                    </div>
                </div>
            </div>
        </section>
        {/*  Call to action section */}
        <section className="page-section bg-dark text-white">
            <div className="container text-center">
                <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
                <a className="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">Download Now!</a>
            </div>
        </section>
        {/*  Contact section */}
        <section className="page-section" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mt-0">Let's Get In Touch!</h2>
                        <hr className="divider my-4" />
                        <p className="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                    </div>
                </div>
                <form method="POST" className="form" name="contact-form" action="#" data-netlify="true">
                 <input type="hidden" name="form-name" value="contact" />
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label for='name'>Name</label>
                        <input type="text" name='name' class='form-control' />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label for='email'>Email</label>
                        <input type="email" name='email' class='form-control' />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label for='message'>Message</label>
                        <textarea className='form-control' />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input type='submit' value="Send Message" className="btn btn-primary" />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                    <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <FaPhone className="display-4 mb-3 text-muted" />
                        <div>+1 (555) 123-4567</div>
                    </div>
                    <div className="col-lg-4 mr-auto text-center">
                       <FaEnvelope className="display-4 mb-3 text-muted" />
                        {/* Make sure to change the email address in BOTH the anchor text and the link target below! */}
                        <a className="d-block" href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
                    </div>
                </div>
            </div>
        </section>
        {/*  Footer */}
        <footer className="bg-light py-5">
            <div className="container"><div className="small text-center text-muted">Copyright © 2020 - Start Bootstrap</div></div>
        </footer>
  </Layout>
)

export default IndexPage
