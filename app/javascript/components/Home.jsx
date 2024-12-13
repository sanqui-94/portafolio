import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
            <div className="jumbotron jumbotron-fluid bg-transparent">
                <div className="container secondary-color">
                    <h3 className="display-4">Hello World, I'm Sanqui</h3>
                    <p className="lead">
                        A Digital portfolio, to showcase some of my work and ideas.
                    </p>
                    <hr className="my-4"/>
                    <Link
                        to="/strategies"
                        className="btn btn-lg custom-button"
                        role="button"
                    >
                        Oblique Strategies
                    </Link>
                </div>
            </div>
        </div>
    );
}