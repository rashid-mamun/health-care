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

        fetch('https://api.jsonbin.io/b/616e5c6f9548541c29c52c27')
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, []);

    // console.log(departments);


    useEffect(() => {

        for (const department of departments) {
            if (department.name === departmentName) {
                // console.log(department);
                setDepartmentDetails(department);
                setDoctors(department.doctors);
            }
        }

    }, [departments]);


    // console.log(departmentDetails.doctors);

    // console.log(departmentName);
    return (
        <div className=''>
            <Container>
                <div className='py-5 shadow px-5'>
                    <h3>Department:</h3>
                    <h4> <small className='text-success ms-2'>{departmentDetails?.name}</small></h4>
                    <p className="ms-2 py-3">{departmentDetails?.description}</p>
                    {/* {
                        (doctors.length >= 1) && <div>

                            <h3 className='text-center pb-3'>BSHL Doctors</h3>
                            <Row lg={3} md={2} sm={1} xs={1} className='g-3'>
                                {


                                    doctors?.map(single => <SingleDoctor>

                                        doctor={single}
                                    </SingleDoctor>)


                                }
                            </Row>
                        </div>
                    } */}
                </div>
            </Container>
        </div>
    );
};

// const SingleDoctor = ({ doctor }) => {

//     // console.log(doctor);
//     const { name, img, title } = doctor;
//     return (
//         <div>
//             <Col>
//                 <Card className='p-3 border-0 shadow rounded-3 course cart' style={{ minHeight: "500px" }}>
//                     <div className='text-center'>
//                         <Card.Img variant="top" src={img} style={{
//                             width: '250px', height: '250px',
//                             borderRadius: "50%"
//                         }} />
//                     </div>
//                     <Card.Body>
//                         <Card.Title className='text-success'>{name}</Card.Title>
//                         <Card.Text>
//                             <p><small>{title}</small></p>
//                         </Card.Text>
//                     </Card.Body>
//                     <Card.Footer className='border-0 bg-white text-center '>



//                         <Link to={`/course/${name}`} >
//                             <button className="btn-regular">Doctor Details</button>
//                         </Link>

//                     </Card.Footer>
//                 </Card>
//             </Col>

//         </div>
//     );

// }

export default DepartmentDetails;