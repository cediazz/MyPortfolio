import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Loading from '../Loading/Loading';
import Swal from 'sweetalert2'
import StarIcon from "../Icons/StarIcon"

function ContactSection() {

    const [loading, setLoading] = useState(false)


    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required('A name is required.'),
        email: Yup.string().email('Email is not valid.').required('An email is required.'),
        message: Yup.string().required('A message is required.'),
    })

    const handleSubmit = async (values) => {
        setLoading(true)
        values["access_key"] = "26cb8c16-33d0-472b-abf9-fabf5c9617e9"
        console.log(values)
        const json = JSON.stringify(values);
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json())
            console.log(res)
            if (res.success) {
                setLoading(false)
                Swal.fire({
                    title: "Good job!",
                    text: res.message,
                    icon: "success",
                    color: '#16A085',
                    iconColor: '#16A085',
                    confirmButtonColor: '#16A085'
                });

            }
            else {
                setLoading(false)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: res.message,
                    confirmButtonColor: '#F27474'
                });
            }
        }
        catch (error) {
            setLoading(false)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!. Check your connection",
                confirmButtonColor: '#F27474'
            });

        }
    }


    return (
        <section class="page-section" id="contact">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                        <StarIcon />
                    </div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-xl-7">
                        <Formik
                            initialValues={{ fullName: '', email: '', message: '' }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => handleSubmit(values)}
                        >
                            <Form>
                                <div class="form-floating mb-3">
                                    <Field class="form-control" id="name" name="fullName" type="text" placeholder="Enter your name..." />
                                    <label for="name">Full name</label>
                                    <ErrorMessage name="fullName" >{(msg) => <div className='error-message'>{msg}</div>}</ErrorMessage>
                                </div>
                                <div class="form-floating mb-3">
                                    <Field class="form-control" id="email" name="email" type="email" placeholder="name@example.com" />
                                    <label for="email">Email address</label>
                                    <ErrorMessage name="email" >{(msg) => <div className='error-message'>{msg}</div>}</ErrorMessage>
                                </div>
                                <div class="form-floating mb-3">
                                    <Field class="form-control" id="message" as="textarea" name="message" placeholder="Enter your message here..." style={{ height: '10rem' }} />
                                    <label for="message">Message</label>
                                    <ErrorMessage name="message" >{(msg) => <div className='error-message'>{msg}</div>}</ErrorMessage>
                                </div>
                                <button class="btn btn-primary btn-xl" type="submit">Send</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
                {loading && <Loading width={'3rem'} height={'3rem'} />}
            </div>
        </section>
    )
}
export default ContactSection