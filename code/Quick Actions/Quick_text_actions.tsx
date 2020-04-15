import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

import { Action, Text, ActionGroup } from "./Quick_Actions_style";

export function Quick_text_actions({type, actions, width, height}) {
    return (
        <ActionGroup type={type}>
            {actions && actions.map((item, index) => (
                <Action type={type}><Text>{item}</Text></Action>
            ))}
        </ActionGroup>
    )
}

Quick_text_actions.defaultProps = {
    width: 186,
    height: 40
};

addPropertyControls(Quick_text_actions, {
    type: {
        type: ControlType.Enum,
        defaultValue: "primary",
        options: ["primary", "secondary", "thirdLevel"],
        optionTitles: ["Primary", "Secondary", "Third Level"],
        title: "Type"
    },
    actions: {
        type: ControlType.Array,
        title: "Action text",
        propertyControl: {
            type: ControlType.String
        },
    }
});
