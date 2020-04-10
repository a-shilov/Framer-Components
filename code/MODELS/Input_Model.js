import  atom  from "../TOKENS/atom";
import colors from "../TOKENS/colors.js"

export default {
    style: {
        label: {
          external: {
              default: {
                  color: colors.secondary.Cool_Grey_10,
                  hover: {
                      color: colors.secondary.Cool_Grey_10
                  }
              },
              disabled: {
                  color: colors.secondary.Cool_Grey_2,
                  hover: {
                      color: colors.secondary.Cool_Grey_2,
                  }
              },
          },
          internal: {
              default: {
                  color: colors.secondary.Cool_Grey_10,
                  hover: {
                      color: colors.secondary.Cool_Grey_10
                  }
              },
              disabled: {
                  color: colors.secondary.Cool_Grey_6,
                  hover: {
                      color: colors.secondary.Cool_Grey_6
                  }
              },
          }
        },
        input: {
            default: {
                placeholderColor: colors.secondary.Cool_Grey_7,
                color: colors.primary.Black,
                borderColor: colors.secondary.Cool_Grey_6,
                backgroundColor: colors.primary.White,
                сaretColor: colors.primary.Deloitte_Green,
                focus: {
                    borderColor: colors.primary.Deloitte_Green,
                }
            },
            disabled: {
                placeholderColor: colors.secondary.Cool_Grey_7,
                color: colors.primary.Black,
                borderColor: colors.secondary.Cool_Grey_2,
                backgroundColor: colors.secondary.Cool_Grey_2,
                сaretColor: colors.primary.Black,
                focus: {
                    borderColor: colors.secondary.Cool_Grey_2,
                }
            }
        },
        description: {
            default: {
                color: colors.secondary.Cool_Grey_10
            },
            disabled: {
                color: colors.secondary.Cool_Grey_2
            }
        },
    },
    font: {
        label: {
            fontFamily: "Open Sans",
            fontSize: 3.5 * atom.size,
            lineHeight: 4 * atom.size,
            fontWeight: 400,
            letterSpacing: 0.075 * atom.size
        },
        input: {
            fontFamily: "Open Sans",
            fontSize: 4 * atom.size,
            lineHeight: 6 * atom.size,
            fontWeight: 400,
            letterSpacing: 0.1 * atom.size
        },
        description: {
            fontFamily: "Open Sans",
            fontSize: 3.5 * atom.size,
            lineHeight: 5 *  atom.size,
            fontWeight: 400,
            letterSpacing: 0.075 * atom.size
        }
    }
}
