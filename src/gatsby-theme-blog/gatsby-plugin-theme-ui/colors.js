import { theme } from '../../theme'

const primaryColor = theme.color.primary
const lightTextColor = `#232129`

const darkBackground = `#232129`
const white = `#fff`

const darkHightlight = theme.color.primary
const lightHightlight = `rgba(255, 229, 100, 0.2)`

const darkSecondaryColor = `rgba(255, 255, 255, 0.86)`
const lightSecondaryColor = `#1B1F23`

const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`
const lightGray = `hsla(0, 0%, 0%, 0.2)`


export default {
  text: darkSecondaryColor,
  background: darkBackground,
  primary: primaryColor,
  secondary: darkSecondaryColor,
  muted: opaqueLightWhite,
  highlight: darkHightlight,
  heading: white,
  prism: {
    background: `#011627`,
    comment: `#809393`,
    string: `#addb67`,
    var: `#d6deeb`,
    number: `#f78c6c`,
    constant: `#82aaff`,
    punctuation: `#c792ea`,
    className: `#ffc98b`,
    tag: `#ffa7c4`,
    boolean: `#ff5874`,
    property: `#80cbc4`,
    namespace: `#b2ccd6`,
    highlight: `hsla(207, 95%, 15%, 1)`,
  },
  modes: {
    light: {
      text: lightTextColor,
      background: white,
      primary: primaryColor,
      secondary: lightSecondaryColor,
      muted: lightGray,
      highlight: lightHightlight,
      heading: lightTextColor,
    },
  },
}