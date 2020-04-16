import * as React from "react"

import {Frame, addPropertyControls, ControlType} from "framer"

import { Link } from "./Link_style";

export function Link_component({width, height, disabled, text, url, type, theme, priority}) {
    return (
        <>
            {disabled && (
                <Link
                    type={type}
                    theme={theme}
                    priority={priority}
                    disabled={disabled}>
                    {text}
                </Link>
            )}
            {!disabled && (
                <Link
                    type={type}
                    theme={theme}
                    priority={priority}
                    disabled={disabled}
                    href={url}>
                    {text}
                </Link>
            )}


        </>


    )
}

Link_component.defaultProps = {
    width: 113,
    height: 26,
};

addPropertyControls(Link_component, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Navigation Link"
    },
    url: {
        title: "URL",
        type: ControlType.String,
        defaultValue: "http://google.com"
    },
    priority: {
        type: ControlType.SegmentedEnum,
        defaultValue: "primary",
        options: ["primary", "secondary"],
        optionTitles: ["Primary", "Secondary"],
        title: "Priority"
    },
    type: {
        type: ControlType.SegmentedEnum,
        defaultValue: "underline",
        options: ["underline", "silent"],
        optionTitles: ["Underline", "Silent"],
        title: "Type"
    },
    theme: {
        type: ControlType.SegmentedEnum,
        defaultValue: "day",
        options: ["day", "night"],
        optionTitles: ["Day", "Night"],
        title: "Theme"
    },
    disabled: {
        type: ControlType.Boolean,
        title: "Disabled",
        defaultValue: false,
        enabledTitle: "True",
        disabledTitle: "False",
    },
});
