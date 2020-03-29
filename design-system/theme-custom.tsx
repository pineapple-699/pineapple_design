// import { colors } from "../design-system.framerfx/code/canvas"

const space: string[] = ["0", "4px", "8px", "16px", "32px"]

const font = "-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"

const colors =({
  background:"rgb(255, 255, 255)",
  primary: "#FCB742",
  primaryDark: "#FBA30E",
  body:"rgb(34, 34, 34)",
  bodyLight:"rgb(68, 68, 68)",
  bodyLighter:"rgb(102, 102, 102)",
  bodyLightest:"rgb(170, 170, 170)"
})

export const theme = {
  color: colors,
  font,
  space
}
