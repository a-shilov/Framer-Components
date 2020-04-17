import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

import { Switch_Element, Control, Baseline, Rectangle, Label } from "./Switch_style";

export function Switch({width, height, label, checked, disabled, value, color}) {

    const [toogleStatus, changeToogleStatus] = React.useState(checked);

    React.useEffect(() => {
        changeToogleStatus(checked)
    }, [checked]);

    function handleToggle() {
        !disabled && changeToogleStatus(toogleStatus === "inactive" ? "checked" : "inactive")
    }

    return (
        <Frame onTap={handleToggle} width={width} height={height} background={"transparent"}>
            <Switch_Element>
                <Control label={label} color={color} checked={toogleStatus} disabled={disabled}>
                    <Rectangle checked={toogleStatus}></Rectangle>
                    <Baseline></Baseline>
                </Control>
                <Label disabled={disabled}>{label}</Label>
            </Switch_Element>
        </Frame>
    )
}

Switch.defaultProps = {
    width: 200,
    height: 40,
};

addPropertyControls(Switch, {
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "Option",
    },
    color: {
        type: ControlType.Enum,
        defaultValue: "green",
        options: ["green", "black", "blue"],
        optionTitles: ["Green", "Black", "Blue"],
        title: "Color"
    },
    checked: {
        type: ControlType.SegmentedEnum,
        defaultValue: "inactive",
        options: ["checked", "inactive"],
        optionTitles: ["True", "False"],
    },

    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false
    },
});
