import React, { useState, useContext } from "react";
import "./index.css";
import reactLogo from '../../assets/react.svg';

const themes = {
    light: {
        id: 1,
        foreground: "#000000", background: "#eeeeee",
    },
    dark: {
        id: 2,
        foreground: "#ffffff", background: "#222222",
    }
}
const ThemeContext = React.createContext(themes.light);

function ThemedButton() {
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
        <button
            style={{ background: theme.background, color: theme.foreground }}
            onClick={changeTheme}>
            Click for {(theme.id === 1) ? "Dark Mode" : "Light Mode"} !!
        </button>
    );
}

export default function index() {
    const [theme, setTheme] = useState(themes.dark);

    const changeTheme = () => {
        if (theme.id === themes.light.id) {
            setTheme(themes.dark);
        } else {
            setTheme(themes.light);
        }
    };

    return (
        <>
            <ThemeContext.Provider value={{ theme, changeTheme }}>
                <div className="Main" style={{ background: theme.background, color: theme.foreground }}>
                    <div>
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </div>
                    <h3> USE CONTEXT | KEL 33 </h3>
                    <ThemedButton />
                </div>
            </ThemeContext.Provider>
        </>
    )
}
