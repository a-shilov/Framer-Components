import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

import { Action, Icon, ActionGroup} from "./Quick_Actions_style";

import { Icon_component } from "../Icons/Icon_component";


export function Quick_icon_actions({type, actions, width, height}) {
    return (
        <ActionGroup type={type}>
            {actions && actions.map((item, index) => (
                <Action type={type}>
                    <Icon>
                        <Icon_component type={"alone"} color={""} icon={item}></Icon_component>
                    </Icon>
                </Action>
            ))}
        </ActionGroup>
    )
}

Quick_icon_actions.defaultProps = {
    width: 57,
    height: 40
};

addPropertyControls(Quick_icon_actions, {
    type: {
        type: ControlType.Enum,
        defaultValue: "primary",
        options: ["primary", "secondary", "thirdLevel"],
        optionTitles: ["Primary", "Secondary", "Third Level"],
        title: "Type"
    },
    actions: {
        type: ControlType.Array,
        title: "Icons",
        propertyControl: {
            type: ControlType.String
        },
    }
});
