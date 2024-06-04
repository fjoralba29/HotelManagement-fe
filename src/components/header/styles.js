import styled, {css} from "styled-components"

export const StyledHeaderRoot = styled.header`
${({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0; 
    right: 0;
    z-index: 1030;
    grid-template-columns: 1fr auto;
    padding: 0 ${theme.spacing * 2}px;
    height: 80px;
    box-shadow: ${theme.shadows[20]};
    background-color: ${theme.palette.neutral.white};
    & img {
        max-width: 160px;
    };
    ${theme.mediaQueries.mUp} {
        padding: 0 72px;
    };
`}`

export const StyledHeaderLogo = styled.div`
${({theme}) => css`
    cursor: pointer;
    color: ${theme.palette.primary.text};
    font-size: 3rem;
    font-weight: 700;
    > a > h3 {
        font-size: 32px;
        color: rgb(235, 165, 80);
    }
`}`
export const LoginLink = styled.span`
    font-weight: 600;
    > a {
        color: rgb(235, 165, 80);
    }
`
export const StyledHeaderInfo = styled.div`
${({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing * 2}px;
    & svg {
        cursor: pointer;
    };
`}`

export const StyledHeaderUserInfo = styled.div`
${({theme}) => css`
    background-color: ${theme.palette.neutral[200]};
    padding: 6px 12px 6px 8px;
    border-radius: 100px;
    display: flex;
    gap: ${theme.spacing}px;
    align-items: center;
    color: ${theme.palette.neutral[500]};
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
`}`