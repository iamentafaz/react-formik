import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';


// const validateFn = (values) => {
//     const errors = {};

//     if (!values.firstName) {
//         errors.firstName = 'Required';
//     } else if (values.firstName.length > 15) {
//         errors.firstName = 'Must be 15 characters or less';
//     }

//     if (!values.lastName) {
//         errors.lastName = 'Required';
//     } else if (values.lastName.length > 20) {
//         errors.lastName = 'Must be 20 characters or less';
//     }

//     if (!values.email) {
//         errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }

//     return errors;
// };



const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        // validate: validateFn,
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Must be of 15 characters').required('Required'),
            lastName: Yup.string().max(20, 'Must be of 20 characters').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),

        })
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
                        {...formik.getFieldProps('firstName')}
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
                        {...formik.getFieldProps('lastName')}
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
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <p className='error'>{formik.errors.email}</p>
                    ) : null}
                </div>

                <button type='submit'>Submit</button>
            </form>
            {
                formik.touched && formik.isValid ? <div>
                    {formik.values.firstName} - {formik.values.lastName} - {formik.values.email}
                </div> : null
            }
            
        </div>
    );
};

export default SignUpForm;
