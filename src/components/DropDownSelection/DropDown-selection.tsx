import "./DropDown-selection.css";
import React, { useEffect, useState } from "react";

interface PropsColor {
    onSelect: (value: string) => void;
    defaultSelection: string;
    data: string[];
}

const DropDownColor: React.FC<PropsColor> = ({ onSelect, defaultSelection, data }) => {
    const [currentSelection, setCurrentSelection] = useState(defaultSelection);
    const [showColor, setShowColor] = useState(true);

        useEffect(() => {
            setCurrentSelection(defaultSelection);
        }, [defaultSelection]);

    function onSelectHandler(text: string) {
        onSelect(text);
        setShowColor(!showColor);
    }

    return (
        <div className="DropDown-wrap">
            <button className="DropDown-wrap-button" onClick={() => setShowColor(!showColor)}>
                {currentSelection}
            </button>

            <div className={showColor ? "dropdown-hidden" : "dropdown-visible"}>
                {data.map((SelectionEl) => (
                    <button
                        className="data"
                        onClick={() => onSelectHandler(SelectionEl)}
                    >
                        {SelectionEl}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DropDownColor;
