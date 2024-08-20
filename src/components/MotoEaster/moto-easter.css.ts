import { style } from "@vanilla-extract/css"

export const motoEasterClass = style({
  position: "absolute",
  bottom: "50px",
  right: "50px",
  zIndex: 100,

  width: "100px",
  height: "100px",

  opacity: 0,
  transition: "opacity 0.5s",

  userSelect: "none",

  display: "flex",
})
