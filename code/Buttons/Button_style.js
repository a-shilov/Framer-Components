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
        background-color: ${Button_model.style[type][color].default.backgroundColor};
        color: ${Button_model.style[type][color].default.color};
        border-color: ${Button_model.style[type][color].default.borderColor};
        
        &:hover {
            background-color: ${Button_model.style[type][color].hover.backgroundColor};
            color: ${Button_model.style[type][color].hover.color};
        } 
       
       &:active {
            background-color: ${Button_model.style[type][color].active.backgroundColor};
            color: ${Button_model.style[type][color].color}; 
       }
       
       &:disabled {
            background-color: ${Button_model.style[type].disabled.backgroundColor};
            color: ${Button_model.style[type].disabled.color};
            border-color: ${Button_model.style[type].disabled.borderColor};
        }
   `}
`;

export const Text_el = styled.span`
    ${({size}) => size && `
        font-family: ${Button_model.font[size].fontFamily};
        font-size: ${Button_model.font[size].fontSize}px;
        font-weight: ${Button_model.font[size].fontWeight}px;
        line-height: ${Button_model.font[size].lineHeight}px;
    `}
`;
