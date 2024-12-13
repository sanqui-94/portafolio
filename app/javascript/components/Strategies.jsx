import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Strategies() {
    const navigate = useNavigate();
    const [ strategies, setStrategies ] = useState([]);

    useEffect(() => {
        const url = "/api/v1/strategies/index";
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error("Network response was not ok.");
                }
            })
            .then((res) => setStrategies(res))
            .catch(() => navigate("/"));
    }, []);

    const allStrategies = strategies.map((strategy, index) => (
        <div key={strategy.id} className="col-md-6 col-lg-4">
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">{strategy.description}</h5>
                    <Link to={`/strategies/${strategy.id}`} className="btn custom-button">
                        View Strategy
                    </Link>
                </div>
            </div>
        </div>
    ));
    const noStrategy = (
        <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
                No strategies yet. Why not <Link to="/new_strategy">create one</Link>
            </h4>
        </div>
    );

    return (
        <>
            <section className="jumbotron jumbotron-fluid text-center">
                <div className="container py-5">
                    <h1 className="display-4">Oblique Strategies</h1>
                    <p className="lead text-muted">
                        Over One Hundred Worthwhile Dilemmas
                    </p>
                    <p>
                        Each card contains a gnomic suggestion, aphorism or remark which can be used to break a deadlock or dilemma situation.
                    </p>
                </div>
            </section>
            <div className="py-5">
                <main className="container">
                    <div className="text-end mb-3">
                        <Link to="/strategy" className="btn custom-button">
                            Create New Strategy
                        </Link>
                    </div>
                    <div className="row">
                        {strategies.length > 0 ? allStrategies : noStrategy}
                    </div>
                    <Link to="/" className="btn btn-link">
                        Home
                    </Link>
                </main>
            </div>
        </>
    );
}