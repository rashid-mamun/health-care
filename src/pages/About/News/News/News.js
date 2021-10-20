import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import New from '../New/New';

const News = () => {
    const [news, setNews] = useState([]);
    ;
    useEffect(() => {
        fetch('https://api.jsonbin.io/b/617039bd9548541c29c5f82b')
            .then(res => res.json())
            .then(data => setNews(data))
    }, []);




    return (
        <div className='news-container pb-5 pt-4' style={{ backgroundColor: "#F1F1F1" }}>
            <Container>
                <h2 className='text-center text-primary py-3'>LATEST NEWS</h2>
                <h5 className='text-center text-muted py-3'>Read our latest news from the company or general medical news. Feel free to ask questions in comments for any news you find interesting.</h5>
                <Row xl={3} lg={2} md={2} sm={1} xs={1} className='g-3'>
                    {

                        news.map(n => <New
                            d={n}
                            key={n.id}
                        ></New>)




                    }
                </Row>
            </Container>
        </div>
    );
};

export default News;