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
  marginTop: vars.space.xl,
})

globalStyle(`${blogClass} h2`, {
  fontSize: vars.font.size.m,
  fontWeight: vars.font.weight.medium,
  marginBlock: vars.space.l,
})

globalStyle(`${blogClass} h3`, {
  fontSize: vars.font.size.s,
  fontWeight: vars.font.weight.medium,
  marginBlock: vars.space.l,
})

globalStyle(`${blogClass} hr`, {
  marginBlock: vars.space.xl,
})

globalStyle(`${blogClass} time`, {
  display: "block",
  fontSize: vars.font.size.xs,
  fontWeight: vars.font.weight.extraLight,
  fontStyle: "italic",
})

globalStyle(`${blogClass} p`, {
  fontSize: '1rem',
  marginBlock: vars.space.m,
  fontWeight: vars.font.weight.light,
  fontFamily: 'Trispace',
  lineHeight: 1.4,
})

globalStyle(`${metaContainerClass} p`, {
  marginBlock: vars.space.s,
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

globalStyle(`${blogClass} table`, {
  width: "100%",
  borderCollapse: "collapse",
  marginBlock: vars.space.l,
})

globalStyle(`${blogClass} th`, {
  textAlign: "left",
  padding: vars.space.s,
  borderBottom: `1px solid ${vars.color.border}`,
})

globalStyle(`${blogClass} td`, {
  padding: vars.space.s,
  borderBottom: `1px solid ${vars.color.border}`,
})

globalStyle(`${blogClass} tr:nth-child(2n)`, {
  backgroundColor: `color-mix(in srgb, ${vars.color.border}, transparent 98%)`,
})

globalStyle(`${blogClass} tr:nth-child(2n + 1)`, {
  backgroundColor: `color-mix(in srgb, ${vars.color.border}, transparent 95%)`,
})

globalStyle(`${blogClass} thead tr`, {
  backgroundColor: 'transparent!important',
})

globalStyle(`${blogClass} pre`, {
  marginBlock: vars.space.l,
  padding: vars.space.m,
  borderLeft: `4px solid ${vars.color.blue}`,
  backgroundColor: `color-mix(in srgb, ${vars.color.border}, transparent 95%)!important`,
})

globalStyle(`${blogClass} code`, {
  fontSize: vars.font.size.xs,
  position: "relative",
})

const inlineCodeBgPadding = 4
globalStyle(`${blogClass} :not(pre) > code::before`, {
  content: "''",
  position: "absolute",
  top: -inlineCodeBgPadding,
  left: -inlineCodeBgPadding,
  bottom: -inlineCodeBgPadding,
  right: -inlineCodeBgPadding,
  backgroundColor: `color-mix(in srgb, ${vars.color.border}, transparent 85%)`,
})

export const tagsClass = style({
  display: "flex",
  gap: vars.space.m,
  marginBlock: vars.space.l,
})
