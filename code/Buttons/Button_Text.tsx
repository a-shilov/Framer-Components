import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

import { Button_el, Text_el } from "./Button_style";

export function Button_Text({width, height, text, type, size, padding, disabled, color }) {
    return (
        <Frame backgroundColor={"transparent"} width={width} height={height}>
              <Button_el disabled={disabled} type={type} color={color} padding={padding} size={size}>
                  <Text_el size={size}>{text}</Text_el>
              </Button_el>
        </Frame>
    )
}

Button_Text.defaultProps = {
    width: 75,
    height: 34,
};

addPropertyControls(Button_Text, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Sample"
    },
    type: {
        type: ControlType.Enum,
        defaultValue: "primary",
        options: ["primary", "secondary", "outline"],
        optionTitles: ["Primary", "Secondary", "Outline"],
        title: "Type"
    },
    color: {
        type: ControlType.Enum,
        defaultValue: "green",
        options: ["green", "black", "blue", "red"],
        optionTitles: ["Green", "Black", "Blue", "Red"],
        title: "Color"
    },
    size: {
        title: "Size",
        type: ControlType.SegmentedEnum,
        defaultValue: "m",
        options: ["s", "m", "l"],
        optionTitles: ["S", "M", "L"],
    },
    padding: {
        title: "Padding",
        type: ControlType.SegmentedEnum,
        defaultValue: "fixed",
        options: ["fixed", "fluid"],
        optionTitles: ["fixed", "fluid"],
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false
    }
});
