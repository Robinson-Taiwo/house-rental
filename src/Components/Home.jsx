import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/app-logo.svg"
import map from "../assets/map.png"
import second from "../assets/secomd-image.png"
import search from "../assets/search.svg"
import dollar from "../assets/dollar.svg"
import quote from "../assets/quote.svg"
import play from "../assets/play.svg"
import location from "../assets/location.svg"
import data from './data'
import "./Home.css"
import phone from "../assets/phone.svg"
import fax from "../assets/fax.svg"
import youtube from "../assets/youtube.svg"
import twitter from "../assets/Twitter.svg"
import pinterest from "../assets/Pinterest.svg"
import HomeCard from './HomeCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const prope = data.map((item, index) => {
    return (

        <HomeCard image={item.Image} name={item.name} key={index} price={item.price} />

    )
})


const Home = () => {
    AOS.init({ duration: 2000 });

    return (
        <div className='Home'>
            <section className="home">

                <section className="nav">
                    <div className="logot" >
                        <img src={logo} className="logo" alt="" />
                    </div>

                    <div className="links">
                        <Link to="/" className='link1'>Home</Link>
                        <Link to="/Landlord" className='link2'>Landlord</Link>
                        <Link to="/Tenants" className='link3'>Tenants</Link>
                        <Link to="/Contact" className='link4'>Contact us</Link>

                    </div>

                </section>

                <div className="line"></div>

                <div className="header">

                    <h1 data-aos="zoom-out-down" className="text">
                        The most affortable place to stay in the san franciso bay area
                    </h1>

                    <div data-aos="zoom-out-up" className="mapp">
                        <img src={map} alt="map" className="map" />



                        <div className="inputs">
                            <select name="All type" id="all">
                                <option value="All Types">All Type</option>
                                <option value="2">2</option>
                                <option value="3">3</option>

                            </select>

                            <select name="All type" id="neighbour">
                                <option value="niger">Neighbourhood</option>
                                <option value="america">america</option>
                                <option value="usa">usa</option>

                            </select>
                            <img className='search1' src={search} alt="searchIcon" />


                        </div>

                    </div>


                </div>

            </section>

            <section className="trans">

                <div className="mini">


                    minimum living cost takes care of everything
                </div>

                <div className="line2"></div>

                <section className="full">
                    <img data-aos="fade-down" src={second} className='photo' alt="" />

                    <div data-aos="fade-up" className="columns">


                        <div className="row1">
                            <div className="square">

                                <img src={dollar} alt="" />
                            </div>


                            <p data-aos="zoom-in" className="rt1">
                                Pay as Little
                                as possible!
                            </p>

                        </div>
                        <div className="row2">
                            <div className="square">

                                <img src={dollar} alt="" />
                            </div>

                            <p data-aos="zoom-in" className="rt2">
                                Enjoy wisdom
                                of community!
                            </p>
                        </div>
                        <div className="row3">

                            <div className="square">

                                <img src={dollar} alt="" />
                            </div>

                            <p data-aos="zoom-in" className="rt3">
                                Let's somebody else
                                take care of Landlord!
                            </p>
                        </div>


                        <div className="row1">

                            <div className="square">
                                <img src={dollar} alt="" />

                            </div>

                            <p data-aos="zoom-in" className="rt4">
                                Enjoy peaceful
                                Environment!
                            </p>
                        </div>
                        <div className="row5">
                            <div className="square">

                                <img src={dollar} alt="" />
                            </div>

                            <p data-aos="zoom-in" className="rt5">
                                Stay Safe!
                                Save Money!
                            </p>
                        </div>
                        <div className="row6">
                            <div className="square">

                                <img src={dollar} alt="" />
                            </div>


                            <p data-aos="zoom-in" className="rt6">
                                Pay for what
                                you use !
                            </p>
                        </div>


                    </div>

                </section>


            </section>

            <section className="lists">

                <div className="props">
                    <h2 className="list">list of properties</h2>

                    <button className="orange">
                        view all property
                    </button>
                </div>

                <div className="tub">
                    {
                        data.map((item, index) => {
                            return (
                                <HomeCard image={item.Image} name={item.name} key={index} price={item.price} />
                            )
                        })
                    }


                </div>

                <div className="tub1">
                <Carousel autoPlay={true} infinite={true} className='caro' showDots={true} responsive={responsive}>
                    {
                        data.map((item, index) => {
                            return (
                                <HomeCard image={item.Image} name={item.name} key={index} price={item.price} />
                            )
                        })
                    }
                </Carousel>
                </div>

               


                <section className="switch">
                    <div className="pages">
                        <button className="page1">First</button>
                        <div className="page2">2</div>
                        <button className="page3">3</button>
                        <button className="page4">4</button>
                        <button className="page5">Next</button>

                    </div>
                </section>

            </section>

            <section className="foot">

                <div className="foot1">

                    <div className="clean">

                        <div className="hapy">
                            <div data-aos="zoom-in-up" className="hap1"> Flexible Leases </div>
                            <div data-aos="zoom-in-up" className="hap2"> 7-Day Happiness Guaranteed</div>
                        </div>

                        <div className="hapx">
                            <div data-aos="zoom-out-up" className="hap3"> Monthly House Cleaning</div>
                            <div data-aos="zoom-out-up" className="hap4"> <div className="hap4t">Choose Your Own Roomate</div> </div>
                        </div>


                    </div>

                    <div data-aos="zoom-in-down" className="search">
                        <h1 className="lifestyle">
                            Flexibility and options to suit your lifestyle.
                        </h1>
                        <p className="desire">
                            You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.
                        </p>

                        <button className="rooms">
                            Search Rooms
                        </button>

                    </div>
                </div>

                <section className="confident">

                    <div data-aos="zoom-in" className="confi">
                        Your property with us and be Confident that Your Room will be Filled Out!
                    </div>
                </section>

                <section className="add">


                    <div data-aos="fade-in" className="new">


                        <div className="new-header">
                            Add A New Property
                        </div>

                        <div className="details">

                            <div className="topi">
                                <p className="topih">Name <span className='asterik' >*</span> </p>
                                <input type="text" className="tops"
                                    id="tops"

                                    placeholder='Enter Name' />
                            </div>

                            <div className="topi">
                                <p className="topih">Address <span className='asterik' >*</span> </p>
                                <input type="text" className="tops"

                                    id="tops"

                                    placeholder='Enter Address' />
                            </div>

                            <div className="topi">
                                <p className="topih">Unit Number <span className='asterik' >*</span> </p>
                                <input type="text" className="tops"
                                    id="tops"
                                    placeholder='Enter Unit' />
                            </div>


                            <div className="topi">
                                <p className="topih">City <span className='asterik' >*</span> </p>

                                <select name="All type" id="tops">
                                    <option value="All Types">All Type</option>
                                    <option value="2">Oklahoma</option>
                                    <option value="3">ilorin</option>

                                </select>
                            </div>


                            <div className="topi">
                                <p className="topih">State <span className='asterik' >*</span> </p>

                                <select name="All type" id="tops">
                                    <option value="All Types">All Type</option>
                                    <option value="2">Abuja</option>
                                    <option value="2">Kwara</option>
                                    <option value="2">America</option>
                                    <option value="2">washington</option>
                                </select>
                            </div>

                            <div className="topi">
                                <p className="topih">Room Type <span className='asterik' >*</span> </p>

                                <select name="All type" id="tops">
                                    <option value="All Types">All Type</option>
                                    <option value="2">VIP</option>
                                    <option value="3">normal</option>

                                </select>
                            </div>

                            <div className="topi">
                                <p className="topih">Price <span className='asterik' >*</span> </p>

                                <select name="All type" id="tops">
                                    <option value="All Types">All Type</option>
                                    <option value="2">premium</option>
                                    <option value="3">compact</option>

                                </select>
                            </div>

                            <div className="topi">
                                <p className="topih">Room Type <span className='asterik' >*</span> </p>

                                <select name="All type" id="tops">
                                    <option value="All Types">All Type</option>
                                    <option value="2">private</option>
                                    <option value="3">public</option>

                                </select>
                            </div>

                        </div>
                        <div className="topi">
                            <p className="topih">Description <span className='asterik' >*</span> </p>
                            <textarea type="text" className="topd" placeholder='Enter Description ' />
                        </div>

                        <div className="topio">
                            <p className="topih">Upload Photos <span className='asterik' >*</span> </p>
                            <div className='topt'>

                                <div className="toptt">
                                    Drag your images here, or <input type="file" placeholder='Browse' className='browse' />
                                </div>

                                <div className="topt1">
                                    Supported:  JPG, JPEG, PNG
                                </div>

                            </div>
                        </div>

                        <button className="but-o">
                            Add New Property
                        </button>

                    </div>


                </section>


            </section>

            <div className="quote">
                <div className="lorem">
                    <img src={quote} className="punct" alt="" />

                    <div data-aos="zoom-in-up" className="ipsum">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
                    </div>

                </div>
                <div className="youtube">
                    <iframe
                        width="611" height="590"
                        id='youtube' src="https://www.youtube.com/embed/HOfJp8IOmu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    {/* <iframe
                        width="611" height="590"
                        id='youtube1' src="https://www.youtube.com/embed/HOfJp8IOmu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                </div>

            </div>

            <div className="footer">
                <div className="line3">
                </div>

                <div className="footer2">

                    <img src={logo} className="logo2" alt="" />

                    <div className="rest">
                        <div className="drive">
                            <div className="drive-state"> <img src={location} alt="" /> <span>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</span> </div>
                        </div>

                        <div className="rest-second">

                            <div className="call">
                                <div className="call-state"> <img src={phone} alt="" /> <span>(123) 456-7890</span> </div>
                            </div>

                            <div className="fax">
                                <div className="fax-state"> <img src={fax} alt="" /> <span>(123) 456-7890</span> </div>
                            </div>

                        </div>

                        <div className="media">
                            <div className="sot">social media</div>

                            <img src={fax} alt="" className="social-icon" />
                            <img src={twitter} alt="" className="social-icon" />
                            <img src={youtube} alt="" className="social-icon" />
                            <img src={pinterest} alt="" className="social-icon" />
                            <img src={fax} alt="" className="social-icon" />
                            <img src={fax} alt="" className="social-icon" />
                            <img src={fax} alt="" className="social-icon" />
                            <img src={fax} alt="" className="social-icon" />

                        </div>


                    </div>

                </div>

                <div className="line4"></div>


                <div className="last-footer">
                    <div className="last">
                        <div className="last1"> ABOUT US</div>
                        <div className="last2">CONTACT US </div>
                        <div className="last3">HELP</div>
                        <div className="last4">PRIVACY POLICY</div>
                        <div className="last5">DISCLAIMER</div>

                    </div>

                    <div className="last-second">
                        Copyright © 2020 Minimumlivingcost. All rights reserved
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home