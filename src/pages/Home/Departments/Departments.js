import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Department from '../Department/Department';
import './Departments.css'

const Departments = () => {
    const [departments, setDepartments] = useState([]);


    useEffect(() => {
        fetch('./departments.json')
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, [])
    return (
        <div className='departments-container pt-5 pb-5'>
            <Container>
                <h3 className='text-center pb-3'>BSHL DEPARTMENTS</h3>
                <Row lg={3} md={2} sm={1} xs={1} className='g-3'>
                    {
                        departments.map(department => <Department key={department.name}
                            department={department}
                        >


                        </Department>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Departments;