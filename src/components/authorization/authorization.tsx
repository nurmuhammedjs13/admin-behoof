import { Link } from "react-router-dom";
import "./authorization.css";

function Authorization() {
    return (
        <>
            <div className="Authorization">
                <div className="container">
                    <div className="Authorization_content">
                        <div className="comeIn">
                            <div className="comeIn__cards">
                                .comeIn__cards
                                <div className="comeIn__cards__card">
                                    <h3 className="comeIn__cards__card-logo">
                                        Authorization
                                    </h3>

                                    <div className="comeIn__cards__card__title">
                                        <p className="comeIn__cards__card__title-text">
                                            Password
                                        </p>
                                        <input className="comeIn__cards__card__title-input"></input>
                                        <hr className="comeIn__cards__card__title-hr" />
                                    </div>

                                    <div className="comeIn__cards__card__icons">
                                        <Link to={'/AddProduct'} className="comeIn__cards__card__icons-but2">
                                            Sign in ➩
                                        </Link>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Authorization;
