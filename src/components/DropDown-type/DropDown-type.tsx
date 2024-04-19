import "./DropDown-type.css";
import React, { useState } from "react";

interface PropsType {
    onSelect: (value: string) => void;
    defaultType: string;
    data: string[];
}

const DropDownType: React.FC<PropsType> = ({ onSelect, defaultType, data }) => {
    const [currentType, setCurrentType] = useState(defaultType);
    const [showType, setShowType] = useState(true);

    function onSelectHandler(text: string) {
        setCurrentType(text);
        onSelect(text);
        setShowType(!showType);
    }

    return (
        <div className="DropDown-wrap-type">
            <button
                className="DropDown-wrap-button-type"
                onClick={() => setShowType(!showType)}
            >
                {currentType}
            </button>

            <div className={showType ? "dropdown-hidden-type" : "dropdown-visible-type"}>
                {data.map((TypeOfel) => (
                    <button
                        className="data-type"
                        onClick={() => onSelectHandler(TypeOfel)}
                    >
                        {TypeOfel}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DropDownType;
