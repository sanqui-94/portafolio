import React, { useEffect } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function Strategy() {
    const params = useParams();
    const navigate = useNavigate();
    const [strategy, setStrategy] = React.useState({ description: "" });

    useEffect(() => {
        const url = `/api/v1/show/${params.id}`;
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok.");
                }
                return response.json();
            })
            .then((res) => {setStrategy(res)})
            .catch(() => {
                navigate("/strategies");
            });
    }, [params.id]);

    function deleteStrategy() {
        const url = `/api/v1/destroy/${params.id}`;
        const token = document.querySelector('meta[name="csrf-token"]').content;

        fetch(url, {
            method: "DELETE",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(() => navigate("/strategies"))
            .catch((error) => console.log(error.message));

    }

    return (
        <div className="">
            <div className="hero position-relative d-flex align-items-center justify-content-center">
                <div className="overlay bg-dark position-absolute" />
                <h1 className="display-4 position-relative text-white">
                    {strategy.description}
                </h1>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-2">
                        <button
                            type="button"
                            className="btn btn-danger"
                        >
                            Mark as Useful
                        </button>
                    </div>
                    <div className="col-sm-12 col-lg-2">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={deleteStrategy}
                        >
                            Delete Strategy
                        </button>
                    </div>
                </div>
                <Link to="/strategies" className="btn btn-link">
                    Back to Strategies
                </Link>
            </div>
        </div>
    );
}