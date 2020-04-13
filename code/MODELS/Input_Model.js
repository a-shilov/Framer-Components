import atom from "../TOKENS/atom";
import colors from "../TOKENS/colors.js"

export default {
    style: {
        label: {
          external: {
              default: {
                  color: colors.Cool_Grey_10,
                  hover: {
                      color: colors.Cool_Grey_10
                  }
              },
              disabled: {
                  color: colors.Cool_Grey_2,
                  hover: {
                      color: colors.Cool_Grey_2,
                  }
              },
          },
          internal: {
              default: {
                  color: colors.Cool_Grey_10,
                  hover: {
                      color: colors.Cool_Grey_10
                  }
              },
              disabled: {
                  color: colors.Cool_Grey_6,
                  hover: {
                      color: colors.Cool_Grey_6
                  }
              },
          }
        },
        input: {
            default: {
                placeholderColor: colors.Cool_Grey_7,
                color: colors.Black,
                borderColor: colors.Cool_Grey_6,
                backgroundColor: colors.White,
                сaretColor: colors.Deloitte_Green,
                focus: {
                    borderColor: colors.Deloitte_Green,
                }
            },
            disabled: {
                placeholderColor: colors.Cool_Grey_7,
                color: colors.Black,
                borderColor: colors.Cool_Grey_2,
                backgroundColor: colors.Cool_Grey_2,
                сaretColor: colors.Black,
                focus: {
                    borderColor: colors.Cool_Grey_2,
                }
            }
        },
        description: {
            default: {
                color: colors.Cool_Grey_10
            },
            disabled: {
                color: colors.Cool_Grey_2
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
