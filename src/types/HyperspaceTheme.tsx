import {Color} from '@material-ui/core';
import { deepPurple, red, lightGreen, yellow, purple, deepOrange, indigo, lightBlue, orange, blue, amber, pink, brown, blueGrey } from '@material-ui/core/colors';

/**
 * Basic theme colors for Hyperspace.
 */
export type HyperspaceTheme = {
    key: string;
    name: string;
    palette: {
        primary: {
            main: string;
        } | Color;
        secondary: {
            main: string;
        } | Color;
    }
}

export const defaultTheme: HyperspaceTheme = {
    key: "defaultTheme",
    name: "Gopher (Default)",
    palette: {
        primary: indigo,
        secondary: amber
    }
}

export const hypergodTheme: HyperspaceTheme = {
    key: "hypergodTheme",
    name: "Royal",
    palette: {
        primary: deepPurple,
        secondary: red
    }
}

export const gardenerTheme: HyperspaceTheme = {
    key: "gardnerTheme",
    name: "Botanical",
    palette: {
        primary: lightGreen,
        secondary: yellow
    }
}

export const teacherTheme: HyperspaceTheme = {
    key: "teacherTheme",
    name: "Compassionate",
    palette: {
        primary: purple,
        secondary: deepOrange
    }
}

export const jokerTheme: HyperspaceTheme = {
    key: "jokerTheme",
    name: "Joker",
    palette: {
        primary: indigo,
        secondary: lightBlue
    }
}

export const guardTheme: HyperspaceTheme = {
    key: "guardTheme",
    name: "Enthusiastic",
    palette: {
        primary: blue,
        secondary: deepOrange
    }
}

export const entertainerTheme: HyperspaceTheme = {
    key: "entertainerTheme",
    name: "Animated",
    palette: {
        primary: pink,
        secondary: purple
    }
}

export const kingTheme: HyperspaceTheme = {
    key: "kingTheme",
    name: "Royal II",
    palette: {
        primary: deepPurple,
        secondary: amber
    }
}

export const dragonTheme: HyperspaceTheme = {
    key: "dragonTheme",
    name: "Adventurous",
    palette: {
        primary: purple,
        secondary: purple
    }
}

export const memoriumTheme: HyperspaceTheme = {
    key: "memoriumTheme",
    name: "Memorial",
    palette: {
        primary: red,
        secondary: red
    }
}

export const blissTheme: HyperspaceTheme = {
    key: "blissTheme",
    name: "Bliss",
    palette: {
        primary: {
            main: "#3e2723"
        },
        secondary: lightBlue
    }
}

export const attractTheme: HyperspaceTheme = {
    key: "attractTheme",
    name: "Attract",
    palette: {
        primary: {
            main: '#f5f5f5',
        },
        secondary: {
            main: "#1a237e",
        }
    }
}

export const themes = [defaultTheme, hypergodTheme, gardenerTheme, teacherTheme, jokerTheme, guardTheme, entertainerTheme, kingTheme, dragonTheme, memoriumTheme, blissTheme, attractTheme]
