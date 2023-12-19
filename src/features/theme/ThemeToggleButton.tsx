"use client";
import { useTheme } from "next-themes";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeToggleButton = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            className="items-center justify-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
    );
};

export default ThemeToggleButton;
