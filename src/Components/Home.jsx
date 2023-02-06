import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/app-logo.svg"
import map from "../assets/map.png"
import second from "../assets/secomd-image.png"
import search from "../assets/search.svg"
import dollar from "../assets/dollar.svg"
import data from './data'
import "./Home.css"
import HomeCard from './HomeCard'



const Home = () => {
    return (
        <div className='Home'>
            <section className="home">

                <section className="nav">
                    <div className="logo">
                        <img src={logo} alt="" />
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

                    <h1 className="text">
                        The most affortable place to stay in the san franciso bay area
                    </h1>

                    <div className="mapp">
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
                            <img className='search' src={search} alt="searchIcon" />


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
                    <img src={second} className='photo' alt="" />

                    <div className="columns">

                        <div className="row">
                            <div className="row1">
                                <div className="square">

                                    <img src={dollar} alt="" />
                                </div>


                                <p className="rt1">
                                    Pay as Little
                                    as possible!
                                </p>

                            </div>
                            <div className="row2">
                                <div className="square">

                                    <img src={dollar} alt="" />
                                </div>

                                <p className="rt2">
                                    Enjoy wisdom
                                    of community!
                                </p>
                            </div>
                            <div className="row3">

                                <div className="square">

                                    <img src={dollar} alt="" />
                                </div>

                                <p className="rt3">
                                    Let's somebody else
                                    take care of Landlord!
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="row4">

                                <div className="square">
                                    <img src={dollar} alt="" />

                                </div>

                                <p className="rt4">
                                    Enjoy peaceful
                                    Environment!
                                </p>
                            </div>
                            <div className="row5">
                                <div className="square">

                                    <img src={dollar} alt="" />
                                </div>

                                <p className="rt5">
                                    Stay Safe!
                                    Save Money!
                                </p>
                            </div>
                            <div className="row3">
                                <div className="square">

                                    <img src={dollar} alt="" />
                                </div>


                                <p className="rt6">
                                    Pay for what
                                    you use !
                                </p>
                            </div>
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

            </section>

        </div>
    )
}

export default Home