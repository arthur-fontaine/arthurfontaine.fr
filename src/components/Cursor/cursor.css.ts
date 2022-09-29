import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

globalStyle(`*`, {
    cursor: 'none',
});

export const cursorClass = styleVariants({
    default: { display: 'none' },
    visible: { display: 'block' },
});

globalStyle(`${cursorClass.visible} svg`, {
    position: 'fixed',
    zIndex: 9999,

    top: 0,
    left: 0,

    width: '24px',
    height: '34px',

    pointerEvents: 'none',
});

globalStyle(`${cursorClass.visible} svg path`, {
    fill: vars.color.black,
    stroke: vars.color.white,
    strokeWidth: '1px',
});
