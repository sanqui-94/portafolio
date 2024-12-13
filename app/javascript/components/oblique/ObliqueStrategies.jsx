import React from "react";
import { Link } from "react-router-dom";

export default function ObliqueStrategies() {
    return (
        <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
            <div className="jumbotron jumbotron-fluid bg-transparent">
                <div className="container secondary-color">
                    <h1 className="display-4">Oblique Strategies</h1>
                    <p className="lead">
                        A list of strategies to use when facing challenging dilemmas in work or life.
                    </p>
                    <hr className="my-4"/>
                    <Link
                        to="/all-strategies"
                        className="btn btn-lg custom-button"
                        role="button"
                    >
                        View All Strategies
                    </Link>
                </div>
            </div>
        </div>
    );
}