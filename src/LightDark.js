import React, { useState } from "react";
import "./styles.css";

//☀︎ ☽
export default function LightDark() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        // <div className={darkMode ? "dark-mode" : "light-mode"}>
        //     <div className="container">
        //         <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        //         {/* <div className="switch-checkbox">
        //             <label className="switch">
        //                 <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
        //                 <span className="slider round"> </span>
        //             </label>
        //         </div> */}
        //         <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
        //     </div>
        //     <div>
        //     </div>
        // </div>
        <div className="switch-checkbox">
            <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>

            <h1>Cool its {darkMode ? "Dark" : "Light"} Mode </h1>
            <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>

            <label className="switch">
                <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                <span className="slider round"> </span>
            </label>
        </div>
    );
}