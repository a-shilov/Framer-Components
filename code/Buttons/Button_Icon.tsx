import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

import { Button_with_icon, Text_el, Icon_container} from "./Button_style";

import { Icon_component } from "../Icons/Icon_component";

export function Button_Icon({width, height, text, type, size, padding, disabled, color, icon, trigger}) {

    function buttonClicked(){
        trigger && trigger()
    }

    return (
        <Frame backgroundColor={"transparent"} width={width} height={height}>
            <Button_with_icon onClick={() => buttonClicked()} disabled={disabled} type={type} color={color} padding={padding} size={size}>
                <Text_el size={size}>{text}</Text_el>
                <Icon_container size={size}>
                    <Icon_component icon={icon} type={"nested"} color={""}></Icon_component>
                </Icon_container>
            </Button_with_icon>
        </Frame>
    )
}

Button_Icon.defaultProps = {
    width: 75,
    height: 34,
};

addPropertyControls(Button_Icon, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Sample"
    },
    icon: {
        title: "Icon",
        type: ControlType.String,
        defaultValue: "Remove"
    },
    color: {
        type: ControlType.Enum,
        defaultValue: "green",
        options: ["green", "black", "blue", "red"],
        optionTitles: ["Green", "Black", "Blue", "Red"],
        title: "Color"
    },
    type: {
        type: ControlType.Enum,
        defaultValue: "primary",
        options: ["primary", "secondary", "thirdLevel", "fourLevel", "silent"],
        optionTitles: ["Primary", "Secondary", "Third Level", "Four Level", "Silent"],
        title: "Type"
    },
    size: {
        title: "Size",
        type: ControlType.SegmentedEnum,
        defaultValue: "m",
        options: [ "m", "l"],
        optionTitles: ["M", "L"],
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
