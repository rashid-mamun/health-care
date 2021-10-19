import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import NotFound from '../../NotFound/NotFound';
import './DoctorDetails.css'

const DoctorDetails = () => {
    const { doctorId } = useParams();
    // console.log(doctorId);
    const [doctors, setDoctors] = useState([]);
    const [doctorDetails, setDoctorDetails] = useState([]);

    useEffect(() => {

        fetch('https://api.jsonbin.io/b/616e804b4a82881d6c623afa')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);

    useEffect(() => {

        for (const doctor of doctors) {
            if (doctor.id === doctorId) {
                setDoctorDetails(doctor);
            }
        }

    }, [doctors]);
    // console.log(doctorDetails);

    const { name, title, img, experience, specialization, degree } = doctorDetails;

    return (
        <div className='courseDetails-container pt-5 pb-5 bg-light '>

            {
                doctorDetails.title ? <Container>

                    <h1 className='text-success fw-normal pb-5 pt-3 '>Doctor Information</h1>
                    <div className="courseDetails">

                        <Row className='g-5'>
                            <Col md={4} lg={3}>
                                <div>

                                    <div style={{
                                        border: "1px solid blue",
                                        padding: "10px 10px 0 10px"
                                    }} >
                                        <img src={img} className='img-fluid' alt="" />
                                        <p className="text-success fw-bold pt-3">{name}</p>
                                    </div>
                                    <p className="text-primary py-2 fw-bold"><small>{title}</small></p>

                                    <div className="btn-appointment">
                                        <Link to='/appoinment'>Make an Appoinment</Link>
                                    </div>
                                    <p className='py-2'>
                                        {
                                            degree.map(d => <Degree key={d.id}
                                                deg={d}
                                            >
                                            </Degree>)
                                        }
                                    </p>

                                </div>
                            </Col>

                            <Col className='px-5'>
                                <h3 className="text-primary">{name}</h3>
                                <h6 className="text-success">{title}</h6>
                                <div className='py-3'>
                                    <h5>Degree</h5>
                                    <div className='ms-3'>

                                        {
                                            degree.map(d => <Degree key={d.id}
                                                deg={d}
                                            >
                                            </Degree>)
                                        }

                                    </div>
                                </div>
                                <div className='py-3'>
                                    <h5>Experience</h5>
                                    <p className='ms-3'>{
                                        experience.map(exp => <Experience
                                            exp={exp}
                                        ></Experience>)
                                    }</p>

                                </div>
                                <div className='py-3'>
                                    <h5>SPECIALIZATION:</h5>
                                    <p className='ms-3'>{specialization}</p>
                                </div>
                            </Col>
                        </Row>
                        <div>

                        </div>



                    </div>
                    <div className="pt-5 pb-5 text-center">
                        <Link to='/doctors'>
                            <div className="btn btn-success ">See All Doctors</div>
                        </Link>
                    </div>

                </Container> : <NotFound></NotFound>

            }


        </div>
    );

};

const Experience = ({ exp }) => {
    return (
        <div>
            <span> -{exp}</span>
        </div>
    );
}
const Degree = ({ deg }) => {
    console.log();

    return (
        <div>
            <span>-{deg}</span>
        </div>
    )
}

export default DoctorDetails;