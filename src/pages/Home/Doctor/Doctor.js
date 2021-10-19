import React from 'react';
import { Card, Carousel, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Doctor.css'

const Doctor = ({ doctor }) => {

    const { user } = useAuth();
    const { name, img, title, id } = doctor;
    return (
        <div>
            <Col>
                <Card className='p-3 border-0 shadow rounded-3 course cart' style={{ minHeight: "500px" }}>
                    <div className='text-center'>
                        <Card.Img variant="top" src={img} style={{
                            width: '250px', height: '250px',
                            borderRadius: "50%"
                        }} />
                    </div>
                    <Card.Body>
                        <Card.Title className='text-success'>{name}</Card.Title>
                        <Card.Text>
                            <p><small>{title}</small></p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='border-0 bg-white  d-flex justify-content-center align-items-center'>



                        <p>   <Link to={`/doctor/${id}`} >
                            <button className="btn-primary rounded py-1 me-2">Doctor Details</button>
                        </Link></p>
                        {
                            user.email && <p> <Link to={`/doctor/${id}`} >
                                <button className="btn-regular">Appoinment</button>
                            </Link>
                            </p>
                        }



                    </Card.Footer>
                </Card>
            </Col>

        </div>
    );
};

export default Doctor;