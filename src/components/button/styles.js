import styled, {css} from "styled-components";

const GhostVariant = ({theme, data, disabled, isLight  }) => css`
    ${StyledButton};
    ${StyledSpan};
    background-color: none !important;
    color: ${theme.palette[data].base.background} !important;
    border: 2px solid ${theme.palette[data][isLight ? 'light' : 'base'].background};
        &:hover {
            background-color: ${theme.palette[data].light.background};
        }
    ${!disabled && css`
        background-color: none;
        color: ${theme.palette[data].base.background};
        `} 
    & svg { 
        fill: ${!disabled && css`${theme.palette[data].dark.background} !important` }
    }
    ${disabled && css`
        border-color: ${theme.palette.neutral[200]};
    `};
    &:hover {
        border-color: ${theme.palette.primary.base.text};
        color: ${theme.palette.primary.base.text} !important;
    };
    & svg {
        fill: ${disabled && css`${theme.palette.neutral[300]} !important`};
    };
`
const BorderlessVariant = ({theme, data, isLight, disabled}) => css`
    ${StyledButton};
    ${StyledSpan};
    background-color: ${isLight ? theme.palette[data][isLight ? 'light' : 'base'].background : 'unset'};
    border: 0;
    color: ${theme.palette[data].base.background};
    ${!disabled && css`
        background-color: ${theme.palette[data].light.background};
        color: ${theme.palette[data].dark.background}
    `} ;
    & svg { 
        fill: ${!disabled && css`${theme.palette[data].dark.background} !important` }
    };
    ${disabled && css`
        border-color: ${theme.palette.neutral[200]};
    `};
    &:hover {
        border: 1px solid !important;
        border-color: ${theme.palette[data].base.background};
    };
    & svg {
        fill: ${disabled && css`${theme.palette[data].base.background} !important`};
    };
`
const RoundVariant = ({theme, disabled, isLight, data}) => css `
    ${StyledButton};
    ${StyledSpan};
    border-radius: 100px;
    color: ${theme.palette.neutral[100]};
    background-color: ${theme.palette[data][isLight ? 'light' : 'base'].background};
    border: 2px solid ${theme.palette[data][isLight ? 'light' : 'base'].background};
    ${disabled && css`
        border-color: ${theme.palette.neutral[100]}
    `}
    &:hover {
        border-color: ${theme.palette.neutral[100]}
    }
    & svg {
        fill: ${disabled && css`${theme.palette.neutral.white} !important`}
    }
`
const FilledVariant = ({theme, disabled, isLight, data}) => css`
    ${StyledButton} ;
    ${StyledSpan};
    color: ${theme.palette.neutral[100]};
    background-color: rgb(235, 165, 80)!important;
    border: 2px solid ${theme.palette[data][isLight ? 'light' : 'base'].background};
    ${disabled && css`
    border-color: ${theme.palette.neutral[100]};`};
    &:hover {
        border-color: ${theme.palette.neutral[100]};
    };
    & svg {
        fill: ${disabled && css`${theme.palette.neutral.white} !important`};
    };
`

export const StyledButton = styled.button`
${({theme,collapsed, size, variant, disabled, data, width}) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${theme.palette[data].dark.background} !important;
  position: relative;
  ${!disabled && css`
    cursor: pointer;
    &:hover {
        background-color: ${theme.palette[data].dark.background};
        border-color: ${theme.palette[data].dark.background};
    }   
  `}

  ${collapsed ? css`
        height: 56px;
        width: 56px;
    ` : css`
        width: ${width}px;
        aspect-ratio: unset;
        height: 48px;
    `}

  ${size === 'small' && css`height: 40px;`}
  ${size === 'medium' && css`height: 48px;`}
  ${size === 'large' && css`height: 56px;`}


  ${variant === 'filled' && FilledVariant}

  ${variant === 'ghost' && GhostVariant}

  ${variant === 'borderless' && BorderlessVariant}

  ${variant === 'round' && RoundVariant}

  ${disabled && css`
        background-color: ${theme.palette.neutral[100]};
        color: ${theme.palette.neutral[200]};
         &:hover {
                background-color:  ${theme.palette.neutral[100]};
                color:  ${theme.palette.neutral[200]};
            },
        `}
        
`}`;
export const StyledSpan = styled.span`
  ${({theme,  icon, collapsed, iconPosition, size}) => css`
    display: grid;
    white-space: nowrap;
    width: 100%;
    text-align: center;
    grid-template-columns: ${
            icon && !collapsed
                    ? `${
                            iconPosition === 'left'
                                    ? '24px min-content'
                                    : 'min-content 24px'
                    }`
                    : '1fr'
    };
    padding: ${theme.spacing * 2}px 0;
    grid-column-gap: ${theme.spacing}px;
    
    ${size === 'small' && css`
        font-size: 16px;
    `};
    ${size === 'medium' && css`
        font-size: 18px;
    `};
    ${size === 'large' && css`
        font-size:20px;
    `};
    
    & svg {
      display: flex;
      align-items: center;
      justify-content: center;
    };
`}`

