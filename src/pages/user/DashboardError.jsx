import { ArrowLeft } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DashboardError() {
    return (
        <>
            <Container>
                <Row className='text-center'>
                    <Col>
                        <h2 className='mt-5 mb-3'>User Dashboard Page not found</h2>
                        <Link style={anchorCss} to="/">
                            <ArrowLeft color="green" size={26} /> Go to Home
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DashboardError;

const anchorCss = {
    color: "green",
    textDecoration: "none",
    fontSize: "20px"
};
