import { createVar, globalStyle, style } from "@vanilla-extract/css"
import { vars } from "../../styles/themes.css"

export const projectColorVar = createVar()

export const workClass = style({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "stretch",

    padding: vars.space.xs,

    backgroundColor: vars.color.cardBackground,
})

globalStyle(`${workClass} > *`, {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "50%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: vars.space.l,

    minWidth: "200px",
    width: "50%",

    padding: vars.space.m,
    boxSizing: "border-box",
})

globalStyle(`${workClass} > *:first-child`, {
    backgroundColor: projectColorVar,
    color: '#fff',
})

globalStyle(`${workClass} > *:last-child`, {
    backgroundColor: vars.color.cardBackground,
    color: vars.color.cardText,

    border: `1px solid ${projectColorVar}`,

    fontSize: vars.font.size.s,
    fontWeight: vars.font.weight.light,
})

export const workTitleClass = style({
    fontSize: vars.font.size.xl,
    fontWeight: vars.font.weight.medium,
})

export const workDescriptionClass = style({
    fontSize: vars.font.size.m,
    fontWeight: vars.font.weight.regular,
})

export const workLinksClass = style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    gap: vars.space.s,

    marginTop: 'auto',
    height: 'fit-content',
})

export const workLinkClass = style({
    fill: '#fff',
})

export const workStoryClass = style({})

export const workStackClass = style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: `${vars.space.xs} ${vars.space.s}`,

    padding: 0,
    margin: 0,

    flexWrap: "wrap",

    listStyle: "none",

    fontSize: vars.font.size.xs,    
    textTransform: "uppercase",
})