import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

const darkBlue = `#007acc`
const lightBlue = `#66e0ff`
const blueGray = `#282c35`
const offWhite = `#f5f5f5`

export default merge(defaultThemeColors, {
  background: offWhite,
  text: blueGray,
  primary: darkBlue,
  heading: blueGray,
  modes: {
    dark: {
      background: blueGray,
      primary: lightBlue,
      highlight: lightBlue,
    },
  },
})
