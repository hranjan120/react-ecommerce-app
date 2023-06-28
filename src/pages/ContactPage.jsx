import { useState } from 'react';
import PageTitleComp from "../components/PageTitleComp"
import { Container, Row, Col } from 'react-bootstrap';
import { useForm, useFieldArray } from 'react-hook-form';
import contact_us_re_4qqt from '../assets/contact_us_re_4qqt.svg'


function ContactPage() {
    const [picture, setPicture] = useState(null);

    const { control, handleSubmit, register, formState: { errors }, reset } = useForm({
        defaultValues: {
            fullName: 'himanshu ranjan',
            userEmail: 'admin@gmail.com',
            userMobile: '9876543210',
            genderRadio: 'Male',
            address: {
                userAddress1: '',
                userAddress2: ''
            },
            mobile: [{ model: "", ram: "" }],
        }
    });
    const onSubmitContactFrm = (values) => {
        console.log(values);
        reset({
            fullName: '',
            userEmail: '',
            userMobile: '',
            userMsg: '',
            genderRadio: '',
            address: {
                userAddress1: '',
                userAddress2: ''
            },
            mobile: [{ model: "", ram: "" }],
        });
    };

    const { fields, append, remove } = useFieldArray({
        name: "mobile",
        control,
        rules: {
            required: true,
            // minLength: 2,
            // maxLength: 10,
            validate: (fieldArrayValues) => {
                for (let i = 0; i < fieldArrayValues.length; i++) {
                    if (fieldArrayValues[i].model === '' || fieldArrayValues[i].ram === '') {
                        return `Provide valid Ram and Model`;
                    }
                }
            }
        }
    });


    /*----------------*/
    const onChangePicture = (e) => {
        setPicture(URL.createObjectURL(e.target.files[0]));
    };
    const { handleSubmit: handleSubmit2, register: register2, formState: { errors: errors2 } } = useForm();
    const onSubmitFileFrm = (values) => {
        console.log(values);
        // console.log(values.file[0]);
        // const formData = new FormData();
        // formData.append('file', data.file[0]);
        // const res = await fetch('http://localhost:3001/files', {
        //     method: 'POST',
        //     body: formData,
        // }).then((res) => res.json());
    };

    return (
        <>
            <PageTitleComp title={'Contact Us'} />
            <Container>
                <Row>
                    <Col xs={6} md={6} lg={6} className='mt-4 mb-4 p-5'>
                        <img className='img-fluid' src={contact_us_re_4qqt} alt="Contact" />

                        <form onSubmit={handleSubmit2(onSubmitFileFrm)}>
                            <div className="mt-2">
                                <label htmlFor="fileName" className="form-label">File Name:</label>
                                <input type="text" className="form-control" name="fileName" id="fileName" {...register2("fileName", {
                                    required: "Full name is required.",
                                    pattern: {
                                        value: /^[a-zA-Z\-\s]+$/i,
                                        message: 'Provide Valid full Name',
                                    }
                                })} />
                                <div className="invalid-feedback1">{errors2.fileName ? errors2.fileName.message : ''}</div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="userFile" className="form-label">User File:</label>
                                <input type="file" className="form-control" name="userFile" id="userFile" {...register2("userFile", {
                                    required: "File is required.",
                                    pattern: {
                                        value: /^[a-zA-Z\-\s]+$/i,
                                        message: 'Provide Valid File',
                                    }
                                })} onChange={onChangePicture} />
                                <div className="invalid-feedback1">{errors2.userFile ? errors2.userFile.message : ''}</div>
                                <img className="image" src={picture && picture} alt="Img" height={'100'} />
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-success btn-block mt-3">Submit File</button>
                            </div>
                        </form>
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


                            <div className="mt-2">
                                <label htmlFor="userAddress1" className="form-label">Address 1:</label>
                                <input type="text" className="form-control" name="userAddress1" id="userAddress1" {...register("address.userAddress1", {
                                    required: "Address 1 required.",
                                })} />
                                <div className="invalid-feedback1">{errors.address?.userAddress1 ? errors.address?.userAddress1.message : ''}</div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="userAddress2" className="form-label">Address 2:</label>
                                <input type="text" className="form-control" name="userAddress2" id="userAddress2" {...register("address.userAddress2", {
                                    required: "Address 2 required.",
                                })} />
                                <div className="invalid-feedback1">{errors.address?.userAddress2 ? errors.address?.userAddress2.message : ''}</div>
                            </div>

                            <hr />
                            <button type="button" className="btn btn-primary btn-sm mb-2"
                                onClick={() => append({ model: "", ram: "" })}>
                                Add Mobile
                            </button>
                            {fields.map((field, index) => (
                                <div key={field.id}>
                                    <input
                                        type="text" className="form-control mt-2"
                                        {...register(`mobile.${index}.model`)}
                                        placeholder="Mobile Model"
                                    />
                                    <input
                                        type="text" className="form-control mt-2"
                                        {...register(`mobile.${index}.ram`)}
                                        placeholder="Mobile Ram"
                                    />
                                    {index > 0 && (
                                        <button className="btn btn-danger btn-sm mb-3" type="button" onClick={() => remove(index)}>
                                            Remove
                                        </button>
                                    )}

                                    <div className="invalid-feedback1">{errors?.mobile?.root?.message}</div>
                                </div>
                            ))}
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