import * as React from "react"
import {Frame, addPropertyControls, ControlType} from "framer"

import * as icons from "./icons.json"

import { Icon_wrapper } from "./Icon_style_component";

export function Icon_component({icon, color, type, width, height}) {
    return (
        <>
            {type && type === 'alone' && (
                <Frame width={width} height={height} backgroundColor={"transparent"}>
                    {icons[icon] && (
                        <Icon_wrapper color={ color } dangerouslySetInnerHTML={{ __html: icons[icon] }}></Icon_wrapper>
                    )}
                </Frame>
            )}

            {type && type === 'nested' && (
                <div>
                    {icons[icon] && (
                        <Icon_wrapper color={ color } dangerouslySetInnerHTML={{ __html: icons[icon] }}></Icon_wrapper>
                    )}
                </div>
            )}
        </>
    )
}

Icon_component.defaultProps = {
    width: 32,
    height: 32,
};

addPropertyControls(Icon_component, {
    type: {
        type: ControlType.SegmentedEnum,
        defaultValue: "alone",
        options: ["alone", "nested"],
        optionTitles: ["Alone", "Nested"],
        title: "Type"
    },
    color: {
        type: ControlType.Color,
        defaultValue: "#000",
        title: "Color"
    },
    icon: {
        title: "Icon",
        type: ControlType.String,
        defaultValue: "Icon_Backup_Complete"
    }
});
