import { useNavigate } from "react-router-dom";
import "./authorization.css";
import { useState } from "react";

function Authorization() {
    const [inputValue, setInputValue] = useState("");
    const [check, setCheck] = useState(true);
    const navigate = useNavigate();

    function checkingInput() {
        if (inputValue !== "qwerty") {
            console.log("error");
            setCheck(false);
            setInputValue("");
        } else {
            navigate("/AddProduct");
        }
    }

    return (
        <>
            <div className="Authorization">
                <div className="container">
                    <div className="Authorization_content">
                        <div className="comeIn">
                            <div className="comeIn__cards">
                                <div className="comeIn__cards_inputs">
                                    <div className="comeIn__cards__card">
                                        <h3 className="comeIn__cards__card-logo">
                                            Authorization
                                        </h3>

                                        <div className="comeIn__cards__card__title">
                                            <p className="comeIn__cards__card__title-text">
                                                Password
                                            </p>
                                            <input
                                                placeholder={
                                                    check
                                                        ? ""
                                                        : "неправильный пароль!"
                                                }
                                                onChange={(e) =>
                                                    setInputValue(
                                                        e.target.value
                                                    )
                                                }
                                                value={inputValue}
                                                className="comeIn__cards__card__title-input"
                                            ></input>
                                            <hr className="comeIn__cards__card__title-hr" />
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            check
                                                ? "comeIn__cards_rule_true"
                                                : "comeIn__cards_rule"
                                        }
                                    >
                                        <div
                                            className={
                                                check
                                                    ? "comeIn__cards_rule-text-indicator_true"
                                                    : "comeIn__cards_rule-text-indicator"
                                            }
                                        ></div>
                                        <h1 className="comeIn__cards_rule-text">
                                            НАПИШИТЕ ПАРОЛЬ
                                        </h1>
                                    </div>
                                </div>
                                <div className="comeIn__cards__card__icons">
                                    <button
                                        className="comeIn__cards__card__icons-button"
                                        onClick={checkingInput}
                                    >
                                        Sign in ➩
                                    </button>
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
