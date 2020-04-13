import styled from "styled-components"

export const Icon_wrapper = styled.div`
     ${({color}) => color && `
         svg {
            fill: ${color}; 
         }
     `}
`;
