import styled, {css} from "styled-components";

export const StyledRoot = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-column-gap: 24px;
`
export const StyledBody = styled.div`
${({theme, withHeader}) => css`
    margin-top: 80px;
    z-index: 1;
    width: 100vw;
    height: calc(100vh - 80px);
`}`
export const StyledAside = styled.aside`
${({theme}) => css`
    box-shadow: ${theme.shadows[60]};
    background-color: ${theme.palette.neutral.white};
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    padding: 16px;
`}`