import { ArrowLeft } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo256 from '../assets/logo256.png'

export default function NotFoundPage() {
    return (
        <>
            <Container>
                <Row className='text-center mt-5 mb-5'>
                    <Col className='mt-5 mb-5'>
                        <img src={logo256} alt="404 not Found" />
                        <h1 className='mt-5'>404, Page not found.</h1>
                        <Link style={anchorCss} to="/">
                            <ArrowLeft color="blue" size={26} /> Go to Home
                        </Link>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

const anchorCss = {
    color: "blue",
    textDecoration: "none",
    fontSize: "20px"
};