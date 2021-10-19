import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const DepartmentDetails = () => {

    const { departmentName } = useParams();

    const [departmentDetails, setDepartmentDetails] = useState([]);
    const [doctors, setDoctors] = useState([]);
    // const [departments, setdepartments] = usedepartments();

    const [departments, setDepartments] = useState([]);



    useEffect(() => {

        fetch('https://api.jsonbin.io/b/616e5c6f9548541c29c52c27/1')
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, []);




    useEffect(() => {

        for (const department of departments) {
            if (department.name === departmentName) {
                // console.log(department);
                setDepartmentDetails(department);
                setDoctors(department.doctors);
            }
        }

    }, [departments]);




    // console.log(departmentName);
    return (
        <div className=''>
            <Container>
                <div className='py-5 shadow px-5'>
                    <h3>Department:</h3>
                    <h4> <small className='text-success ms-2'>{departmentDetails?.name}</small></h4>
                    <p className="ms-2 py-3">{departmentDetails?.description}</p>
                    {
                        (doctors.length > 0) && <div>
                            <h3 className='text-center text-primary pb-3'>Our Doctors</h3>
                            <Row lg={2} md={2} sm={1} xs={1} className='g-3'>

                                {
                                    doctors.map(doctor => <Mamun

                                        doctor={doctor}></Mamun>)
                                }
                            </Row>
                        </div>
                    }




                </div>
            </Container>
        </div>
    );
};
const Mamun = ({ doctor }) => {

    const { name, title, img, id } = doctor;
    return (
        <div>
            <Col>
                <Card className='p-3 border-0 shadow rounded-3 course cart' style={{ minHeight: "550px" }}>
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

                        <p> <Link to={`/appoinment`} >
                            <button className="btn-regular">Appoinment</button>
                        </Link>
                        </p>




                    </Card.Footer>
                </Card>
            </Col>
        </div>
    )
}



export default DepartmentDetails;