import React from 'react';
import { Card, Col } from 'react-bootstrap';

const New = ({ d }) => {
    const { description, id, img, title, date } = d;
    return (
        <div>
            <Col>
                <Card className='p-3 border-0 shadow rounded-3 ' style={{ minHeight: "550px" }}>
                    <div className=''>
                        <Card.Img variant="top" src={img} />
                        <div className="text-muted ms-2 py-2">{date}</div>
                    </div>
                    <Card.Body>
                        <Card.Title className='text-success'>{title}</Card.Title>
                        <Card.Text>
                            <p><small>{description}</small></p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='border-0 bg-white '>









                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default New;