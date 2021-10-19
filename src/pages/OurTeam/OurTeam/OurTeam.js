import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Team from '../Team/Team';

const OurTeam = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('./ourteam.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])
    return (
        <div className='ourteam-container pt-5 pb-5 bg-light'>
            <Container>
                <h3 className='text-success py-4'>BOARD OF DIRECTORS</h3>
                <Row lg={3} md={2} sm={1} xs={1} className='g-3'>
                    {
                        teams.map(team => <Team key={team.name}
                            team={team}
                        >


                        </Team>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default OurTeam;