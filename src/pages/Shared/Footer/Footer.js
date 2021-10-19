import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (

        <div className='footer'>
            <Container>
                <Row>
                    <Col xs={6} md={3}>
                        {/* <h4>AlMamun</h4> */}
                        <p><small>
                            <img src="https://www.bdspecializedhospital.com/UI/FrontEnd/img/footer-logo.png" alt="" /></small></p>
                        <p>Bangladesh Specialized Hospital has all the characteristics of a world-class hospital with wide range of services
                            and
                            specialists, equipments and technology, ambience and service quality.</p>
                    </Col>
                    <Col xs={6} md={3}>
                        <h4>Quick Links
                        </h4>

                        <p>  <Link to='/about' className='nav-item-footer'>
                            About Us
                        </Link></p>
                        <p>  <Link to='/ourteam' className='nav-item-footer'>
                            Our Team
                        </Link></p>
                        <p>  <Link to='/instructor' className='nav-item-footer'>
                            Instructor
                        </Link></p>

                    </Col>
                    <Col xs={6} md={3}>
                        <h4>
                            Quick Link</h4>
                        <p><Link to='' className='nav-item-footer'>News & Media</Link></p>
                        <p><Link to='' className='nav-item-footer'>WordPress Development</Link></p>
                        <p><Link to='' className='nav-item-footer'>Business Strategy</Link></p>
                        <p><Link to='' className='nav-item-footer'>Software Development</Link></p>

                    </Col>
                    <Col xs={6} md={3}>
                        <h4>

                            Contact Us</h4>
                        <p>
                            House 82, Road 10/1, Block D, Niketan, Gulshan 1, Dhaka - 1212.
                        </p>
                        <p>+91 458 654 528</p>
                        <Link to='' className='nav-item-footer'> <p>AlMamun@gmail.com</p></Link>
                    </Col>
                </Row>
                <hr />
                {/* foooter bottom */}
                <Row>
                    <Col md={6}>Designed & Developed by AlMamun</Col>
                    <Col md={6} >
                        <p className="text-end">
                            © Copyright 2021 AlMamun All rights reserved.
                        </p>

                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Footer;