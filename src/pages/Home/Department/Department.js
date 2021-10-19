import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Department = ({ department }) => {
    // console.log(department);
    const { name, img, description } = department;
    return (
        <Col>
            <Card className='p-3 border-0 shadow rounded-3' style={{ minHeight: "300px" }}>
                <div className='text-center'>
                    <Card.Img variant="top" src={img} style={{
                        width: '150px', height: '100px',
                        borderRadius: "5px"
                    }} />
                </div>
                <Card.Body>
                    <Card.Title className='text-success'>{name}</Card.Title>
                    <Card.Text>
                        {description.substr(0, 130)}...
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='border-0 bg-white text-center '>



                    <Link to={`/department/${name}`} >
                        <button className="btn-regular">Details</button>
                    </Link>

                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Department;