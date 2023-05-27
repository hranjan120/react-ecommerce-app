import PropTypes from "prop-types";
import { Container, Row, Col } from 'react-bootstrap';

export default function PageTitleComp({ title }) {
    return (
        <>
            <Container fluid className='text-white pageTitlebg'>
                <Row>
                    <Col className='text-center mt-4 mb-4'>
                        <h2 className='mt-1 p-4'>{title}</h2>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

PageTitleComp.propTypes = {
    title: PropTypes.string.isRequired
}