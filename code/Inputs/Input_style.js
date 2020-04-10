import styled from "styled-components"
import Input_model from "../MODELS/Input_Model"

import atom from "../TOKENS/atom"

export const Input_group = styled.div`
    width: 100%;
    position: relative;
`;

export const Label = styled.label`
   display: block;
   font-family: ${Input_model.font.label.fontFamily};
   letter-spacing: ${Input_model.font.label.letterSpacing}px;
   font-size: ${Input_model.font.label.fontSize}px; 
   font-weight: ${Input_model.font.label.fontWeight};
   line-height: ${Input_model.font.label.lineHeight}px;
   cursor: ${({status}) => status === 'disabled' ? 'default' : 'pointer'}; 
`;

export const Internal_Label = styled(Label)`
    span {
        display: block;
        position: absolute;
        top: ${atom.size * 2.75}px;
        left: ${atom.size * 4.5}px;
        ${({status}) => status && `
            color: ${Input_model.style.label.internal[status].color}; 
        `}
      }
`;


export const ExternalLabel = styled(Label)`
    &:hover {
        span {
          ${({status}) => status && `
               color: ${Input_model.style.label.external[status].hover.color};   
          `}
        }
    }
    span {
      ${({status}) => status && `
           color: ${Input_model.style.label.external[status].color}; 
      `}
    }
`;


export const Input = styled.input` 
   display: block;
   width: 100%;
   outline: none;
   font-size: ${Input_model.font.input.fontSize}px; 
   font-family: ${Input_model.font.input.fontFamily};
   letter-spacing: ${Input_model.font.input.letterSpacing}px;   
   font-weight: ${Input_model.font.input.fontWeight};
   line-height: ${Input_model.font.input.lineHeight}px;
   border: solid 2px;
   ${({status}) => status && `
      caret-color: ${Input_model.style.input[status].сaretColor};
      background-color: ${Input_model.style.input[status].backgroundColor};
      color: ${Input_model.style.input[status].color};
      border-color: ${Input_model.style.input[status].borderColor};     
      &:focus {
          border-color: ${Input_model.style.input[status].focus.borderColor};  
      }
      &::placeholder {
        color: ${Input_model.style.input[status].placeholderColor};
      }
   `}
`;

export const External_Input = styled(Input)`
   margin-top: ${atom.size * 2}px;
   padding: ${atom.size * 2}px ${atom.size * 4}px;
`;

export const Internal_Input = styled(Input)`
    padding: ${atom.size * 7}px ${atom.size * 4}px ${atom.size * 2}px;
`;


export const Internal_Group = styled.div`
  border: solid 2px #ccc;
  padding: ${atom.size * 2}px ${atom.size * 4}px;
  ${({status}) => status && `
      background-color: ${Input_model.style.input[status].backgroundColor}; 
   `}
`;


export const Description_element = styled.p`
   justify-content: space-between;
   width: 100%;
   display: flex;
   transition: all 0.2s;
   margin-top: ${atom.size}px;
   line-height: ${Input_model.font.description.lineHeight}px;
   font-size: ${Input_model.font.description.fontSize}px;
   letter-spacing: ${Input_model.font.description.letterSpacing}px;
   font-weight: ${Input_model.font.description.fontWeight};
   font-family: ${Input_model.font.description.fontFamily};
     
   ${({status}) => status && `
      color: ${Input_model.style.description[status].color}
  `} 
`;
