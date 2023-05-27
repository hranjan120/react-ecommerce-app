import PageTitleComp from "../components/PageTitleComp"
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import contact_us_re_4qqt from '../assets/contact_us_re_4qqt.svg'

function ContactPage() {

    const { handleSubmit, register, formState: { errors }, } = useForm();
    const onSubmitContactFrm = (values) => {
        console.log(values);
    };

    return (
        <>
            <PageTitleComp title={'Contact Us'} />
            <Container>
                <Row>
                    <Col xs={6} md={6} lg={6} className='mt-4 mb-4 p-5'>
                        <img className='img-fluid' src={contact_us_re_4qqt} alt="Contact" />
                    </Col>
                    <Col xs={6} md={6} lg={6} className='mt-4 mb-4 p-5'>
                        <form onSubmit={handleSubmit(onSubmitContactFrm)}>
                            <div className="mt-2">
                                <label htmlFor="fullName" className="form-label">Full Name:</label>
                                <input type="text" className="form-control" name="fullName" id="fullName" {...register("fullName", {
                                    required: "Full name is required.",
                                    pattern: {
                                        value: /^[a-zA-Z\-\s]+$/i,
                                        message: 'Provide Valid full Name',
                                    }
                                })} />
                                <div className="invalid-feedback1">{errors.fullName ? errors.fullName.message : ''}</div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="userEmail" className="form-label">Email:</label>
                                <input type="text" className="form-control" name="userEmail" id="userEmail" {...register("userEmail", {
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Provide Valid Email',
                                    }
                                })} />
                                <div className="invalid-feedback1">{errors.userEmail ? errors.userEmail.message : ''}</div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="userMobile" className="form-label">Mobile:</label>
                                <input type="text" className="form-control" name="userMobile" id="userMobile" {...register("userMobile", {
                                    required: "This is required.",
                                    pattern: {
                                        value: /^[456789]\d{9}$/i,
                                        message: 'Provide Valid full Mobile',
                                    }
                                })} />
                                <div className="invalid-feedback1">{errors.userMobile ? errors.userMobile.message : ''}</div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="userMsg" className="form-label">Messgae:</label>
                                <textarea className="form-control" name="userMsg" id="userMsg" {...register("userMsg", {
                                    required: "Message is required.",
                                })} />
                                <div className="invalid-feedback1">{errors.userMsg ? errors.userMsg.message : ''}</div>
                            </div>
                            <div className="form-check">
                                <input type="radio" className="form-check-input" id="radio1" name="genderRadio" value="Male" {...register("genderRadio", {
                                    required: "Gender is required.",
                                })} />Male
                                <label className="form-check-label" htmlFor="radio1"></label>
                            </div>
                            <div className="form-check">
                                <input type="radio" className="form-check-input" id="radio2" name="genderRadio" value="Female" {...register("genderRadio", {
                                    required: "Gender is required.",
                                })} />Female
                                <label className="form-check-label" htmlFor="radio2"></label>
                            </div>
                            <div className="invalid-feedback1">{errors.genderRadio ? errors.genderRadio.message : ''}</div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-success btn-block mt-3">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ContactPage;