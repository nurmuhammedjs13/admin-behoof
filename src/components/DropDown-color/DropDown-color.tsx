import "./DropDown-color.css";
import React, { useState } from "react";

interface PropsColor {
    onSelect: (value: string) => void;
    defaultColor: string;
    data: string[];
}

const DropDownColor: React.FC<PropsColor> = ({ onSelect, defaultColor, data }) => {
    const [currentColor, setCurrentColor] = useState(defaultColor);
    const [showColor, setShowColor] = useState(true);

    function onSelectHandler(text: string) {
        setCurrentColor(text);
        onSelect(text);
        setShowColor(!showColor);
    }

    return (
        <div className="DropDown-wrap">
            <button className="DropDown-wrap-button" onClick={() => setShowColor(!showColor)}>
                {currentColor}
            </button>

            <div className={showColor ? "dropdown-hidden" : "dropdown-visible"}>
                {data.map((colorEl) => (
                    <button
                        className="data"
                        onClick={() => onSelectHandler(colorEl)}
                    >
                        {colorEl}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DropDownColor;
