import React, {useEffect} from 'react';
import  { useTheme} from 'styled-components';
import {FAILURE, SUCCESS} from "../../utilities/constants";
import {AlertIcon, CloseIcon, InfoIcon, SuccessIcon} from "../../assets/icons/icons";
import {StyledCloseIconWrapper, StyledContainer, StyledContent, StyledIcon, StyledMessage, StyledRoot, StyledTitle} from "./styles";
const Alert = ({
                   visible,
                   title,
                   message,
                   actionCallback,
                   dismissTimeout,
                   canDismiss = true,
                   dismissCallback,
                   variant = FAILURE, 
                   closeIcon = <CloseIcon />,
                   right,
                   left,
                   top,
                   bottom,

               }) => {
    const theme = useTheme()
    const getVariantStyle = (variant, theme) => {
        switch (variant) {
            case SUCCESS:
                return {
                    color: theme.palette.success.text,
                    backgroundColor: theme.palette.success.background,
                    closeIconColor: theme.palette.success.text,
                    icon: <SuccessIcon width={22} height={22} />,
                }
            case FAILURE:
                return {
                    color: theme.palette.danger.text,
                    backgroundColor: theme.palette.danger.background,
                    closeIconColor: theme.palette.danger.text,
                    icon: <AlertIcon width={22} height={22} />,
                }
            default:
                return {
                    color: theme.palette.warning.text,
                    backgroundColor: theme.palette.warning.background,
                    closeIconColor: theme.palette.warning.text,
                    icon: <InfoIcon width={22} height={22} />,
                }
        }
    }
    const variantStyle = getVariantStyle(variant, theme)


    useEffect(() => {
        if (dismissTimeout && visible) {
            const timeoutId = setTimeout(() => {
                closeHandler()
            }, +dismissTimeout)
            return () => {
                clearTimeout(timeoutId)
            }
        }
    }, [visible])

    const closeHandler = () => {
        dismissCallback && dismissCallback()
    }

    return <>
        <StyledRoot visible={visible} variantStyle={variantStyle} right={right}
                   left={left}
                   top={top}
                   bottom={bottom} >
            <StyledContainer>
                <StyledIcon>{variantStyle.icon}</StyledIcon>
                <StyledContent>
                    {title && <StyledTitle>{title}</StyledTitle>}
                    {message && <StyledMessage>{message}</StyledMessage>}
                    {actionCallback && <span onClick={actionCallback} />}
                </StyledContent>
                {canDismiss && <StyledCloseIconWrapper variantStyle={variantStyle} onClick={closeHandler}> {closeIcon} </StyledCloseIconWrapper>}
            </StyledContainer>
        </StyledRoot>
    </>
};

export default Alert;
