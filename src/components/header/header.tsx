import headerLogo from "../../assets/header-logo.png";
import "./header.css";

import { Link } from "react-router-dom";


function Header() {
    return (
        <>
            <section className="header">
                <div className="container">
                    <div className="header_content">
                        <div className="header_content_info">
                            <div className="header_logo_content">
                                <div className="header-logo">
                                    <img
                                        src={headerLogo}
                                        alt=""
                                        className="header-logo-img"
                                    />
                                    <Link to={"/"} className="header_logo-text">
                                        Behoof
                                    </Link>
                                </div>
                            </div>
                           
                            <div className="header_nav">
                                <Link
                                    to={"/AddProduct"}
                                    className="header_nav-button"
                                >
                                    Add product
                                </Link>
                                <Link
                                    to={"/List"}
                                    className="header_nav-button"
                                >
                                    List
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Header;
