import styled from "styled-components"
import Link_model from "../MODELS/Link_Model"

import atom from "../TOKENS/atom"

export const Link = styled.a`
    font-family: ${Link_model.font.fontFamily};
    font-size: ${Link_model.font.fontSize}px;
    line-height: ${Link_model.font.lineHeight}px;

    ${({theme, type, priority}) => theme && type && priority && `
        color: ${Link_model.style[theme][priority][type].default.color}; 
        text-decoration: ${Link_model.style[theme][priority][type].default.textDecoration};
    `}
    
    :hover {
       ${({theme, type, priority, disabled}) => theme && type && priority && `
         color: ${Link_model.style[theme][priority][type].hover.color}; 
         text-decoration: ${disabled ? Link_model.style[theme][priority][type].disabled.textDecoration: Link_model.style[theme][priority][type].hover.textDecoration } ;
       `}
    }
        
    :visited {
       ${({theme, type, priority, disabled}) => theme && type && priority && `
         color: ${Link_model.style[theme][priority][type].visited.color}; 
         text-decoration: ${disabled ? Link_model.style[theme][priority][type].disabled.textDecoration: Link_model.style[theme][priority][type].visited.textDecoration } ;
       `}
    }

     ${({disabled, theme, priority, type}) => disabled && `
        color: ${Link_model.style[theme][priority][type].disabled.color}!important; 
        text-decoration: ${Link_model.style[theme][priority][type].disabled.textDecoration}important;
        cursor: not-allowed;
     `}
`;
