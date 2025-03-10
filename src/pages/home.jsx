import React, { useEffect } from "react";
import '../css/bootstrap.css'
import '../css/custom.css'
import '../css/fontawesome-all.css'
import '../css/magnific-popup.css'
import '../css/style.css'
import '../css/styles.css'
import '../css/swiper.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import Navigation & Autoplay

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ESummit = () => {


    return (

        <>
            {/* Preloader */}
            {/* <div className="spinner-wrapper">
    <div className="spinner">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  </div> */}
            {/* end of preloader */}
            {/* Navigation */}
            <>
                {/* Navigation */}
                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                    {/* Image Logo */}
                    <a className="navbar-brand logo-image" href="index.html">
                        <img src="images/logo123.svg" alt="alternative" />
                    </a>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarsExampleDefault"
                        aria-controls="navbarsExampleDefault"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-awesome fas fa-bars" style={{ fontSize: "20px" }}></span>
                        <span className="navbar-toggler-awesome fas fa-times"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#header">
                                    Home <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#services">
                                    Our Initiatives
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#request">
                                    CA
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#request">
                                    Entreview
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="ensights.html">
                                    Ensights
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="esummit.html">
                                    E-Summit
                                </a>
                            </li>

                            {/* Dropdown Menu */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle page-scroll"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    More
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="campusambassador.html">
                                        <span className="item-text">Campus Ambassador</span>
                                    </a>
                                    <div className="dropdown-items-divide-hr"></div>
                                    <a className="dropdown-item" href="entreview.html">
                                        <span className="item-text">Entreview</span>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>

                        {/* Social Media Icons */}
                        <span className="nav-item social-icons">
                            <span className="fa-stack">
                                <a href="https://www.facebook.com/ecelliitp/">
                                    <i className="fas fa-circle fa-stack-2x facebook"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="https://twitter.com/ecelliitp/">
                                    <i className="fas fa-circle fa-stack-2x twitter"></i>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="https://www.instagram.com/ecell_iitpatna/">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-instagram fa-stack-1x"></i>
                                </a>
                            </span>
                        </span>
                    </div>
                </nav>
                {/* end of navbar */}

                {/* Header */}
                <header id="header" className="header">
                    <div className="header-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="text-container">
                                        <h3>
                                            <span className="turquoise">Entrepreneurship Cell</span> <br />
                                            Indian Institute of Technology, Patna
                                        </h3>
                                        <p>Vision | Plan | Team | Marketing | Growth | Success</p>
                                        <a className="btn-solid-lg page-scroll" target="_blank" rel="noopener noreferrer" href="ensights.html">
                                            ENSIGHTS
                                        </a>
                                    </div>
                                    {/* end of text-container */}
                                </div>
                                {/* end of col */}
                                <div className="col-lg-6">
                                    <div className="image-container">
                                        <img className="img-fluid" src="images/header-teamwork.svg" alt="alternative" />
                                    </div>
                                    {/* end of image-container */}
                                </div>
                                {/* end of col */}
                            </div>
                            {/* end of row */}
                        </div>
                        {/* end of container */}
                    </div>
                    {/* end of header-content */}
                </header>
            </>
            {/* end of header */}
            {/* end of header */}
            <br />
            {/* Customers */}
            <div className="slider-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h5>About</h5>
                            {/* Image Slider */}
                            <div className="slider-container">
                                <b>
                                    "Instead of freaking about the constraints, embrace them. Let them
                                    guide you. Constraints drive innovation and force focus."
                                </b>
                                <br /> Inspired by these words, we at IIT Patna took an initiative
                                to create the creators through our cell.
                                <br /> E-Cell organises a variety of events throughout the year to
                                promote entrepreneurial activities in and around the campus. E-Cell
                                conducts various lectures and workshops focused at budding
                                entrepreneurs.
                                {/* end of swiper container */}
                            </div>
                            {/* end of slider-container */}
                            {/* end of image slider */}
                        </div>
                        {/* end of col */}
                    </div>
                    {/* end of row */}
                </div>
                {/* end of container */}
            </div>
            {/* end of slider-1 */}
            {/* end of customers */}
            {/* Services */}
            <div id="services" className="cards-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Our Initiatives</h2>
                            <p />
                        </div>
                        {/* end of col */}
                    </div>
                    {/* end of row */}
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Card */}
                            <div className="card">
                                <h4 className="card-title">Start-In</h4>
                                <p>
                                    Start your own business in the campus for a week and earn profits!{" "}
                                    <br /> The best idea implemented wins a huge cash prize!
                                </p>
                            </div>
                            {/* end of card */}
                            {/* Card */}
                            <a href="esummit.html">
                                <div className="card">
                                    <h4 className="card-title">E-Summit</h4>
                                    <p>
                                        A Weekend celebrating the entrepreneur culture in campus.
                                        Participants get to take part in vast number of events,
                                        conclaves, guest talks and much more!
                                    </p>
                                </div>
                            </a>
                            {/* end of card */}
                            {/* Card */}
                            <div className="card">
                                <h4 className="card-title">Ideathon</h4>
                                <p>
                                    The first step for innovation is ideation. This is a platform to
                                    showcase your skills. Come up with a business idea to solve
                                    problem statements!
                                </p>
                            </div>
                            {/* end of card */}
                        </div>
                        {/* end of col */}
                        <div className="col-lg-12">
                            {/* Card */}
                            <div className="card">
                                <h4 className="card-title">Startup Expo</h4>
                                <p>
                                    Showcase your start-up to the world and discover the next
                                    destination in your success story. Demonstrate your solutions
                                    live, be innovative, put your best foot forward!
                                </p>
                            </div>
                            {/* end of card */}
                            {/* Card */}
                            <div className="card">
                                <h4 className="card-title">Conclave</h4>
                                <p>
                                    Imminent personalities from different fields come together and
                                    take part in a debate. Each have a different opinion on the same
                                    question, making the conversation highly insightful!
                                </p>
                            </div>
                            {/* end of card */}
                            {/* Card */}
                            <div className="card">
                                <h4 className="card-title">SMC @IIT Patna</h4>
                                <p>
                                    A non-profit network of passionate individuals and institutions to
                                    combine skills and resources in support of the activities to
                                    promote entrepreneurship and problem solving skills.
                                </p>
                            </div>
                            {/* end of card */}
                        </div>
                    </div>
                    {/* end of row */}
                </div>
                {/* end of container */}
            </div>
            {/* end of cards-1 */}
            {/* end of services */}
            {/* Details 1 */}
            <div className="basic-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>Do the impossible!</h2>
                                <p>
                                    Entrepreneurship cell, IIT Patna is the organisation run by
                                    students and has been established with the objective of creating,
                                    manifesting, and guiding the entrepreneurial spirit in the student
                                    community and to encourage them to be successful entrepreneurs.
                                </p>
                                {/* <a class="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">LIGHTBOX</a> */}
                            </div>
                            {/* end of text-container */}
                        </div>
                        {/* end of col */}
                        <div className="col-lg-6">
                            <div className="image-container">
                                <img
                                    className="img-fluid"
                                    src="images/details-1-office-worker.svg"
                                    alt="alternative"
                                />
                            </div>
                            {/* end of image-container */}
                        </div>
                        {/* end of col */}
                    </div>
                    {/* end of row */}
                </div>
                {/* end of container */}
            </div>
            {/* end of basic-1 */}
            {/* end of details 1 */}
            {/* Details 2 */}
            <div className="basic-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-container">
                                <img
                                    className="img-fluid"
                                    src="images/details-2-office-team-work.svg"
                                    alt="alternative"
                                />
                            </div>
                            {/* end of image-container */}
                        </div>
                        {/* end of col */}
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>Work flow in E-Cell</h2>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-check" />
                                        <div className="media-body">
                                            We shall strive to educate ourselves about the nuances
                                            involved in entrepreneurship and business in order to prepare
                                            ourselves for undertaking the journey from the genesis of an
                                            idea to its successful business implementation.
                                        </div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check" />
                                        <div className="media-body">
                                            We shall work to create an environment that would allow us to
                                            learn from each other and from the experiences of people who
                                            have undertaken this journey in the past.
                                        </div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check" />
                                        <div className="media-body">
                                            To the end we conduct several events and workshops both for
                                            students of and beyond our college for the purpose of
                                            cultivating entrepreneur spirit.
                                        </div>
                                    </li>
                                </ul>
                                {/* <a class="btn-solid-reg popup-with-move-anim" href="#details-lightbox-2">LIGHTBOX</a> */}
                            </div>
                            {/* end of text-container */}
                        </div>
                        {/* end of col */}
                    </div>
                    {/* end of row */}
                </div>
                {/* end of container */}
            </div>
            {/* end of basic-2 */}
            {/* end of details 2 */}
            {/* Details Lightboxes */}
            {/* Details Lightbox 1 */}
            <div
                id="details-lightbox-1"
                className="lightbox-basic zoom-anim-dialog mfp-hide"
            >
                <div className="container">
                    <div className="row">
                        <button
                            title="Close (Esc)"
                            type="button"
                            className="mfp-close x-button"
                        >
                            ×
                        </button>
                        <div className="col-lg-8">
                            <div className="image-container">
                                <img
                                    className="img-fluid"
                                    src="images/details-lightbox-1.svg"
                                    alt="alternative"
                                />
                            </div>
                            {/* end of image-container */}
                        </div>
                        {/* end of col */}
                        <div className="col-lg-4">
                            <h3>Design And Plan</h3>
                            <hr />
                            <h5>Core feature</h5>
                            <p>
                                The emailing module basically will speed up your email marketing
                                operations while offering more subscriber control.
                            </p>
                            <p>
                                Do you need to build lists for your email campaigns? It just got
                                easier with E-Cell, IITP.
                            </p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-check" />
                                    <div className="media-body">List building framework</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check" />
                                    <div className="media-body">Easy database browsing</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check" />
                                    <div className="media-body">User administration</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check" />
                                    <div className="media-body">Automate user signup</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check" />
                                    <div className="media-body">Quick formatting tools</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check" />
                                    <div className="media-body">Fast email checking</div>
                                </li>
                            </ul>
                            <a className="btn-solid-reg mfp-close page-scroll" href="#request">
                                REQUEST
                            </a>{" "}
                            <a
                                className="btn-outline-reg mfp-close as-button"
                                href="#screenshots"
                            >
                                BACK
                            </a>
                        </div>
                        {/* end of col */}
                    </div>
                    {/* end of row */}
                </div>
                {/* end of container */}
            </div>
            {/* end of lightbox-basic */}
            {/* end of details lightbox 1 */}
            {/* Details Lightbox 2 */}
            <div
                id="details-lightbox-2"
                className="lightbox-basic zoom-anim-dialog mfp-hide"
            >
                <div className="container">
                    <div className="row">
                        <button
                            title="Close (Esc)"
                            type="button"
                            className="mfp-close x-button"
                        >
                            ×
                        </button>
                        <div className="col-lg-8">
                            <div className="image-container">
                                <img
                                    className="img-fluid"
                                    src="images/details-lightbox-2.svg"
                                    alt="alternative"
                                />
                            </div>
                            {/* end of image-container */}
                        </div>
                        {/* end of col */}
                        <div className="col-lg-4">
                            <h3>Search To Optimize</h3>
                            <hr />
                            <h5>Core feature</h5>
                            <p>
                                The emailing module basically will speed up your email marketing
                                operations while offering more subscriber control.
                            </p>
                            <p>
                                Do you need to build lists for your email campaigns? It just got
                                easier with E-Cell, IITP.
                            </p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-check" />
                                    <div className="media-body">List building framework</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check" />
                                    <div className="media-body">Easy database browsing</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check" />
                                    <div className="media-body">User administration</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check" />
                                    <div className="media-body">Automate user signup</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check" />
                                    <div className="media-body">Quick formatting tools</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check" />
                                    <div className="media-body">Fast email checking</div>
                                </li>
                            </ul>
                            <a className="btn-solid-reg mfp-close page-scroll" href="#request">
                                REQUEST
                            </a>{" "}
                            <a
                                className="btn-outline-reg mfp-close as-button"
                                href="#screenshots"
                            >
                                BACK
                            </a>
                        </div>
                        {/* end of col */}
                    </div>
                    {/* end of row */}
                </div>
                {/* end of container */}
            </div>
            {/* end of lightbox-basic */}
            {/* end of details lightbox 2 */}
            {/* end of details lightboxes */}
            {/* Pricing */}
            {/* Request */}
            <div id="request" className="form-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="text-container">
                                <h2>Campus Ambassador Program</h2>
                                <p>Register to get amazing benifits. Visit the page now!</p>
                            </div>
                            {/* end of text-container */}
                        </div>
                        {/* end of col */}
                        <div className="col-lg-4">
                            <br /> <br />
                            {/* Request Form */}
                            <div className="form-container">
                                <div className="form-group">
                                    <a href="campusambassador.html">
                                        <button className="form-control-submit-button">
                                            Click Here
                                        </button>
                                    </a>
                                </div>
                                <div className="form-message">
                                    <div id="rmsgSubmit" className="h3 text-center hidden" />
                                </div>
                                {/* end of form-container */}
                                {/* end of request form */}
                            </div>
                            {/* end of col */}
                        </div>
                        {/* end of row */}
                    </div>
                    {/* end of container */}
                </div>
                {/* end of form-1 */}
                {/* end of request */}
                {/* Video */}
                <div className="basic-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Entreview - Watch Now!</h2>
                            </div>
                            {/* end of col */}
                        </div>
                        {/* end of row */}
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Video Preview */}
                                <div className="image-container">
                                    <div className="video-wrapper">
                                        <a
                                            className="popup-youtube"
                                            href="https://www.youtube.com/watch?v=xLiiO7XqObQ"
                                            data-effect="fadeIn"
                                        >
                                            <img
                                                className="img-fluid"
                                                src="images/video-frame.svg"
                                                alt="alternative"
                                            />
                                            <span className="video-play-button">
                                                <span />
                                            </span>
                                        </a>
                                    </div>
                                    {/* end of video-wrapper */}
                                </div>
                                {/* end of image-container */}
                                {/* end of video preview */}
                                <p>
                                    A brief interview of our honourable guest Dr Om Deshmukh sharing
                                    wisdom on multiple aspects of Entrepreneurship, Data Science and
                                    Student Life.
                                </p>
                                <br />
                                <a href="entreview.html">
                                    <button className="form-control-submit-button">
                                        Enter Entreview
                                    </button>
                                </a>
                            </div>
                            {/* end of col */}
                        </div>
                        {/* end of row */}
                    </div>
                    {/* end of container */}
                </div>
                {/* end of basic-3 */}
                {/* end of video */}
                {/* Testimonials */}
                <div className="slider-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="image-container">
                                    <img
                                        className="img-fluid"
                                        src="images/testimonials-2-men-talking.svg"
                                        alt="alternative"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h2>Series of Talks</h2>
                                {/* Card Slider */}
                                <div className="slider-container">
                                    <Swiper
                                        modules={[Navigation, Autoplay]}
                                        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                        }}
                                        loop={true}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        className="swiper-container card-slider"
                                    >
                                        <div className="swiper-wrapper">
                                            {/* Slide 1 */}
                                            <SwiperSlide className="swiper-slide">
                                                <div className="card">
                                                    <img className="card-image" src="images/new/1.jpg" alt="alternative" />
                                                    <div className="card-body">
                                                        <p className="testimonial-text">
                                                            The Entrepreneur 101 series covering details about the
                                                            scope of data science in the industry and its
                                                            application in data-driven corporations. The attendees
                                                            had an insightful experience regarding the same. We
                                                            thank Om Deshmukh sir for such an engaging talk.
                                                        </p>
                                                        <p className="testimonial-author">
                                                            Talk by Om Deshmukh - Founder of TildeHat
                                                        </p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>

                                            {/* Slide 2 */}
                                            <SwiperSlide className="swiper-slide">
                                                <div className="card">
                                                    <img className="card-image" src="images/new/3.jpg" alt="alternative" />
                                                    <div className="card-body">
                                                        <p className="testimonial-text">
                                                            Stock Market is not at all equivalent to gambling and
                                                            that the risks can be greatly minimized if one has a
                                                            proper understanding of the market. Using real-time
                                                            data, he demonstrated how to analyze, understand
                                                            various trends, traps, and opportunities in the market
                                                            along with the potential threats involved like false
                                                            tips, frauds in stock market.
                                                        </p>
                                                        <p className="testimonial-author">
                                                            Talk by Hardeep Malik - Founder of OmniBulls
                                                        </p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>

                                            {/* Slide 3 */}
                                            <SwiperSlide className="swiper-slide">
                                                <div className="card">
                                                    <img className="card-image" src="images/new/4.jpg" alt="alternative" />
                                                    <div className="card-body">
                                                        <p className="testimonial-text">
                                                            "How to pitch and how can a Startup succeed". It was
                                                            extremely knowledgeable and interactive as well. He
                                                            shared the information about how to grab investors'
                                                            attention and also their mindset, which will be
                                                            absolutely helpful for increasing investment.
                                                        </p>
                                                        <p className="testimonial-author">
                                                            Talk by Amit Mehra - Founding Principal, Unicorn India
                                                        </p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    </Swiper>

                                    {/* Add Arrows */}
                                    <div className="swiper-button-next"></div>
                                    <div className="swiper-button-prev"></div>
                                    {/* End of Add Arrows */}
                                </div>
                                {/* End of slider-container */}
                            </div>
                            {/* End of col */}
                        </div>
                        {/* End of row */}
                    </div>
                    {/* End of container */}
                </div>
                {/* end of slider-2 */}
                {/* end of testimonials */}
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="text-center">Past Collaborations</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-2 col-md-6 collab-wrapper">
                                <img
                                    className="img-fluid collab"
                                    src="images/Collaborations/ah_png.png"
                                    alt="Ah! Ventures"
                                />
                            </div>
                            <div className="col-lg-2 col-md-6 collab-wrapper">
                                <img
                                    style={{ backgroundColor: "black" }}
                                    className="img-fluid collab"
                                    src="images/Collaborations/fist_png.png"
                                    alt="Ah! Ventures"
                                />
                            </div>
                            <div className="col-lg-2 col-md-6 collab-wrapper">
                                <img
                                    className="img-fluid collab"
                                    src="images/Collaborations/karekeba-logo-sticky.png"
                                    alt="Ah! Ventures"
                                />
                            </div>
                            <div className="col-lg-2 col-md-6 collab-wrapper">
                                <img
                                    className="img-fluid collab"
                                    src="images/Collaborations/kindlelogo.png"
                                    alt="Ah! Ventures"
                                />
                            </div>
                            <div className="col-lg-2 col-md-6 collab-wrapper">
                                <img
                                    className="img-fluid collab"
                                    src="images/Collaborations/Whizzcorps_Png.png"
                                    alt="Ah! Ventures"
                                />
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
                {/* About */}
                <div id="about" className="basic-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>About The Team</h2>
                                <p className="p-heading p-large">Meet our new core team!</p>
                            </div>
                            {/* end of col */}
                        </div>
                        {/* end of row */}
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Team Member */}
                                <div className="team-member">
                                    <div className="image-wrapper">
                                        <img
                                            className="img-fluid"
                                            src="images/Team23-24/Yash Gautam.jpg"
                                            alt="Yash Gautam"
                                            height={200}
                                            width={200}
                                        />
                                    </div>
                                    {/* end of image-wrapper */}
                                    <p className="p-large">
                                        <strong>Yah Gautam</strong>
                                    </p>
                                    <p className="job-title">Advisory</p>
                                    <span className="social-icons">
                                        <span className="fa-stack">
                                            <a
                                                href="https://www.linkedin.com/in/yash9274gautam"
                                                target="blank"
                                            >
                                                <i className="fas fa-circle fa-stack-2x facebook" />
                                                <i className="fab fa-linkedin-in fa-stack-1x" />
                                            </a>
                                        </span>
                                    </span>
                                    {/* end of social-icons */}
                                </div>
                                {/* end of team-member */}
                                {/* end of team member */}
                                {/* Team Member */}
                                <div className="team-member">
                                    <div className="image-wrapper">
                                        <img
                                            className="img-fluid"
                                            src="images/Team23-24/Rohan Chaudhary.jpg"
                                            alt="Rohan Chaudhary"
                                            height={200}
                                            width={200}
                                        />
                                    </div>
                                    {/* end of image wrapper */}
                                    <p className="p-large">
                                        <strong>Rohan Chaudhary</strong>
                                    </p>
                                    <p className="job-title">Advisory</p>
                                    <span className="social-icons">
                                        <span className="fa-stack">
                                            <a
                                                href="https://www.linkedin.com/in/rohan-choudhary-iit-patna"
                                                target="blank"
                                            >
                                                <i className="fas fa-circle fa-stack-2x facebook" />
                                                <i className="fab fa-linkedin-in fa-stack-1x" />
                                            </a>
                                        </span>
                                    </span>
                                    {/* end of social-icons */}
                                </div>
                                {/* end of team-member */}
                                {/* end of team member */}
                                {/* Team Member */}
                                <div className="team-member">
                                    <div className="image-wrapper">
                                        <img
                                            className="img-fluid"
                                            src="images/Team23-24/Ruchir Mohan.jpg"
                                            alt="Ruchir Mohan"
                                            height={200}
                                            width={200}
                                        />
                                    </div>
                                    {/* end of image wrapper */}
                                    <p className="p-large">
                                        <strong>Ruchir Mohan</strong>
                                    </p>
                                    <p className="job-title">Advisory</p>
                                    <span className="social-icons">
                                        <span className="fa-stack">
                                            <a
                                                href="https://www.linkedin.com/in/ruchir-mohan-deoraj-8216ab222"
                                                target="blank"
                                            >
                                                <i className="fas fa-circle fa-stack-2x facebook" />
                                                <i className="fab fa-linkedin-in fa-stack-1x" />
                                            </a>
                                        </span>
                                    </span>
                                    {/* end of social-icons */}
                                </div>
                                {/* end of team-member */}
                            </div>
                            {/*end of col*/}
                        </div>
                        {/*end of row*/}
                        {/* Team Member */}
                        <div className="team-member">
                            <div className="image-wrapper">
                                <img
                                    className="img-fluid"
                                    src="images/Team23-24/Ayush.jpg"
                                    alt="Ayush"
                                />
                            </div>
                            {/* end of image wrapper */}
                            <p className="p-large">
                                <strong>Ayush</strong>
                            </p>
                            <p className="job-title">Sponsorship</p>
                            <span className="social-icons">
                                <span className="fa-stack">
                                    <a
                                        href="https://www.linkedin.com/in/ayush-singh-585434221/"
                                        target="blank"
                                    >
                                        <i className="fas fa-circle fa-stack-2x facebook" />
                                        <i className="fab fa-linkedin-in fa-stack-1x" />
                                    </a>
                                </span>
                            </span>
                            {/* end of social-icons */}
                        </div>
                        {/* end of team-member */}
                        {/* end of team member */}
                        {/* Team Member */}
                        <div className="team-member">
                            <div className="image-wrapper">
                                <img
                                    className="img-fluid"
                                    src="images/Team23-24/Hariomkant_sharma.jpg"
                                    alt="Hariomkant Sharma"
                                />
                            </div>
                            {/* end of image-wrapper */}
                            <p className="p-large">
                                <strong>Hariomkant Sharma</strong>
                            </p>
                            <p className="job-title">Media and Public Relations</p>
                            <span className="social-icons">
                                <span className="fa-stack">
                                    <a
                                        href="https://www.linkedin.com/in/hariomkant-sharma-934577240"
                                        target="blank"
                                    >
                                        <i className="fas fa-circle fa-stack-2x facebook" />
                                        <i className="fab fa-linkedin-in fa-stack-1x" />
                                    </a>
                                </span>
                            </span>
                            {/* end of social-icons */}
                        </div>
                        {/* end of team-member */}
                        {/* end of team member */}
                        {/* Team Member */}
                        <div className="team-member">
                            <div className="image-wrapper">
                                <img
                                    className="img-fluid"
                                    src="images/Team23-24/Chitraksh.jpg"
                                    alt="Chitraksh"
                                />
                            </div>
                            {/* end of image wrapper */}
                            <p className="p-large">
                                <strong>Chitraksh</strong>
                            </p>
                            <p className="job-title">Media and Public Relations</p>
                            <span className="social-icons">
                                <span className="fa-stack">
                                    <i className="fas fa-circle fa-stack-2x facebook" />
                                    <i className="fab fa-linkedin-in fa-stack-1x" />
                                </span>
                            </span>
                            {/* end of social-icons */}
                        </div>
                        {/* end of team-member */}
                        {/* end of team member */}
                        {/* Team Member */}
                        <div className="team-member">
                            <div className="image-wrapper">
                                <img
                                    className="img-fluid"
                                    src="images/Team23-24/Anjali.jpg"
                                    alt="Anjali"
                                />
                            </div>
                            {/* end of image wrapper */}
                            <p className="p-large">
                                <strong>Anjali</strong>
                            </p>
                            <p className="job-title">Creatives and Designs</p>
                            <span className="social-icons">
                                <span className="fa-stack">
                                    <a
                                        href="https://www.linkedin.com/in/anjali-kumari-48107b230"
                                        target="blank"
                                    >
                                        <i className="fas fa-circle fa-stack-2x facebook" />
                                        <i className="fab fa-linkedin-in fa-stack-1x" />
                                    </a>
                                </span>
                            </span>
                            {/* end of social-icons */}
                        </div>
                        {/* end of team-member */}
                        {/* end of team member */}
                        {/* Team Member */}
                        <div className="team-member">
                            <div className="image-wrapper">
                                <img
                                    className="img-fluid"
                                    src="images/Team23-24/Ritvik.jpg"
                                    alt="Ritvik"
                                />
                            </div>
                            {/* end of image wrapper */}
                            <p className="p-large">
                                <strong>Ritvik</strong>
                            </p>
                            <p className="job-title">Event Management</p>
                            <span className="social-icons">
                                <span className="fa-stack">
                                    <a
                                        href="https://www.linkedin.com/in/venkata-sai-ritvik-kadiri-178a5022a"
                                        target="blank"
                                    >
                                        <i className="fas fa-circle fa-stack-2x facebook" />
                                        <i className="fab fa-linkedin-in fa-stack-1x" />
                                    </a>
                                </span>
                            </span>
                            {/* end of social-icons */}
                        </div>
                        {/* end of team-member */}
                        {/* end of team member */}
                        {/* Team Member */}
                        <div className="team-member">
                            <div className="image-wrapper">
                                <img
                                    className="img-fluid"
                                    src="images/Team23-24/Rajat_Chandna.jpg"
                                    alt="Rajat Chandna"
                                />
                            </div>
                            {/* end of image-wrapper */}
                            <p className="p-large">
                                <strong>Rajat Chandna</strong>
                            </p>
                            <p className="job-title">Event Management</p>
                            <span className="social-icons">
                                <span className="fa-stack">
                                    <a
                                        href="https://www.linkedin.com/in/rajat-chandna-5770b1225"
                                        target="blank"
                                    >
                                        <i className="fas fa-circle fa-stack-2x facebook" />
                                        <i className="fab fa-linkedin-in fa-stack-1x" />
                                    </a>
                                </span>
                            </span>
                            {/* end of social-icons */}
                        </div>
                        {/* end of team-member */}
                        {/* Team Member */}
                        <div className="team-member">
                            <div className="image-wrapper">
                                <img
                                    className="img-fluid"
                                    src="images/Team23-24/salochana.jpg"
                                    alt="Salochana"
                                />
                            </div>
                            {/* end of image-wrapper */}
                            <p className="p-large">
                                <strong>Salochana</strong>
                            </p>
                            <p className="job-title">Startup Relations</p>
                            <span className="social-icons">
                                <span className="fa-stack">
                                    <a
                                        href="https://www.linkedin.com/in/salochana-82342b230"
                                        target="blank"
                                    >
                                        <i className="fas fa-circle fa-stack-2x facebook" />
                                        <i className="fab fa-linkedin-in fa-stack-1x" />
                                    </a>
                                </span>
                            </span>
                            {/* end of social-icons */}
                        </div>
                        {/* end of team-member */}
                    </div>
                    {/* end of col */}
                </div>
                {/* end of row */}
            </div>
            {/* end of container */}
            {/* end of basic-4 */}
            {/* end of about */}
            <hr />
            {/* Contact */}
            <div id="contact" className="form-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Contact Information</h2>
                            <ul className="list-unstyled li-space-lg">
                                <li className="address">
                                    Don't hesitate to give us a call or send us a contact form message
                                </li>
                                <li>
                                    <i className="fas fa-map-marker-alt" />
                                    Indian Institute of Technology Patna, Bihta, Bihar 801103
                                </li>
                            </ul>
                        </div>
                        {/* end of col */}
                    </div>
                    {/* end of row */}
                    <div className="row">
                        {/* end of col */}
                        {/* Contact Form */}
                        <form
                            id="contactForm"
                            action="message.php"
                            method="post"
                            role="form"
                            data-toggle="validator"
                            data-focus="false"
                        >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control-input"
                                    name="name"
                                    id="name"
                                    required=""
                                />
                                <label className="label-control" htmlFor="name">
                                    Name
                                </label>
                                <div className="help-block with-errors" />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control-input"
                                    name="email"
                                    id="email"
                                    required=""
                                />
                                <label className="label-control" htmlFor="email">
                                    Email
                                </label>
                                <div className="help-block with-errors" />
                            </div>
                            <div className="form-group">
                                <textarea
                                    className="form-control-textarea"
                                    name="message"
                                    id="message"
                                    required=""
                                    defaultValue={""}
                                />
                                <label className="label-control" htmlFor="message">
                                    Your message
                                </label>
                                <div className="help-block with-errors" />
                            </div>
                            It may take some time to revert back. You can directly mail us
                            instead!
                            <div className="form-group">
                                <br />
                                <button type="submit" className="form-control-submit-button">
                                    SUBMIT MESSAGE
                                </button>
                            </div>
                            <div className="form-message">
                                <div id="cmsgSubmit" className="h3 text-center hidden" />
                            </div>
                        </form>
                        {/* end of contact form */}
                        {/* end of col */}
                    </div>
                    {/* end of row */}
                </div>
                {/* end of container */}
            </div>
            {/* end of form-2 */}
            {/* end of contact */}
            {/* Footer */}
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-col">
                                <h4>About us</h4>
                                <p>
                                    CONTACT US
                                    <br /> Phone :{" "}
                                    <span>
                                        <a href="tel:+916266990988">+91 6266990988</a>
                                    </span>
                                    <br /> Email : entrepreneurship@iitp.ac.in
                                </p>
                            </div>
                        </div>
                        {/* end of col */}
                        <div className="col-md-4">
                            <div className="footer-col middle">
                                <h4>Important Links</h4>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-square" />
                                        <div className="media-body">
                                            Home{" "}
                                            <a className="turquoise" href="index.html">
                                                Here
                                            </a>
                                        </div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square" />
                                        <div className="media-body">
                                            Campus Ambassador{" "}
                                            <a className="turquoise" href="campusambassador.html">
                                                Here
                                            </a>
                                        </div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square" />
                                        <div className="media-body">
                                            Entreview{" "}
                                            <a className="turquoise" href="entreview.html">
                                                Here
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* end of col */}
                        <div className="col-md-4">
                            <div className="footer-col last">
                                <h4>Social Media</h4>
                                <span className="fa-stack">
                                    <a href="https://www.facebook.com/ecelliitp/">
                                        <i className="fas fa-circle fa-stack-2x" />
                                        <i className="fab fa-facebook-f fa-stack-1x" />
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="https://twitter.com/ecelliitp/">
                                        <i className="fas fa-circle fa-stack-2x" />
                                        <i className="fab fa-twitter fa-stack-1x" />
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="https://www.instagram.com/ecell_iitpatna/">
                                        <i className="fas fa-circle fa-stack-2x" />
                                        <i className="fab fa-instagram fa-stack-1x" />
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="https://www.linkedin.com/company/ecell-iit-patna/">
                                        <i className="fas fa-circle fa-stack-2x" />
                                        <i className="fab fa-linkedin-in fa-stack-1x" />
                                    </a>
                                </span>
                            </div>
                        </div>
                        {/* end of col */}
                    </div>
                    {/* end of row */}
                </div>
                {/* end of container */}
            </div>
            {/* end of footer */}
            {/* end of footer */}
            {/* Copyright */}
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="p-small">Copyright © 2021 - All rights reserved</p>
                        </div>
                        {/* end of col */}
                    </div>
                    {/* enf of row */}
                </div>
                {/* end of container */}
            </div>
            {/* end of copyright */}
            {/* end of copyright */}
            {/* Scripts */}
            {/* jQuery for Bootstrap's JavaScript plugins */}
            {/* Popper tooltip library for Bootstrap */}
            {/* Bootstrap framework */}
            {/* jQuery Easing for smooth scrolling between anchors */}
            {/* Swiper for image and text sliders */}
            {/* Magnific Popup for lightboxes */}
            {/* Validator.js - Bootstrap plugin that validates forms */}
            {/* Custom scripts */}
        </>

    );
};

export default ESummit;