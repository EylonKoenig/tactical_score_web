import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {

    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <div className="buttons">
                        <Link to="add_match" className="btn btn-primary">
                            Add Match
                        </Link>
                        <Link to="add_player" className="btn btn">
                            Add Player
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Landing;
++++++++++++