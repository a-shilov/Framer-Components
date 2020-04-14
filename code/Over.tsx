import * as React from "react"
import { Override, useCycle, Data } from "framer"

const frameState = Data({
    name: "Rad Pozniakov",
});

export function userName(props): Override {
    return {
        text: frameState.name,
    }
}

export function changeUserName(props): Override {
    return {
        setValue: frameState.name,
        getValue(value) {
            frameState.name = value
        },
    };
}

    export function clickButton(props): Override {
        return {
            trigger() {
                console.log('Trigggers');
            }
        }
    }
