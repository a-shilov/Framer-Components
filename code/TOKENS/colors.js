import * as Color from "color"

export default {
    White: "#FFFFFF",
    Black: "#000000",
    Deloitte_Green: "#86BC25",
    Green_4: "#43B02A",
    Accessible_Green: "#26890D",
    Green_6: "#046A38",
    Accessible_Teal: "#0D8390",
    Accessible_Blue: "#007CB0",

    Green_1: "#E3E48D",
    Green_2: "#C4D600",
    Green_5: "#14A253",
    Green_7: "#2C5234",

    Blue_1: "#A0DCFF",
    Blue_2: "#62B5E5",
    Blue_3: "#00A2E0",
    Blue_4: "#0076A8",
    Blue_5: "#005587",
    Blue_6: "#012169",
    Blue_7: "#041E42",

    Teal_1: "#DDEFE8",
    Teal_2: "#9DD4CF",
    Teal_3: "#6FC2B4",
    Teal_4: "#00ABAB",
    Teal_5: "#0097A9",
    Teal_6: "#007680",
    Teal_7: "#004F59",

    Cool_Grey_2: "#D0D0CE",
    Cool_Grey_4: "#BBBCBC",
    Cool_Grey_6: "#A7A8AA",
    Cool_Grey_7: "#97999B",
    Cool_Grey_9: "#75787B",
    Cool_Grey_10: "#63666A",
    Cool_Grey_11: "#53565A",

    Bright_Green: "#0DF200",
    Bright_Teal: "#3EFAC5",
    Bright_Blue: "#33F0FF",
    Red: "#DA291C",
    Orange: "#ED8B00",
    Yellow: "#FFCD00",

  methods: {
    Whiten(colorSelected, range){
      return Color(colorSelected).mix(Color("#fff"), range).toString();
    },
    Blacken(colorSelected, range) {
      return Color(colorSelected).mix(Color("#000"), range).toString();
    }
  }
}
