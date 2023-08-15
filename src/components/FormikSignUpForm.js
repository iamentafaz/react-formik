import { ErrorMessage, FastField, Field, FieldArray, Form, Formik } from 'formik';
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
    },
    phoneNumbers: ['', ''],
    phNumbers: [''],
    about: '',
};
const validationSchema = Yup.object({
    firstName: Yup.string().max(15, 'Must be of 15 characters').required('Required'),
    lastName: Yup.string().max(20, 'Must be of 20 characters').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    social: Yup.object({
        facebook: Yup.string().url('Enter valid address'),
        twitter: Yup.string().url('Enter valid address'),
    }),
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
                    <div className='form-field'>
                        <label htmlFor='gender'>Gender</label>
                        <Field as='select' name='gender'>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </Field>
                    </div>

                    <div className='form-field'>
                        <label htmlFor='facebook'>Facebook</label>
                        <Field type='text' name='social.facebook' />
                        <ErrorMessage
                            name='social.facebook'
                            className='error'
                            component='p'
                        ></ErrorMessage>
                    </div>

                    <div className='form-field'>
                        <label htmlFor='twitter'>Twitter</label>
                        <Field type='text' name='social.twitter' />
                        <ErrorMessage
                            name='social.twitter'
                            className='error'
                            component='p'
                        ></ErrorMessage>
                    </div>

                    <div className='form-field'>
                        <label htmlFor='primaryPh'>Primary Phone Number</label>
                        <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
                        <ErrorMessage
                            name='primaryPh'
                            className='error'
                            component='p'
                        ></ErrorMessage>
                    </div>

                    <div className='form-field'>
                        <label htmlFor='secondaryPh'>Alternate Mobile Number</label>
                        <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
                        <ErrorMessage
                            name='secondaryPh'
                            className='error'
                            component='p'
                        ></ErrorMessage>
                    </div>

                    <div className='form-field'>
                        <label htmlFor='phNumbers'>List of numbers</label>
                        <FieldArray name='phNumbers'>
                            {(fieldArrayProps) => {
                                const { push, remove, form } = fieldArrayProps;
                                const { phNumbers } = form.values;
                                return (
                                    <div className='ph-number-wrapper'>
                                        {phNumbers.map((phNumber, index) => (
                                            <div key={index}>
                                                <Field type='text' name={`phNumbers.${index}`} />
                                                {index > 0 && (
                                                    <button
                                                        type='button'
                                                        onClick={() => remove(index)}
                                                    >
                                                        -
                                                    </button>
                                                )}
                                                <button type='button' onClick={() => push('')}>
                                                    +
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                );
                            }}
                        </FieldArray>
                        <div className='form-field'>
                            <label htmlFor='about'>About</label>
                            <FastField name='about' id='about'></FastField>
                        </div>
                    </div>

                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    );
};
