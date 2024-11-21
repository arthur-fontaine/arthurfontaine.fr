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

export const blogListClass = style({
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    gap: vars.space.m,
    padding: 0,
})

export const blogListItemClass = style({
    display: "flex",
    flexDirection: "column",
    gap: vars.space.s,
})

export const blogListItemLinkClass = style({
    color: vars.color.text,
    textDecoration: "none",
})

export const blogListItemTitleClass = style({
    textDecoration: "underline",
    fontSize: "1em",
})

export const blogListItemDateClass = style({
    fontWeight: vars.font.weight.extraLight,
    fontStyle: "italic",
})

export const blogListItemTagsClass = style({
    display: "flex",
    gap: vars.space.s,
    fontSize: vars.font.size.xs,
    fontWeight: vars.font.weight.extraLight,
})
