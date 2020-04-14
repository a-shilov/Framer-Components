import styled from "styled-components"

export const Icon_wrapper = styled.div`
     display: flex;
     justify-content: center;
     width: 100%;
     height: 100%;
     svg {
        width: 100%;
        height: 100%;
     }
     ${({color}) => color && `
        svg {
            fill: ${color};
        }
     `}
`;
