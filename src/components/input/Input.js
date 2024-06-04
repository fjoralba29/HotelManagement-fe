import {forwardRef} from "react";
import {AlertIconBanner, DoneIcon} from "../../assets/icons/icons";
import PropTypes from "prop-types";
import {
    StyledErrorMessage,
    StyledIcon,
    StyledIcons,
    StyledInputWrapper,
    StyledStatusIcons,
    StyledInput,
    StyledLabel,
    StyledSmall,
    StyledInputRoot
} from "./styles";

const Input = forwardRef(function Input(
    {
        label,
        name,
        type = 'text',
        placeholder,
        helpText,
        onChange,
        onBlur,
        icon,
        iconPosition = 'left',
        rounded,
        iconCallback,
        statusIcon,
        statusIconCallback,
        touched = false,
        errors,
        hasError,
        isSuccess,
        rootClassName,
        inputProps,
        variant = 'normal',
        ...rest
    },
    ref
) {
    return <>
    <StyledInputRoot
            className={rootClassName}
            {...rest}
        >
        <StyledInputWrapper  iconPosition={iconPosition} touched={touched} hasError={!!errors} isSuccess = {!errors && touched}>
            {!!label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
            <StyledIcons iconPosition={iconPosition}>
                {icon && (
                    <StyledIcon
                        {...(iconCallback && { onClick: iconCallback })}
                    >
                        {icon}
                    </StyledIcon>
                )}
            </StyledIcons>
            <StyledInput
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
                {...inputProps}
            />
            <StyledStatusIcons>
                {!!errors ? (
                    <StyledIcon>
                        <AlertIconBanner/>
                    </StyledIcon>
                ) : (
                    touched  && (
                        <StyledIcon>
                            <DoneIcon />
                        </StyledIcon>
                    )
                )}
                {statusIcon && (
                    <StyledIcon
                        {...(statusIconCallback && {
                            onClick: statusIconCallback,
                        })}
                    >
                        {statusIcon}
                    </StyledIcon>
                )}
            </StyledStatusIcons>
        </StyledInputWrapper>
        {errors?.message && (
            <StyledErrorMessage>
                {errors.message}
            </StyledErrorMessage>
        )}
        {helpText && (
            <StyledSmall>
                {helpText}
            </StyledSmall>
        )}
    
    </StyledInputRoot>
    </>
} )





export default Input;

Input.propTypes = {
    className: PropTypes.any,
    label: PropTypes.string,
    type: PropTypes.oneOf(['email', 'password', 'text', 'number']),
    disabled: PropTypes.bool,
    errors: PropTypes.object,
    iconPosition: PropTypes.oneOf(['left', 'right']),
}