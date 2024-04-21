import "./DropDown.css";
import { useState } from "react";

interface Props {
    onSelect: (value: string) => void;
    defaultValue: string;
    data: string[];
}

//asd

const DropDown: React.FC<Props> = () => {
    const [toShow, setToShow] = useState(true);
    function toShows() {
        setToShow(!toShow);
    }

    return (
        <div className="DropDown-wrap">
            <button className="dropdown-defaultValue" onClick={toShows}>
                {"Сортировка"}
            </button>

            <div className={toShow ? "dropdown-hidden" : "dropdown-visible"}>
                <button onClick={toShows} className="categories_content">
                    <div className="categories_content_info">
                        <div className="categories_content_info-title">
                            <h1 className="categories_content_info_title-text">
                                Сортировка{" "}
                            </h1>
                        </div>
                        <div className="categories_content_info_buttons">
                            <div className="categories_content_info_block2">
                                {" "}
                                <button className="categories_content_info-button top">
                                    добавлено недавно{" "}
                                    <h1 className="categories_content_info-button-icon">
                                        »
                                    </h1>
                                </button>
                                <button className="categories_content_info-button">
                                    добавлено давно{" "}
                                    <h1 className="categories_content_info-button-icon">
                                        »
                                    </h1>
                                </button>
                                <button className="categories_content_info-button">
                                    дорогие{" "}
                                    <h1 className="categories_content_info-button-icon">
                                        »
                                    </h1>
                                </button>
                                <button className="categories_content_info-button low">
                                    дешевые{" "}
                                    <h1 className="categories_content_info-button-icon">
                                        »
                                    </h1>
                                </button>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default DropDown;
