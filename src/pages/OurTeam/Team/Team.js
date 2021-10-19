import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Team = ({ team }) => {
    const { name, img, position } = team;
    return (
        <div>
            <Col>
                <Card className='p-3 border-0 shadow rounded-3  text-center' style={{ minHeight: "350px" }}>
                    <div >
                        <Card.Img variant="top" src={img} style={{
                            width: '200px', height: '200px',
                            borderRadius: "50%"
                        }} />
                    </div>
                    <Card.Body>
                        <Card.Title className='text-success'>{name}</Card.Title>
                        <Card.Text className='text-danger fw-bold'>
                            {position}
                        </Card.Text>
                    </Card.Body>

                </Card>
            </Col>
        </div>
    );
};

export default Team;