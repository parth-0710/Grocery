import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="col-md-3 footer-grid">
                        <h3>About Us</h3>
                        <p>This is <Link to="https://linktr.ee/parthtrivedi"> Parth Trivedi</Link>. I am Full Stack Developer . I Am Working On Nodejs ,Express, MongoDB & Reactjs since 2 Years . So, If You Want Make Any Kind Of Website/Software Please Freely Contact With Us.</p>
                    </div>
                    <div className="col-md-3 footer-grid ">
                        <h3>Menu</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/kitchen">Kitchen</Link></li>
                            <li><Link to="/care">Personal Care</Link></li>
                            <li><Link to="/house-hold">Household</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-grid ">
                        <h3>Customer Services</h3>
                        <ul>
                            <li><Link to="/desclaimer">Disclaimer</Link></li>
                            <li><Link to="/faq">Faqs</Link></li>
                            <li><Link to="/privacy-and-policy">Privacy & Policy</Link></li>
                            <li><Link to="/term-and-condition">Terms &amp; Conditions</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-grid">
                        <h3>My Account</h3>
                        <ul>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            {/* <li><Link to="wishlist">Wishlist</Link></li> */}
                        </ul>
                    </div>
                    <div className="clearfix" />
                    <div className="footer-bottom">
                        <h2><Link to="/"><b>T<br />H<br />E</b>Big Store<span>The Best Supermarket</span></Link></h2>
                        <p className="fo-para">This is <Link to="https://linktr.ee/parthtrivedi"> Parth Trivedi</Link>. I am Full Stack Developer . I am working on Nodejs ,Express, MongoDB & Reactjs since 2years .So, If You Want Make Any Kind Of Website/Software Please Freely Contact With Us.</p>
                        <ul className="social-fo">
                            <li><Link to="facebook.com/preeti.trivedi.940098" className=" face"><i className="fa fa-facebook" aria-hidden="true" /></Link></li>
                            <li><Link to="twitter.com/Parth_0710" className=" twi"><i className="fa fa-twitter" aria-hidden="true" /></Link></li>
                            <li><Link to="instagram.com/parth_trivedi_07" className=" pin"><i className="fa fa-instagram" aria-hidden="true" /></Link></li>
                            <li><Link to="snapchat.com/add/parthtrivedi07" className=" dri"><i className="fa fa-snapchat" aria-hidden="true" /></Link></li>
                        </ul>
                        <div className=" address">
                            <div className="col-md-4 fo-grid1">
                                <p><i className="fa fa-home" aria-hidden="true" />Riaya Chowk , Rajkot , India.</p>
                            </div>
                            <div className="col-md-4 fo-grid1">
                                <p><i className="fa fa-phone" aria-hidden="true" />+91 7016055098</p>
                            </div>
                            <div className="col-md-4 fo-grid1">
                                <p><Link to="/gmail.com"><i className="fa fa-envelope-o" aria-hidden="true" />parthtrivedi0710@gmail.com</Link></p>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                    <div className="copy-right">
                        <p> © 2020 Big store. All Rights Reserved | Design by  <Link to="https://linktr.ee/parthtrivedi"> PARTH TRIVEDI</Link></p>
                    </div>
                </div>
            </div>

        )
    }
}
