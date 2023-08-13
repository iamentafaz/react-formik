import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    social: {
        facebook: '',
        twitter: '',
    }
};
const validationSchema = Yup.object({
    firstName: Yup.string().max(15, 'Must be of 15 characters').required('Required'),
    lastName: Yup.string().max(20, 'Must be of 20 characters').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    social: Yup.object({
        facebook: Yup.string().url('Enter valid address'),
        twitter: Yup.string().url('Enter valid address'),
    })
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
                    <div className='form-fiels'>
                        <label htmlFor='gender'>Gender</label>
                        <Field as="select" name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Field>
                    </div>

                    <div className='form-field'>
                        <label htmlFor='facebook'>Facebook</label>
                        <Field type='text' name='social.facebook' />
                        <ErrorMessage name='social.facebook' className='error' component='p'></ErrorMessage>
                    </div>

                    <div className='form-field'>
                        <label htmlFor='twitter'>Twitter</label>
                        <Field type='text' name='social.twitter' />
                        <ErrorMessage name='social.twitter' className='error' component='p'></ErrorMessage>
                    </div>

                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    );
};
