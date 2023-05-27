/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import PageTitleComp from "../../components/PageTitleComp"
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import welcome_cats_thqn from '../../assets/welcome_cats_thqn.svg';
import { userSignUp, clearError } from "../../redux/userAuthSlice";
import { useDispatch, useSelector } from "react-redux";

function SignUpPage() {
    const dispatch = useDispatch();
    const { userAuth } = useSelector((state) => state);

    const { handleSubmit, register, formState: { errors }, reset } = useForm();
    const onSubmitSignUpFrm = (values) => {
        dispatch(clearError());
        dispatch(userSignUp(values));
    };

    useEffect(() => {
        if (userAuth.msg !== '') {
            reset();
        }
    }, [userAuth.msg]);


    return (
        <>
            <PageTitleComp title={'Sign Up'} />
            <Container>
                <Row>
                    <Col xs={6} md={6} lg={6} className='mt-4 mb-4 p-5'>
                        <img className='img-fluid' src={welcome_cats_thqn} alt="Contact" />
                    </Col>
                    <Col xs={6} md={6} lg={6} className='mt-4 mb-4 p-5'>
                        {userAuth.error ? <><p className="text-danger text-center">{userAuth.error}</p></> : ''}
                        {userAuth.msg ? <><p className="text-primary text-center">{userAuth.msg}</p></> : ''}
                        <form onSubmit={handleSubmit(onSubmitSignUpFrm)}>
                            <div className="mt-2">
                                <label htmlFor="userName" className="form-label">Full Name:
                                    <span className="invalid-feedback1">{errors.userName ? ` ${errors.userName.message}` : ''}</span>
                                </label>
                                <input type="text" className="form-control" name="userName" id="userName" {...register("userName", {
                                    required: "Full name is required.",
                                    pattern: {
                                        value: /^[a-zA-Z\-\s]+$/i,
                                        message: 'Provide Valid full Name',
                                    }
                                })} />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="userEmail" className="form-label">Email:
                                    <span className="invalid-feedback1">{errors.userEmail ? ` ${errors.userEmail.message}` : ''}</span>
                                </label>
                                <input type="text" className="form-control" name="userEmail" id="userEmail" {...register("userEmail", {
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Provide Valid Email',
                                    }
                                })} />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="userMobile" className="form-label">Mobile:
                                    <span className="invalid-feedback1">{errors.userMobile ? ` ${errors.userMobile.message}` : ''}</span>
                                </label>
                                <input type="text" className="form-control" name="userMobile" id="userMobile" {...register("userMobile", {
                                    required: "This is required.",
                                    pattern: {
                                        value: /^[456789]\d{9}$/i,
                                        message: 'Provide Valid full Mobile',
                                    }
                                })} />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="password" className="form-label">Password:
                                    <span className="invalid-feedback1">{errors.password ? ` ${errors.password.message}` : ''}</span>
                                </label>
                                <input type="text" className="form-control" name="password" id="password" {...register("password", {
                                    required: "Password is required.",
                                    minLength: {
                                        value: 5,
                                        message: "Password must be minimum 5 Characters"
                                    }
                                })} />
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary btn-block mt-3">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default SignUpPage;
