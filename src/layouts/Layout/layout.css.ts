import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

globalStyle("html, body", {
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",

    fontFamily: vars.font.family.default,
});

globalStyle('h1, h2, h3, h4, h5, h6, p', {
    margin: 0,
    padding: 0,
});

globalStyle('h1', {
    fontSize: vars.font.size.xxl,
    fontWeight: vars.font.weight.bold,
});

globalStyle('h2', {
    fontSize: vars.font.size.xl,
    fontWeight: vars.font.weight.medium,
});

globalStyle('::-webkit-scrollbar', {
    width: '0.2rem',
});

globalStyle('::-webkit-scrollbar-track', {
    background: 'transparent',
});

globalStyle('::-webkit-scrollbar-thumb', {
    background: vars.color.white,
    borderRadius: 0,
});

export const htmlClass = style({
    backgroundColor: vars.color.black,
    color: vars.color.white,
});

export const bodyContainerClass = style({
    display: "flex",
    maxWidth: "96rem",
    margin: "0 auto",

    '@media': {
        'screen and (max-width: 768px)': {
            flexDirection: "column",
            height: "max-content",
        },
    }
});

export const asideClass = style({
    display: "flex",
    flexDirection: "column",

    width: "fit-content",
    minHeight: "100%",
    height: "fit-content",

    padding: vars.space.xl,
    gap: vars.space.xl,

    boxSizing: "border-box",

    overflow: "hidden",

    '@media': {
        'screen and (max-width: 425px)': {
            padding: vars.space.l,
            gap: vars.space.l,
        },
    },
});

export const socialsClass = style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: vars.space.m,
});

globalStyle(`${socialsClass} svg`, {
    width: "2rem",
    height: "2rem",

    fill: vars.color.white,
});

export const expandedClass = style({
    flex: 1,
    pointerEvents: "none",
});

export const titleClass = style({});

export const sendEmailTitleClass = style({
    fontSize: vars.font.size.l,
    fontWeight: vars.font.weight.semiBold,

    marginBottom: vars.space.s,
});

export const emailClass = style({
    textDecoration: "underline",
    color: vars.color.white,

    fontSize: vars.font.size.m,
    fontWeight: vars.font.weight.regular,
});

export const downloadResumeClass = style({
    textDecoration: "underline",
    color: vars.color.blue,

    fontSize: vars.font.size.m,
    fontWeight: vars.font.weight.regular,
});

export const mainClass = style({
    flex: 1,

    padding: vars.space.xl,
    boxSizing: "border-box",

    height: "100%",
    overflowY: "auto",

    '@media': {
        'screen and (max-width: 425px)': {
            padding: vars.space.l,
        },
        'screen and (max-width: 768px)': {
            height: "fit-content",
            overflowY: "auto",
        },
    },
});
