import styled, {css} from "styled-components"

export const StyledFormcardRoot = styled.label`
${({image, theme}) => css`
    text-align: left;
    display: grid;
    max-width: 345px;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto;
    grid-template-areas: 'image content action';
    gap: ${theme.spacing * 2}px;
    padding: ${!image ? '16px' : '8px 16px 8px 8px'};
    box-shadow: ${theme.shadows[20]};
    height: ${!image ? 116 : 100}px;
    border-radius: ${theme.spacing * 2}px;
    cursor: pointer;
    margin: 16px auto;
`}`

export const StyledFormcardImage = styled.div`
${({theme, image, color}) => css`
    display: grid;
    align-items: center;
    justify-content: center;
    width: 84px;
    height: 84px;
    grid-area: image;
    background-color: ${color ? theme.palette[color].base.background : theme.palette.neutral[200]};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${image});
    border-radius: 12px;
    & svg {
        padding: ${theme.spacing * 2}px;
        width: 84px;
        height: 84px;
    };
    font-size: 28px;
    font-weight: 500;
    color: ${theme.palette.primary.base.background};
`}`

export const StyledFormcardContent = styled.div`
    display: grid;
    grid-area: content;
    align-content: center;
`

export const StyledFormcardOverline = styled.div`
${({theme,image}) => css`
    display: flex;
    justify-content: start;
    align-items: center;
    ${image ? css`
            ${theme.typography.small};
            color: ${theme.palette.primary.base.background};
            text-transform: uppercase;
            font-weight: 600; 
            ` 
            : 
            css`
            ${theme.typography.paragraph};
            color: ${theme.palette.primary.base.text}
            `
    };
    & svg {
        height: 16px;
        margin-left: 2px;
    };
`}`

export const StyledFormcardText = styled.div`
${({theme}) => css`
    font-size: 12px;
    font-weight: 400;
    color: ${theme.palette.neutral[400]};
`}`

export const StyledFormcardDescription = styled.div`
${({theme}) => css`
    font-size: 12px;
    font-weight: 400;
    color: ${theme.palette.neutral[400]};
`}`

export const StyledFormcardAction =styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-area: action;
`