import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const returnToHomeClass = style({
  display: "flex",
  alignItems: "center",
  color: vars.color.text,
  textDecoration: "none",
  fontSize: vars.font.size.s,
  fontWeight: vars.font.weight.regular,
  gap: vars.space.s,
  width: "fit-content",
  marginBottom: vars.space.xl,
})

export const headerClass = style({
  width: "100%",
  maxWidth: "50rem",
  margin: "0 auto",
})

export const returnToHomeIconClass = style({
  width: "1.5rem",
  height: "1.5rem",
  fill: vars.color.text,
})

export const blogClass = style({
  maxWidth: "50rem",
  margin: "0 auto",
})

export const metaContainerClass = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.m,
  marginTop: vars.space.m,
  marginBottom: vars.space.l,
})

export const translationListClass = style({
  display: "flex",
  gap: vars.space.s,
  margin: '0!important',
  padding: '0!important',
})

export const translationItemClass = style({})

globalStyle(`${translationItemClass}::before`, {
  content: "''!important",
})

globalStyle(`${translationItemClass}:not(:first-child)::before`, {
  content: "'|'",
})

export const translationListContainerClass = style({
  display: "flex",
  alignItems: "baseline",
})

globalStyle(`${translationListContainerClass} p, ${translationListContainerClass} li`, {
  fontSize: `${vars.font.size.xs}!important`,
})

globalStyle(`${blogClass} > main > h1`, {
  display: "none",
})

globalStyle(`${blogClass} h1`, {
  fontSize: vars.font.size.l,
  marginTop: vars.space.l,
})

globalStyle(`${blogClass} h2`, {
  fontSize: vars.font.size.m,
  fontWeight: vars.font.weight.medium,
  marginBlock: vars.space.m,
})

globalStyle(`${blogClass} h3`, {
  fontSize: vars.font.size.s,
  fontWeight: vars.font.weight.medium,
  marginBlock: vars.space.m,
})

globalStyle(`${blogClass} hr`, {
  marginBlock: vars.space.l,
})

globalStyle(`${blogClass} time`, {
  display: "block",
  fontSize: vars.font.size.xs,
  fontWeight: vars.font.weight.extraLight,
  fontStyle: "italic",
})

globalStyle(`${blogClass} p`, {
  fontSize: '1rem',
  marginBlock: vars.space.s,
  fontWeight: vars.font.weight.light,
  fontFamily: 'Trispace',
  lineHeight: 1.4,
})

globalStyle(`${blogClass} a`, {
  textDecoration: "underline",
  color: vars.color.blue,
})

globalStyle(`${blogClass} ul`, {
  listStyleType: "none",
  marginBlock: vars.space.l,
  paddingInline: vars.space.s,
})

globalStyle(`${blogClass} ul li`, {
  fontSize: vars.font.size.s,
  marginBlock: vars.space.s,
  fontWeight: vars.font.weight.light,
})

globalStyle(`${blogClass} li::before`, {
  content: "'-'",
  paddingRight: vars.space.s,
})

export const tagsClass = style({
  display: "flex",
  gap: vars.space.m,
  marginBlock: vars.space.l,
})
