import styled from "styled-components"
import Quick_Actions_Model from "../MODELS/Quick_Actions_Model"

import atom from "../TOKENS/atom"

export const ActionGroup = styled.main`
  border-style: solid;
  border-width: ${Quick_Actions_Model.border}px;
  display: flex;
  width: auto!important;
  height: auto!important;
  position: absolute;
  div {
    position: static!important;
    width: auto!important;
    height: auto!important;
  }
  ${({type}) => type && `
      background-color: ${Quick_Actions_Model.style[type].default.backgroundColor};
      border-color: ${Quick_Actions_Model.style[type].default.borderColor};
      p {
        color: ${Quick_Actions_Model.style[type].default.color};
      }
      svg {
        fill: ${Quick_Actions_Model.style[type].default.color};
      }
  `}
`;

export const Action = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  ${({type}) => type && `
      color: ${Quick_Actions_Model.style[type].default.color};
      background-color: ${Quick_Actions_Model.style[type].default.backgroundColor};
      border-color: ${Quick_Actions_Model.style[type].default.borderColor};
  `}
  :hover {
    ${({type}) => type && `
      color: ${Quick_Actions_Model.style[type].hover.color};
      background-color: ${Quick_Actions_Model.style[type].hover.backgroundColor};
      border-color: ${Quick_Actions_Model.style[type].hover.borderColor};
    `}
  }
  :active {
    ${({type}) => type && `
      color: ${Quick_Actions_Model.style[type].active.color};
      background-color: ${Quick_Actions_Model.style[type].active.backgroundColor};
      border-color: ${Quick_Actions_Model.style[type].active.borderColor};
    `}  
   }
   :disabled {
      cursor: not-allowed;
      ${({type}) => type && `
        color: ${Quick_Actions_Model.style[type].disable.color};
      background-color: ${Quick_Actions_Model.style[type].disable.backgroundColor};
      border-color: ${Quick_Actions_Model.style[type].disable.borderColor};
    `}
    }
  }
`;

export const Icon = styled.p` 
  width: ${9.5 * atom.size}px; 
  height: ${9.5 * atom.size}px;
  padding: ${Quick_Actions_Model.icon.padding}px ${Quick_Actions_Model.icon.padding}px;
`;

export const Text = styled.p`
  color: inherit;
  font-size: ${Quick_Actions_Model.text.fontSize}px;
  line-height: ${Quick_Actions_Model.text.lineHeight}px;
  font-weight: ${Quick_Actions_Model.text.fontWeight}; 
  font-family: ${Quick_Actions_Model.text.fontFamily};
  padding-top: ${Quick_Actions_Model.offset.paddingTop}px;
  padding-right: ${Quick_Actions_Model.offset.paddingRight}px;
  padding-bottom: ${Quick_Actions_Model.offset.paddingBottom}px;
  padding-left: ${Quick_Actions_Model.offset.paddingLeft}px;
`;
