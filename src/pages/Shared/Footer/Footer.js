import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (

        <div className='footer'>
            <Container>
                <Row>
                    <Col >
                        {/* <h4>AlMamun</h4> */}
                        <p><small>
                            <img src="https://www.bdspecializedhospital.com/UI/FrontEnd/img/footer-logo.png" alt="" /></small></p>
                        <p>Bangladesh Specialized Hospital has all the characteristics of a world-class hospital with wide range of services
                            and
                            specialists, equipments and technology, ambience and service quality.</p>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12}>
                        <h4 className='py-2'>Social Links
                        </h4>

                        <div>
                            <Link to='' className='nav-item-footer'>
                                <div className='d-flex  '>
                                    <p className="me-3"><i class="fab fa-facebook"></i></p>
                                    <p>Facebook</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to='' className='nav-item-footer'>
                                <div className='d-flex  '>
                                    <p className="me-3"><i class="fab fa-instagram"></i></p>
                                    <p>Instagram</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to='' className='nav-item-footer'>
                                <div className='d-flex  '>
                                    <p className="me-3"><i class="fab fa-twitter"></i></p>
                                    <p>Twitter</p>
                                </div>
                            </Link>
                        </div>


                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12}>
                        <h4 className='py-2'>
                            Quick Link</h4>
                        <p><Link to='/doctors' className='nav-item-footer'>Doctors</Link></p>

                        <p><Link to='/departments' className='nav-item-footer'>Departments</Link></p>
                        <p>  <Link to='/about' className='nav-item-footer'>
                            About Us
                        </Link></p>
                        <p>  <Link to='/ourteam' className='nav-item-footer'>
                            Our Team
                        </Link></p>


                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12}>
                        <h4 className='py-2'>

                            Emergency number</h4>

                        <h5 className="text-danger">+91 458 654 528</h5>
                        <p>
                            Call us now if you are in a medical emergency need, we will reply swiftly and provide you with a medical aid.
                        </p>

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