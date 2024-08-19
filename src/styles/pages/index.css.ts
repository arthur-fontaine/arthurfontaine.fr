import { globalStyle, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { vars } from "../themes.css";

export const sectionClass = style({
    display: "flex",
    flexDirection: "column",
    gap: calc.divide(vars.space.xl, 2),

    marginBottom: vars.space.xl,

    fontSize: vars.font.size.s,
    fontWeight: vars.font.weight.light,

    selectors: {
        "&:last-child": {
            marginBottom: 0,
        },
    },
})

export const comingSoonClass = style({
    fontStyle: "italic",
})

export const seeMoreWorkClass = style({
    textAlign: "center",
    padding: vars.space.m,
    
    color: vars.color.text,

    '@media': {
        'screen and (prefers-color-scheme: light)': {
            backgroundColor: vars.color.cardBackground,
            color: vars.color.cardText,
        },
    },
})
