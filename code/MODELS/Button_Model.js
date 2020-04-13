import atom from "../TOKENS/atom";
import colors from "../TOKENS/colors.js"

export default {
    style: {
        primary: {
            green: {
                default: {
                    backgroundColor: colors.Accessible_Green,
                    color: colors.White,
                    borderColor: "transparent"
                },
                hover: {
                    backgroundColor: colors.methods.Blacken(colors.Accessible_Green, 0.05),
                    color: colors.White,
                    borderColor: "transparent"
                },
                active: {
                    backgroundColor: colors.methods.Blacken(colors.Accessible_Green, 0.08),
                    color: colors.White,
                    borderColor: "transparent"
                }
            },
            black: {
                default: {
                    backgroundColor: colors.Black,
                    color: colors.White,
                    borderColor: "transparent"
                },
                hover: {
                    backgroundColor: colors.methods.Blacken(colors.Black, 0.05),
                    color: colors.White,
                    borderColor: "transparent"
                },
                active: {
                    backgroundColor: colors.methods.Blacken(colors.Black, 0.08),
                    color: colors.White,
                    borderColor: "transparent"
                }
            },
            blue: {
                default: {
                    backgroundColor: colors.Accessible_Blue,
                    color: colors.White,
                    borderColor: "transparent"
                },
                hover: {
                    backgroundColor: colors.methods.Blacken(colors.Accessible_Blue, 0.05),
                    color: colors.White,
                    borderColor: "transparent"
                },
                active: {
                    backgroundColor: colors.methods.Blacken(colors.Accessible_Blue, 0.08),
                    color: colors.White,
                    borderColor: "transparent"
                }
            },
            red: {
                default: {
                    backgroundColor: colors.Red,
                    color: colors.White,
                    borderColor: "transparent"
                },
                hover: {
                    backgroundColor: colors.methods.Blacken(colors.Red, 0.05),
                    color: colors.White,
                    borderColor: "transparent"
                },
                active: {
                    backgroundColor: colors.methods.Blacken(colors.Red, 0.08),
                    color: colors.White,
                    borderColor: "transparent"
                }
            },
            disabled: {
                backgroundColor: colors.Cool_Grey_2,
                color: colors.White,
                borderColor: colors.Cool_Grey_2,
            }
        },
        secondary: {
            green: {
                default: {
                    backgroundColor: "transparent",
                    color: colors.Accessible_Green,
                    borderColor: colors.Accessible_Green,
                },
                hover: {
                    backgroundColor: colors.methods.Whiten(colors.Cool_Grey_2, 0.8),
                    color: colors.Accessible_Green,
                    borderColor: colors.Accessible_Green
                },
                active: {
                    backgroundColor: colors.methods.Whiten(colors.Cool_Grey_2, 0.6),
                    color: colors.Accessible_Green,
                    borderColor: colors.Accessible_Green
                }
            },
            black: {
                default: {
                    backgroundColor: "transparent",
                    color: colors.Black,
                    borderColor: colors.Black,
                },
                hover: {
                    backgroundColor: colors.methods.Whiten(colors.Cool_Grey_2, 0.8),
                    color: colors.Black,
                    borderColor: "none"
                },
                active: {
                    backgroundColor: colors.methods.Whiten(colors.Cool_Grey_2, 0.6),
                    color: colors.Black,
                    borderColor: "none"
                }
            },
            blue: {
                default: {
                    backgroundColor: "transparent",
                    color: colors.Accessible_Blue,
                    borderColor: colors.Accessible_Blue
                },
                hover: {
                    backgroundColor: colors.methods.Whiten(colors.Cool_Grey_2, 0.8),
                    color: colors.Accessible_Blue,
                    borderColor: "none"
                },
                active: {
                    backgroundColor: colors.methods.Whiten(colors.Cool_Grey_2, 0.6),
                    color: colors.Accessible_Blue,
                    borderColor: "none"
                }
            },
            red: {
                default: {
                    backgroundColor: "transparent",
                    color: colors.Red,
                    borderColor: colors.Red
                },
                hover: {
                    backgroundColor: colors.methods.Whiten(colors.Cool_Grey_2, 0.8),
                    color: colors.Red,
                    borderColor: "none"
                },
                active: {
                    backgroundColor: colors.methods.Whiten(colors.Cool_Grey_2, 0.6),
                    color: colors.Red,
                    borderColor: "none"
                }
            },
            disabled: {
                backgroundColor: "transparent",
                color: colors.Cool_Grey_2,
                borderColor: colors.Cool_Grey_2,
            }
        },
        outline: {
            green: {
                default: {
                    backgroundColor: "transparent",
                    color: colors.Accessible_Green,
                    borderColor: "transparent",
                },
                hover: {
                    backgroundColor: colors.methods.Whiten(colors.Cool_Grey_2, 0.8),
                    color: colors.Accessible_Green,
                    borderColor: "none"
                },
                active: {
                    backgroundColor: colors.methods.Whiten(colors.Cool_Grey_2, 0.6),
                    color: colors.Accessible_Green,
                    borderColor: "none"
                }
            },
            black: {
                default: {
                    backgroundColor: "transparent",
                    color: colors.Black,
                    borderColor: "transparent",
                },
                hover: {
                    backgroundColor: colors.methods.Whiten(colors.Cool_Grey_2, 0.8),
                    color: colors.Black,
                    borderColor: "none"
                },
                active: {
                    backgroundColor: colors.methods.Whiten(colors.Cool_Grey_2, 0.6),
                    color: colors.Black,
                    borderColor: "none"
                }
            },
            blue: {
                default: {
                    backgroundColor: "transparent",
                    color: colors.Accessible_Blue,
                    borderColor: "transparent",
                },
                hover: {
                    backgroundColor: colors.methods.Whiten(colors.Cool_Grey_2, 0.8),
                    color: colors.Accessible_Blue,
                    borderColor: "none"
                },
                active: {
                    backgroundColor: colors.methods.Whiten(colors.Cool_Grey_2, 0.6),
                    color: colors.Accessible_Blue,
                    borderColor: "none"
                }
            },
            red: {
                default: {
                    backgroundColor: "transparent",
                    color: colors.Red,
                    borderColor: "transparent",
                },
                hover: {
                    backgroundColor: colors.methods.Whiten(colors.Cool_Grey_2, 0.8),
                    color: colors.Red,
                    borderColor: "none"
                },
                active: {
                    backgroundColor: colors.methods.Whiten(colors.Cool_Grey_2, 0.6),
                    color: colors.Red,
                    borderColor: "none"
                }
            },
            disabled: {
                backgroundColor: "transparent",
                color: colors.Cool_Grey_2,
                borderColor: "transparent"
            }
        }
    },
    offset: {
        s: {
            paddingTop: 0.75 * atom.size,
            paddingBottom: 1.25 * atom.size,
            paddingLeft: 2 * atom.size,
            paddingRight: 2 * atom.size
        },
        m: {
            paddingTop: 1.25 * atom.size,
            paddingBottom: 1.75 * atom.size,
            paddingLeft: 3 * atom.size,
            paddingRight: 3 * atom.size,
        },
        l: {
            paddingTop: 2.25 * atom.size,
            paddingBottom: 2.75 * atom.size,
            paddingLeft: 4 * atom.size,
            paddingRight: 4 * atom.size
        }
    },
    border: {
        s: 1,
        m: 1,
        l: 1
    },
    font: {
        s: {
            fontFamily: "Open Sans",
            fontSize: 3 * atom.size,
            lineHeight: 4 * atom.size,
            fontWeight: 400
        },
        m: {
            fontFamily: "Open Sans",
            fontSize: 3.5 * atom.size,
            lineHeight: 5 *  atom.size,
            fontWeight: 400
        },
        l: {
            fontFamily: "Open Sans",
            fontSize: 3.5 * atom.size,
            lineHeight: 5 *  atom.size,
            fontWeight: 400
        }
    }
}
