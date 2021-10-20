import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import News from './News/News/News';
import Testimonials from './Testimonials/Testimonials';

const About = () => {
    return (
        <div  >

            <div className="pt-5 pb-5 bg-light">
                <Container >
                    <Row md={2} sm={1} xs={1}>
                        <Col>
                            <div className="about-text">
                                <h4 className='text-primary'>BANGLADESH SPECIALIZED HOSPITAL</h4>
                                <h6 className='text-success'>GET A WORLD CLASS HEALTH SERVICE</h6>
                                <p>BSH has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality. The hospital is a showcase of synergy of medical technology and advances in ICT Division through paperless medical records. The skilled nurses, technologists and administrators of Bangladesh Specialized Hospital, aided by state-of-the-art equipments, provide a congenial infrastructure for the medical professionals in providing healthcare of international standards.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="about-img">
                                <img src="http://www.bdspecializedhospital.com/UI/FrontEnd/img/BSHL1.jpg" className="img-fluid" alt="" />
                            </div></Col>

                    </Row>
                </Container>
            </div>
            <div className="pt-5 pb-5" style={{
                backgroundColor: "#E1EBED"
            }}>
                <Container>
                    <Row md={2} sm={1}>
                        <Col>
                            <h2 className='text-success pb-2'>Mission</h2>
                            <p>WE ARE DEDICATED TO MEETING THE NEEDS OF:</p>
                            <ul>
                                <li>Our patient - excellent and cost-effective healthcare</li>
                                <li>Our staff - continuing development and welfare</li>
                                <li>Our nation - partnership in promoting health in Bangladesh.</li>
                            </ul>
                        </Col>
                        <Col>
                            <h2 className='text-success pb-2'>VISION</h2>
                            <div className="p-4 shadow">
                                <h6>"TO BE A RENOWNED ORGANIZATION AT THE LEADING EDGE OF MEDICINE, PROVIDING QUALITY HEALTHCARE TO MEET OUR NATION'S ASPIRATIONS."</h6>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            <News></News>
            <Testimonials></Testimonials>

        </div>
    );
};

export default About;