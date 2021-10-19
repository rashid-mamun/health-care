
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Services.css'

const Services = () => {
    return (
        <div className='text-center pt-5 pb-5 services-container'>
            <Container>
                <h1 className='pb-4 text-success'>OUR SERVICES & FACILITIES</h1>
                <Row md={3} sm={2} xs={1} className='g-5 pb-5'>


                    <Col >
                        <div className='d-flex justify-content-center align-items-center services-col'>
                            <p className='me-3'>  <i class="fas fa-capsules"></i></p>
                            <p> Nursing, Paramedical Services</p>

                        </div>



                    </Col>
                    <Col >
                        <div className='d-flex justify-content-center align-items-center services-col'>
                            <p className='me-3'> <i class="fas fa-ribbon"></i></p>
                            <p> Immunization (Vaccination)</p>
                        </div>


                    </Col>
                    <Col >
                        <div className='d-flex justify-content-center align-items-center services-col'>

                            <p className='me-3'>  <i class="fas fa-brain"></i></p>
                            <p>
                                Specialized Services</p>
                        </div>


                    </Col>
                    <Col >
                        <div className='d-flex justify-content-center align-items-center services-col'>
                            <p className='me-3'><i class="fas fa-brain"></i></p>

                            <p> Health and Allied Services</p>
                        </div>

                    </Col>
                    <Col >
                        <div className='d-flex justify-content-center align-items-center services-col'>
                            <p className='me-3'>
                            </p>
                            <p>    Utilities & Allied Services </p>
                        </div>


                    </Col>


                    <Col>
                        <div className='d-flex justify-content-center align-items-center services-col'>
                            <p className='me-3'><i class="fas fa-ribbon"></i></p>
                            <p> Hospital Facility</p>
                        </div>

                    </Col>

                </Row>
            </Container>
            <div className='pt-5 pb-5 count'>
                <Row md={4} sm={2} xs={2} className="g-3">
                    <Col>
                        <div className='border-one'>
                            <h2>
                                <img src="https://www.bdspecializedhospital.com/UI/FrontEnd/img/count-dept.png" alt="" />
                            </h2>
                            <h2>8</h2>
                            <h2>Departments</h2>
                        </div>
                    </Col>
                    <Col>
                        <div className='border-one'>
                            <h2>
                                <img src="https://www.bdspecializedhospital.com/UI/FrontEnd/img/count-doc.png" alt="" />
                            </h2>
                            <h2>20</h2>
                            <h2>Expert Doctors</h2>
                        </div>
                    </Col>
                    <Col>
                        <div className='border-one'>
                            <h2>
                                <img src="https://www.bdspecializedhospital.com/UI/FrontEnd/img/count-nurse.png" alt="" />
                            </h2>
                            <h2>100</h2>
                            <h2>Trained Nurse</h2>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h2>

                                <img src="https://www.bdspecializedhospital.com/UI/FrontEnd/img/count-pat.png" alt="" />
                            </h2>
                            <h2>10000</h2>
                            <h2>Happy Patient</h2>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Services;