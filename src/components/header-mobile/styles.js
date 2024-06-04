import styled, {css} from "styled-components"

export const StyledHeaderMobileRoot = styled.header`
${({theme}) => css`
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1030;
    grid-template-columns: 1fr auto;
    padding: 0px ${theme.spacing * 2}px;
    align-items: center;
    justify-content: center;
    height: 80px;
    box-shadow: ${theme.shadows[40]};
    background-color:  ${theme.palette.neutral.white};
    & img {
        max-width: 160px;
    };
    ${theme.mediaQueries.mUp} {
        padding: 0 72px;
    };
`}`

export const StyledHeaderMobileUserInfo = styled.div`
${({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing * 2}px;
    & svg {
        cursor: pointer;
    };
`}`