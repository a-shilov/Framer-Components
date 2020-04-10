import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

import {
    Input_group,
    Internal_Group,
    Internal_Label,
    Internal_Input,
    Description_element,
} from "./Input_style";

export function Input_Internal_Label({label, placeholder, width, height, value, type, status, theme, description}) {
    const [ inputValue, changeValue ] = React.useState(value);

    React.useEffect(() => {
        changeValue(value)
    }, [value]);

    function change(e){
        changeValue(e.target.value);
    }

    return (
        <Frame backgroundColor={"transparent"} width={width} height={height}>
            <Input_group>
                <Internal_Label status={status}><span>{label}</span>
                    <Internal_Input onChange={change} status={status} placeholder={placeholder} type={type} theme={theme} value={inputValue} disabled={status === 'disabled' && true }/>
                </Internal_Label>
                <Description_element status={status}>
                    <span>{description}</span>
                </Description_element>
            </Input_group>
        </Frame>
    )
}


Input_Internal_Label.defaultProps = {
    width: 400,
    height: 64,
};

addPropertyControls(Input_Internal_Label, {
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "Radio label",
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
    type: {
        title: "Type",
        type: ControlType.SegmentedEnum,
        defaultValue: "text",
        options: ["text", "password"],
        optionTitles: ["Text", "Password"],
    },
    // size: {
    //     title: "Size",
    //     type: ControlType.SegmentedEnum,
    //     defaultValue: "text",
    //     options: ["sm", "md"],
    //     optionTitles: ["Small", "Medium"],
    // },
    // theme: {
    //     title: "Theme",
    //     type: ControlType.SegmentedEnum,
    //     defaultValue: "day",
    //     options: ["day", "night"],
    //     optionTitles: ["Day", "Night"],
    // },
    // icon: {
    //     title: "Icon",
    //     type: ControlType.String,
    //     defaultValue: "Warning",
    // },

    // limitMode: {
    //     type: ControlType.Boolean,
    //     title: "Limit mode",
    //     defaultValue: false,
    // },
    // limit: {
    //     type: ControlType.Number,
    //     title: "Max symbols",
    //     defaultValue: 80,
    //     min: 0,
    //     max: 100,
    //     step: 1,
    //     hidden(props) {
    //         return props.limitMode === false;
    //     }
    // },
});
