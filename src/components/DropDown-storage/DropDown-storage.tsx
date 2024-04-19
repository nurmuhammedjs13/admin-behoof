import "./DropDown-storage.css";
import React, { useState } from "react";

interface PropsStorage {
    onSelect: (value: string) => void;
    defaultStorage: string;
    data: string[];
}

const DropDownStorage: React.FC<PropsStorage> = ({ onSelect, defaultStorage, data }) => {
    const [currentColor, setCurrentColor] = useState(defaultStorage);
    const [showStorage, setShowStorage] = useState(true);

    function onSelectHandler(text: string) {
        setCurrentColor(text);
        onSelect(text);
        setShowStorage(!showStorage);
    }

    return (
        <div className="DropDown-wrap">
            <button className="DropDown-wrap-button" onClick={() => setShowStorage(!showStorage)}>
                {currentColor}
            </button>

            <div className={showStorage ? "dropdown-hidden" : "dropdown-visible"}>
                {data.map((storageEl) => (
                    <button
                        className="data"
                        onClick={() => onSelectHandler(storageEl)}
                    >
                        {storageEl}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DropDownStorage;
