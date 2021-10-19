import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className='doctors-container pb-4 pt-4'>
            <Container>
                <h3 className='text-center pb-3'>BSHL Doctors</h3>
                <Row lg={3} md={2} sm={1} xs={1} className='g-3'>
                    {
                        doctors.map(doctor => <Doctor key={doctor.id}
                            doctor={doctor}
                        >


                        </Doctor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;