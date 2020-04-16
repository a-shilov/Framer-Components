import atom from "../TOKENS/atom";
import colors from "../TOKENS/colors.js"

export default  {
    style: {
      rectangle: {
          inactive: {
              default: "#A7A8AA",
              hover: "#97999B"
          },
          checked: {
              default: "#26890D",
              hover: "#237E0C"
          },
          disabled: {
              default: "#D0D0CE",
              hover: "#D0D0CE"
          }
      },
      baseline: {
          backgroundColor: "#D0D0CE"
      },
      label: {
          default: {
              color: colors.Black
          },
          disabled: {
              color: "#D0D0CE"
          }
      }

    },
    font: {
        fontFamily: "Open Sans",
        fontSize: 3 * atom.size,
        lineHeight: 4 * atom.size,
        fontWeight: 400
    }
}
