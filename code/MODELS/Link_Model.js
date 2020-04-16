import atom from "../TOKENS/atom";
import colors from "../TOKENS/colors.js"

export default {
    style: {
        day: {
            primary: {
                underline: {
                   default: {
                       color: "#26890D",
                       textDecoration: 'underline',
                   },
                   hover: {
                       color: "#26890D",
                       textDecoration: 'underline',
                   },
                   active: {
                       color: "#1C660A",
                       textDecoration: 'underline',
                   },
                   visited: {
                       color: "#012169",
                       textDecoration: 'underline',
                   },
                   disabled: {
                       color: "#98999B",
                       textDecoration: 'underline',
                   }
                },
                silent: {
                    default: {
                        color: "#26890D",
                        textDecoration: 'none',
                    },
                    hover: {
                        color: "#26890D",
                        textDecoration: 'underline',
                    },
                    active: {
                        color: "#1C660A",
                        textDecoration: 'underline',
                    },
                    visited: {
                        color: "#012169",
                        textDecoration: 'none',
                    },
                    disabled: {
                        color: "#98999B",
                        textDecoration: 'none',
                    }
                }
            },
            secondary: {
                    underline: {
                        default: {
                            color: colors.Black,
                            textDecoration: 'underline',
                        },
                        hover: {
                            color: colors.Black,
                            textDecoration: 'underline',
                        },
                        active: {
                            color: colors.Black,
                            textDecoration: 'underline',
                        },
                        visited: {
                            color: "#012169",
                            textDecoration: 'underline',
                        },
                        disabled: {
                            color: "#98999B",
                            textDecoration: 'underline',
                        }
                    },
                    silent: {
                        default: {
                            color: colors.Black,
                            textDecoration: 'none',
                        },
                        hover: {
                            color: colors.Black,
                            textDecoration: 'underline',
                        },
                        active: {
                            color: colors.Black,
                            textDecoration: 'underline',
                        },
                        visited: {
                            color: "#012169",
                            textDecoration: 'none',
                        },
                        disabled: {
                            color: "#98999B",
                            textDecoration: 'none',
                        }
                    }

            }
        },
        night: {
            primary: {
                underline: {
                    default: {
                        color: colors.White,
                        textDecoration: 'underline',
                    },
                    hover: {
                        color: colors.White,
                        textDecoration: 'underline',
                    },
                    active: {
                        color: colors.White,
                        textDecoration: 'underline',
                    },
                    visited: {
                        color: colors.White,
                        textDecoration: 'underline',
                    },
                    disabled: {
                        color: "rgba(255,255,255,0.4)",
                        textDecoration: 'underline',
                    }
                },
                silent: {
                    default: {
                        color: colors.White,
                        textDecoration: 'none',
                    },
                    hover: {
                        color: colors.White,
                        textDecoration: 'underline',
                    },
                    active: {
                        color: colors.White,
                        textDecoration: 'underline',
                    },
                    visited: {
                        color: colors.White,
                        textDecoration: 'none',
                    },
                    disabled: {
                        color: "rgba(255,255,255,0.4)",
                        textDecoration: 'none',
                    }
                }
            },
            secondary: {
                underline: {
                    default: {
                        color: colors.White,
                        textDecoration: 'underline',
                    },
                    hover: {
                        color: colors.White,
                        textDecoration: 'underline',
                    },
                    active: {
                        color: colors.White,
                        textDecoration: 'underline',
                    },
                    visited: {
                        color: colors.White,
                        textDecoration: 'underline',
                    },
                    disabled: {
                        color: "rgba(255,255,255,0.4)",
                        textDecoration: 'underline',
                    }
                },
                silent: {
                    default: {
                        color: colors.White,
                        textDecoration: 'none',
                    },
                    hover: {
                        color: colors.White,
                        textDecoration: 'underline',
                    },
                    active: {
                        color: colors.White,
                        textDecoration: 'underline',
                    },
                    visited: {
                        color: colors.White,
                        textDecoration: 'none',
                    },
                    disabled: {
                        color: "rgba(255,255,255,0.4)",
                        textDecoration: 'none',
                    }
                }

            }
        }
    },
    font: {
        fontFamily: "Open Sans",
        fontSize: 3 * atom.size,
        lineHeight: 4 * atom.size,
        fontWeight: 400
    },
}
