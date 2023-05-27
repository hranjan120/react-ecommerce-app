import PageTitleComp from "../../components/PageTitleComp"
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import secure_login_pdn4 from '../../assets/secure_login_pdn4.svg';
import { userSignIn } from "../../redux/userAuthSlice";
import { useDispatch, useSelector } from "react-redux";

function SignInPage() {
    const dispatch = useDispatch();
    const { userAuth } = useSelector((state) => state);

    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmitSignUpFrm = (values) => {
        dispatch(userSignIn(values));
    };

    return (
        <>
            <PageTitleComp title={'Sign In'} />
            <Container>
                <Row>
                    <Col xs={6} md={6} lg={6} className='mt-4 mb-4 p-5'>
                        <img className='img-fluid' src={secure_login_pdn4} alt="Contact" />
                    </Col>
                    <Col xs={6} md={6} lg={6} className='mt-4 mb-4 p-5'>
                        {userAuth.error ? <><p className="text-danger text-center">{userAuth.error}</p></> : ''}
                        <form onSubmit={handleSubmit(onSubmitSignUpFrm)}>
                            <div className="mt-2">
                                <label htmlFor="userEmail" className="form-label">Email:</label>
                                <input type="text" className="form-control" name="userEmail" id="userEmail" {...register("userEmail", {
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Provide Valid Email',
                                    }
                                })} />
                                <span className="invalid-feedback1">{errors.userEmail ? errors.userEmail.message : ''}</span>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input type="text" className="form-control" name="password" id="password" {...register("password", {
                                    required: "Password is required.",
                                })} />
                                <span className="invalid-feedback1">{errors.password ? errors.password.message : ''}</span>
                            </div>
                            <div className="d-grid">
                                <button disabled={userAuth.loading} type="submit" className="btn btn-primary btn-block mt-5">Submit</button>
                            </div>
                        </form>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default SignInPage;
