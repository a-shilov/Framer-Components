import atom from "../TOKENS/atom";
import colors from "../TOKENS/colors.js"

export default {
    style: {
        primary:{
            default: {
                backgroundColor: colors.Black,
                color: colors.White,
                borderColor: colors.Black
            },
            hover: {
                backgroundColor: "#1A1A1A",
                color: colors.White,
                borderColor: "#1A1A1A"
            },
            active: {
                backgroundColor: "#1A1A1A",
                color: colors.White,
                borderColor: "#1A1A1A"
            },
            disable: {
                backgroundColor: "#262626",
                color: colors.White,
                borderColor: "#262626"
            }
        },
        secondary: {
            default: {
                backgroundColor: "#EDEDED",
                color: colors.Black,
                borderColor: "#EDEDED"
            },
            hover: {
                backgroundColor: "#E6E6E6",
                color: colors.Black,
                borderColor: "#E6E6E6"
            },
            active: {
                backgroundColor: "#E6E6E6",
                color: colors.Black,
                borderColor: "#E6E6E6"
            },
            disable: {
                backgroundColor: "#DEDEDE",
                color: colors.Black,
                borderColor: "#DEDEDE"
            }
        },
        thirdLevel: {
            default: {
                backgroundColor: "#FFFFFF",
                color: colors.Black,
                borderColor: "#D0D0CE"
            },
            hover: {
                backgroundColor: "#F7F7F7",
                color: colors.Black,
                borderColor: "#F7F7F7"
            },
            active: {
                backgroundColor: "#F7F7F7",
                color: colors.Black,
                borderColor: "#F7F7F7"
            },
            disable: {
                backgroundColor: "#F0F0F0",
                color: colors.Black,
                borderColor: "#F0F0F0"
            }
        }
    },
    offset: {
        paddingTop: 2 * atom.size,
        paddingBottom: 2.4 * atom.size,
        paddingLeft: 3.3 * atom.size,
        paddingRight: 3.3* atom.size,
    },
    icon: {
        paddingTop: 2 * atom.size,
        paddingRight: 2.4 * atom.size,
        paddingBottom: 2.6 * atom.size,
        paddingLeft: 2.4 * atom.size,
    },
    text: {
        fontFamily: "Open Sans",
        fontSize: 3.5 * atom.size,
        lineHeight: 5 *  atom.size,
        fontWeight: 400
    },
    border: 1
}
