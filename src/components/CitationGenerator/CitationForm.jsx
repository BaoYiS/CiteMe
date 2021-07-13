import React from 'react';
import { Formik } from 'formik';

const CitationForm = () => {

    const handleSubmit = (values) =>
    {
        console.log(values)
    }

    return (
        <div>
            <Formik
                initialValues={{articleTitle: '', firstName: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="articleTitle"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.articleTitle}
                        />
                        {errors.articleTitle && touched.articleTitle && errors.articleTitle}
                        <input
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                        />
                        {errors.firstName && touched.firstName && errors.firstName}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default CitationForm;
