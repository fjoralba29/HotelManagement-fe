import styled, {css} from "styled-components";

export const StyledAccordionRoot = styled.div`
   ${({theme})=> css`
    width: 100%;
    background: ${theme.palette.neutral.white};
    box-shadow:${theme.shadows[100]};
    border-radius: ${theme.spacing * 3}px;
    padding:${theme.spacing * 3}px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column; 
`}`

export const StyledAccordionHead = styled.div`
  ${({theme}) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
`}`

export const StyledAccordionTitle = styled.div`
${({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${theme.spacing}px;
    & h5 {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    };
    & svg {
        width: 24px;
    };

`}`

export const StyledAccordionBody = styled.div`
${({theme, open, bodyHeight, animated}) => css`
    height : ${open 
                    ? "fit-content" 
                    : 0}px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    ${animated ? css`transition : ease-in-out 400ms`: null};
    & > div {
        padding: ${theme.spacing * 3}px;
        height : ${animated ? bodyHeight : "100%"};
        overflow: auto;
    }
`}`