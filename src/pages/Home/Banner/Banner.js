import React from 'react';
import { Container, FormControl, InputGroup } from 'react-bootstrap';

const Banner = () => {
    const backgroundImage = 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNhbCUyMGVxdWlwbWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

    return (
        <div>
            <div className=" d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    color: "white",
                    minHeight: '500px'

                }}>
                <Container>
                    <div className="welcome-text  text-center pt-5 pb-5">
                        <h1 className='pb-5'>WELCOME TO BSHL</h1>
                        <Container>
                            <h5>Bangladesh Specialized Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.</h5>

                            <InputGroup className="mt-5">

                                <FormControl
                                    placeholder="what do you want?"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Container>
                    </div>
                </Container>

            </div>
        </div>
    );
};

export default Banner;