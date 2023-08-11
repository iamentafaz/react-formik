import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
};
const validationSchema = Yup.object({
    firstName: Yup.string().max(15, 'Must be of 15 characters').required('Required'),
    lastName: Yup.string().max(20, 'Must be of 20 characters').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
});

const onSubmit = (values) => {
    console.log(values);
};

export const FormikSignUpForm = () => {
    return (
        <div className='signup-container'>
            <h1>React Formik - Signup</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className='signup-form'>
                    <div className='form-field'>
                        <label htmlFor='firstName'>First Name</label>
                        <Field type='text' name='firstName' />
                        <ErrorMessage
                            name='firstName'
                            className='error'
                            component='p'
                        ></ErrorMessage>
                    </div>
                    <div className='form-field'>
                        <label htmlFor='lastName'>Last Name</label>
                        <Field type='text' name='lastName' />
                        <ErrorMessage
                            name='lastName'
                            className='error'
                            component='p'
                        ></ErrorMessage>
                    </div>
                    <div className='form-field'>
                        <label htmlFor='email'>Email</label>
                        <Field type='email' name='email' />
                        <ErrorMessage name='email' className='error' component='p'></ErrorMessage>
                    </div>

                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    );
};
