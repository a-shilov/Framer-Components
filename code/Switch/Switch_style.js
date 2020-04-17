import styled from "styled-components"
import Switch_Model from "../MODELS/Switch_Model"

import atom from "../TOKENS/atom"

export const Switch_Element = styled.div`
  display: flex;
  align-items: center;
  padding: ${3 * atom.size}px ${2 * atom.size}px;
`;

export const Control = styled.div`
  width: ${6 * atom.size}px;
  height: ${4 * atom.size}px;
  position: relative;
  ${({label}) => label &&`
    margin-right: ${4 * atom.size}px;
  `}
      
  ${({color, checked, disabled}) => color && !disabled && `
    div {
        :first-child {
            border-color: ${Switch_Model.style[checked][color].default.border};
            background-color: ${Switch_Model.style[checked][color].default.backgroundColor};
        }    
        :last-child {
            background-color: ${Switch_Model.style[checked][color].default.border};
        }
     }
     
    :hover {
        div {
           :first-child {
            border-color: ${Switch_Model.style[checked][color].hover.border};
            background-color: ${Switch_Model.style[checked][color].hover.backgroundColor};
        }    
            :last-child {
                background-color: ${Switch_Model.style[checked][color].hover.border};
            }
        }
     } 
  `}
  
  ${({disabled, color, checked}) => disabled && `
        div {
        :first-child {
            border-color: ${Switch_Model.style[checked][color].disabled.border};
            background-color: ${Switch_Model.style[checked][color].disabled.backgroundColor};
        }    
        :last-child {
            background-color: ${Switch_Model.style[checked][color].disabled.border};
        }
     }
  `}
`;

export const Baseline = styled.div`
  width: 100%;
  height: ${atom.size}px;
  position: absolute;
  top: calc(${4 * atom.size}px / 2 - ${atom.size / 2}px);
  left: 0;
  transition: all 0.2s ease-out;
`;

export const Rectangle = styled.div`
  width: ${4 * atom.size}px;
  height: ${4 * atom.size}px;
  position: absolute;
  border-radius: 50%;
  border: solid 1px;
  top: calc(${4 * atom.size}px / 2 - ${2 * atom.size}px);
  z-index: 1;
  left: 0;
  transition: all 0.2s ease-out;
  transform: ${({checked}) => checked === 'checked' ? `translateX(${2.1 * atom.size}px)` : "translateX(-1px)"};
  ${({checked}) => checked === 'checked' && `
    border: solid 6px;
  `}
`;

export const Label = styled.div`
    font-family: ${Switch_Model.style.label.font.fontFamily};
    font-size: ${Switch_Model.style.label.font.fontSize}px;
    line-height: ${Switch_Model.style.label.font.lineHeight}px;
    font-weight: ${Switch_Model.style.label.font.fontWeight}px;
    cursor: pointer;
    transition: all 0.2s ease-out;
    color: ${Switch_Model.style.label.default.color};
    ${({disabled}) => disabled && `
        color: ${Switch_Model.style.label.disabled.color};
        cursor: default;
    `};
`;
