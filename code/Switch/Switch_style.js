import styled from "styled-components"
import Switch_Model from "../MODELS/Switch_Model"

import atom from "../TOKENS/atom"

export const Switch_Element = styled.div`
  display: flex;
  align-items: center;
  padding: ${3 * atom.size}px ${2 * atom.size}px;
`;

export const Control = styled.div`
  width: ${8 * atom.size}px;
  height: ${4 * atom.size}px;
  position: relative;
  ${({label}) => label &&`
    margin-right: ${4 * atom.size}px;
  `}
`;

export const Baseline = styled.div`
  width: 100%;
  height: ${atom.size}px;
  position: absolute;
  top: calc(${4 * atom.size}px / 2 - ${atom.size / 2}px);
  left: 0;
  transition: all 0.2s ease-out;
  background-color: ${Switch_Model.style.baseline.backgroundColor};
`;

export const Rectangle = styled.div`
  width: ${4 * atom.size}px;
  height: ${4 * atom.size}px;
  position: absolute;
  top: calc(${4 * atom.size}px / 2 - ${2 * atom.size}px);
  z-index: 1;
  left: 0;
  transition: all 0.2s ease-out;
  transform: ${({checked}) => checked === 'checked' ? `translateX(${4.25 * atom.size}px)` : "translateX(0px)"};
  ${({checked}) => checked && `
    background-color: ${Switch_Model.style.rectangle[checked].default};
    :hover {
        background-color: ${Switch_Model.style.rectangle[checked].hover};
    }
  `}
  
   ${({disabled}) => disabled && `
      background-color: ${Switch_Model.style.rectangle.disabled.default};
      :hover {
        background-color: ${Switch_Model.style.rectangle.disabled.hover};
      }
   `}
`;

export const Label = styled.div`
    font-family: ${Switch_Model.font.fontFamily};
    font-size: ${Switch_Model.font.fontSize}px;
    line-height: ${Switch_Model.font.lineHeight}px;
    font-weight: ${Switch_Model.font.fontWeight}px;
    cursor: pointer;
    transition: all 0.2s ease-out;
    color: ${Switch_Model.style.label.default.color};
    ${({disabled}) => disabled && `
        color: ${Switch_Model.style.label.disabled.color};
        cursor: default;
    `};
`;
