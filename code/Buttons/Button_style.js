import styled from "styled-components"
import Button_model from "../MODELS/Button_Model"

import atom from "../TOKENS/atom"

export const Button_el = styled.button`
   outline: none;
   width: ${({padding}) => padding === 'fluid'? "100%" : "auto"};
   transition: all 0.2s;   
    
   ${({size}) => size && `
        border: solid ${Button_model.border[size]}px;
        padding-top: ${Button_model.offset[size].paddingTop}px;
        padding-right: ${Button_model.offset[size].paddingRight}px;
        padding-bottom: ${Button_model.offset[size].paddingBottom}px;
        padding-left: ${Button_model.offset[size].paddingLeft}px;
    `}
   
   ${({color, type}) => color && type && `
        background-color: ${Button_model.style[color][type].default.backgroundColor};
        color: ${Button_model.style[color][type].default.color};
        border-color: ${Button_model.style[color][type].default.borderColor};
        svg {
           fill: ${Button_model.style[color][type].default.color};
        }
       
        &:hover {
            background-color: ${Button_model.style[color][type].hover.backgroundColor};
            color: ${Button_model.style[color][type].hover.color};
        } 
       
       &:active {
            background-color: ${Button_model.style[color][type].active.backgroundColor};
            color: ${Button_model.style[color][type].color}; 
       }
       
       &:disabled {
            background-color: ${Button_model.style[color][type].disabled.backgroundColor};
            color: ${Button_model.style[color][type].disabled.color};
            border-color: ${Button_model.style[color][type].disabled.borderColor};
            svg {
                fill: ${Button_model.style[color][type].disabled.color};
            }
        }
   `}
`;


export const Button_with_icon = styled(Button_el)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Icon_container = styled.div`
     ${({size}) => size && `
        width: ${Button_model.icon[size].width}px;
        height: ${Button_model.icon[size].height}px;
        margin-left: ${Button_model.icon[size].marginLeft}px;
    `};
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 100%;
      height: 100%;
    }
`;

export const Text_el = styled.span`
    ${({size}) => size && `
        font-family: ${Button_model.font[size].fontFamily};
        font-size: ${Button_model.font[size].fontSize}px;
        font-weight: ${Button_model.font[size].fontWeight}px;
        line-height: ${Button_model.font[size].lineHeight}px;
    `}
`;
