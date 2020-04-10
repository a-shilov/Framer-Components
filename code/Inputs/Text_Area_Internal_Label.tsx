import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

import {
    Input_group,
    Internal_Label,
    Description_element,
    Text_Area_Internal
} from "./Input_style";

export function Text_Area_Internal_Label({label, placeholder, width, height, value, status, rows, resize, theme, description, setValue, getValue}) {
    const [ inputValue, changeValue ] = React.useState(setValue ? setValue : value);

    React.useEffect(() => {
        changeValue(setValue ? setValue : value)
    }, [value, setValue]);

    function change(e){
        changeValue(e.target.value);
        getValue && getValue(e.target.value)
    }

    return (
        <Frame backgroundColor={"transparent"} width={width} height={height}>
            <Input_group>
                <Internal_Label status={status}><span>{label}</span>
                    <Text_Area_Internal
                        resizable={resize}
                        onChange={change}
                        status={status}
                        placeholder={placeholder}
                        theme={theme}
                        value={inputValue}
                        rows={rows}
                        disabled={status === 'disabled' && true }>
                    </Text_Area_Internal>
                </Internal_Label>
                <Description_element status={status}>
                    <span>{description}</span>
                </Description_element>
            </Input_group>
        </Frame>
    )
}

Text_Area_Internal_Label.defaultProps = {
    width: 400,
    height: 208,
};

addPropertyControls(Text_Area_Internal_Label, {
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "Label",
    },
    value: {
        title: "Value",
        type: ControlType.String,
        defaultValue: "Value text",
    },
    description: {
        title: "Description",
        type: ControlType.String,
        defaultValue: "Description",
    },
    placeholder: {
        type: ControlType.String,
        title: "Placeholder",
        defaultValue: "Placeholder"
    },
    status: {
        type: ControlType.Enum,
        defaultValue: "default",
        options: ["default", "disabled"],
        optionTitles: ["Default", "Disabled"],
        title: "Status"
    },
    rows: {
        type: ControlType.Number,
        defaultValue: 7,
        min: 1,
        max: 12,
        step: 1,
        displayStepper: true,
    },
    resize: {
        type: ControlType.Boolean,
        title: "Resizable",
        defaultValue: true,
        enabledTitle: "On",
        disabledTitle: "Off",
    },
});
