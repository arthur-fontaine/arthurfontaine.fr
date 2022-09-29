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
