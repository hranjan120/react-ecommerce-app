import { Container, Row, Col } from 'react-bootstrap';
import PageTitleComp from "../components/PageTitleComp"
import logo64 from '../assets/logo256.png';
import { useDispatch, useSelector } from "react-redux";
import { updateAll, updateName, updateAge, updateAddress } from "../redux/userSlice";

export default function AboutUsPage() {
    const { userObj } = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <>
            <PageTitleComp title={'About Us'} />
            <Container>
                <Row className='mt-5 mb-5'>
                    <Col xs={6} md={6} lg={6} className='mt-5 mb-5'>
                        <h3>What is Lorem Ipsum?</h3>
                        <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Col>
                    <Col xs={6} md={6} lg={6} className='text-center mt-5 mb-5'>
                        <img className='img-fluid' src={logo64} alt="Logo 64" />
                    </Col>
                    <Col xs={12} md={12} lg={12} className='mt-1'>
                        <h3>Where can I get some?</h3>
                        <p className="text-dark">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    </Col>
                    <Col xs={12} md={12} lg={12} className='mt-52 mb-5'>
                        <h3>Why do we use it?</h3>
                        <p className="text-dark">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </Col>
                    <Col xs={12} md={12} lg={12} className='mt-52 mb-5'>
                        <h4> The Current State: {JSON.stringify(userObj)}</h4>
                        <button className='btn btn-sm btn-success m-1' onClick={() => dispatch(updateName())}>update name</button>
                        <button className='btn btn-sm btn-success m-1' onClick={() => dispatch(updateAge())}>update age</button>
                        <button className='btn btn-sm btn-success m-1' onClick={() => dispatch(updateAddress())}>update address</button>
                        <button className='btn btn-sm btn-success m-1' onClick={() => dispatch(updateAll({ name: 'my new name', age: 90, address: 'tada address' }))}>
                            update All
                        </button>
                    </Col>
                </Row>
            </Container>

        </>
    );
}