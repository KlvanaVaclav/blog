import { createTheme } from "@mui/material/styles";

// Function to get CSS variable values with a fallback
const getCSSVariable = (variable, fallback) => {
    if (typeof window !== "undefined") {
        const value = getComputedStyle(document.documentElement)
            .getPropertyValue(variable)
            .trim();
        return value || fallback;
    }
    return fallback;
};

const theme = createTheme({
    palette: {
        primary: {
            main: getCSSVariable("--button-primary", "#f0911f"), // Grandis 500
            light: getCSSVariable("--accent", "#f3ab44"), // Grandis 400
            dark: getCSSVariable("--button-active", "#bb5b13"), // Grandis 700
        },
        secondary: {
            main: getCSSVariable("--text-secondary", "#944818"), // Grandis 800
        },
        background: {
            default: getCSSVariable("--bg-primary", "#fef9ee"), // Grandis 50
            paper: getCSSVariable("--bg-card", "#fbe2ad"), // Grandis 200
        },
        text: {
            primary: getCSSVariable("--text-primary", "#783c16"), // Grandis 900
            secondary: getCSSVariable("--text-secondary", "#944818"), // Grandis 800
        },
        action: {
            hover: getCSSVariable("--button-hover", "#e17715"), // Grandis 600
            selected: getCSSVariable("--button-active", "#bb5b13"), // Grandis 700
        },
        divider: getCSSVariable("--border-light", "#f8cf84"), // Grandis 300
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: "bold",
                    backgroundColor: getCSSVariable("--button-primary", "#f0911f"),
                    color: "#fff",
                    "&:hover": {
                        backgroundColor: getCSSVariable("--button-hover", "#e17715"),
                    },
                    "&:active": {
                        backgroundColor: getCSSVariable("--button-active", "#bb5b13"),
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: getCSSVariable("--bg-card", "#fbe2ad"),
                    padding: "1rem",
                },
            },
        },
    },
});

export default theme;