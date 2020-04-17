import atom from "../TOKENS/atom";
import colors from "../TOKENS/colors.js"

export default  {
    style: {
      inactive: {
        green: {
            default: {
                border: colors.Black,
                backgroundColor: colors.White,
            },
            hover: {
                border: colors.Black,
                backgroundColor: "#F5F5F5",
            },
            disabled: {
                border: "#BBBCBC",
                backgroundColor: colors.White,
            }
        },
        blue: {
            default: {
                border: colors.Black,
                backgroundColor: colors.White,
            },
            hover: {
                border: colors.Black,
                backgroundColor: "#F5F5F5",
            },
            disabled: {
                border: "#BBBCBC",
                backgroundColor: colors.White,
            }
        },
        black: {
            default: {
                border: colors.Black,
                backgroundColor: colors.White,
            },
            hover: {
                border: colors.Black,
                backgroundColor: "#F5F5F5",
            },
            disabled: {
                border: "#BBBCBC",
                backgroundColor: colors.White,
            }
        }
      },
      checked: {
          green: {
              default: {
                  border: colors.Accessible_Green,
                  backgroundColor: colors.White,
              },
              hover: {
                  border: "#20740B",
                  backgroundColor: colors.White,
              },
              disabled: {
                  border: "#BBBCBC",
                  backgroundColor: colors.White,
              }
          },
          blue: {
              default: {
                  border: colors.Accessible_Blue,
                  backgroundColor: colors.White,
              },
              hover: {
                  border: "#006F9E",
                  backgroundColor: colors.White,
              },
              disabled: {
                  border: "#BBBCBC",
                  backgroundColor: colors.White,
              }
          },
          black: {
              default: {
                  border: colors.Black,
                  backgroundColor: colors.White,
              },
              hover: {
                  border: "#1F1F1F",
                  backgroundColor: colors.White,
              },
              disabled: {
                  border: "#BBBCBC",
                  backgroundColor: colors.White,
              }
          }
      },
      label: {
          default: {
              color: colors.Black
          },
          disabled: {
              color: "#D0D0CE"
          },
          font: {
              fontFamily: "Open Sans",
              fontSize: 3 * atom.size,
              lineHeight: 4 * atom.size,
              fontWeight: 400
          }
      }
    }
}
