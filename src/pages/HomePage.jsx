import { useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { BagFill, Apple, BugFill } from 'react-bootstrap-icons';
import { fetchMainCategory } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import MultiCarousel from "../components/MultiCarousel";
import LazyLoad from 'react-lazy-load';

export default function HomePage() {
    const { productData } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        if (productData && productData.mainCategoryData.length == 0) {
            dispatch(fetchMainCategory())
        }
    }, []);

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <LazyLoad height={250}>
                        <img
                            className="d-block w-100"
                            src="https://picsum.photos/1200/250"
                            alt="First slide"
                        />
                    </LazyLoad>

                </Carousel.Item>
                <Carousel.Item>
                    <LazyLoad height={250}>
                        <img
                            className="d-block w-100"
                            src="https://picsum.photos/1200/250"
                            alt="Second slide"
                        />
                    </LazyLoad>
                </Carousel.Item>
                <Carousel.Item>
                    <LazyLoad height={250}>
                        <img
                            className="d-block w-100"
                            src="https://picsum.photos/1200/250"
                            alt="Third slide"
                        />
                    </LazyLoad>
                </Carousel.Item>
            </Carousel>

            <Container>
                <Row className='mt-4'>
                    <Col className='text-center mt-4 mb-4'>
                        <Apple color="orange" size={50} />
                        <h4>Rebuilt with React</h4>
                        <p>As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.</p>
                    </Col>
                    <Col className='text-center mt-4 mb-4'>
                        <BugFill color="orange" size={50} />
                        <h4>Rebuilt with React</h4>
                        <p>As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.</p>
                    </Col>
                    <Col className='text-center mt-4 mb-4'>
                        <BagFill color="orange" size={50} />
                        <h4>Rebuilt with React</h4>
                        <p>As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.</p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <h3 className='mt-5'>Our Popular Categories</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className='mb-5'>
                        {(productData && productData.mainCategoryData.length > 0) ?
                            <MultiCarousel show={4}>
                                {productData.mainCategoryData.map((itm) => (
                                    <div key={itm._id}>
                                        <div style={{ padding: 18 }}>
                                            <Link className='multi-item' to={`/products/${itm.mainCatSlug}`}>
                                                <img src={'https://micro-store.s3.ap-south-1.amazonaws.com/' + itm.mainCatImg} alt="placeholder" style={{ width: '100%' }} />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </MultiCarousel> :
                            ''}
                    </Col>
                </Row>
            </Container>

        </>
    );
}