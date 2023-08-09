import { useFormik } from 'formik';
import React from 'react';

const validateFn = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validate: validateFn,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className='signup-container'>
            <h1>React Formik - Signup</h1>
            <form onSubmit={formik.handleSubmit} className='signup-form'>
                <div className='form-field'>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <p className='error'>{formik.errors.firstName}</p>
                    ) : null}
                </div>
                <div className='form-field'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        type='text'
                        id='lastName'
                        name='lastName'
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <p className='error'>{formik.errors.lastName}</p>
                    ) : null}
                </div>
                <div className='form-field'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <p className='error'>{formik.errors.email}</p>
                    ) : null}
                </div>

                <button type='submit'>Submit</button>
            </form>
            {
                formik.isValid ? <div>
                    {formik.values.firstName} - {formik.values.lastName} - {formik.values.email}
                </div> : null
            }
            
        </div>
    );
};

export default SignUpForm;
