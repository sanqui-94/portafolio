import React from "react";
import { Formik } from 'formik';
import {Link, useNavigate} from "react-router-dom";
export default function NewStrategy() {
    const navigate = useNavigate();
    const [description, setDescription] = React.useState('');

    const onChange = (e) => {
        setDescription(e.target.value);
    }
    const submitHandler = (values) => {
        console.log("getting on the submit handler, event?: ", event);
        const url = "/api/v1/strategies/create";

        const body = {
            description: values.description,
        };
        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((response) => {
                console.log("heya: ", response);
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((response) => navigate(`/strategies/${response.id}`))
            .catch((error) => console.log(error.message));
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-lg-6 offset-lg-3">
                    <h1 className="font-weight-normal mb-5">
                        Add a New Oblique Strategy.
                    </h1>
                    <Formik
                        initialValues={{ description: '' }}
                        validate={ values => {
                            const errors = {};
                            if (!values.description) {
                                errors.description = 'Required';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                submitHandler(values);
                                setSubmitting(false);
                            }, 400);
                        }}
                        onChange
                    >
                        {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="strategyDescription">Description</label>
                                    <input
                                        type="text"
                                        name="description"
                                        id="strategyDescription"
                                        className="form-control"
                                        required
                                        onChange={(event) => {
                                            onChange(event)
                                            handleChange(event);
                                        }}
                                        onBlur={handleBlur}
                                        value={values.description}
                                    />
                                    {errors.description && touched.description && errors.description}
                                </div>
                                <button type="submit" className="btn custom-button mt-3" disabled={isSubmitting}>
                                    Create Strategy
                                </button>
                                <Link to="/strategies" className="btn btn-link mt-3">
                                    Back to Strategies
                                </Link>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}