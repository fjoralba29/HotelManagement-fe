import React from 'react';
import {StyledButton, StyledSpan} from "./styles";
import PropTypes from "prop-types";

const Button = ({
                    children,
                    variant = 'filled',
                    type = 'button',
                    collapsed = false,
                    data = 'primary',
                    transparency = 'default',
                    alert,
                    icon,
                    iconPosition = 'right',
                    size = 'large',
                    width = 220,
                    height,
                    disabled = false,
                    isLight = false,
                    onClick,
                    className,
                    ...props
                    
                }) => {
    return <>
        <StyledButton
            variant={variant}
            type={type}
            collapsed={collapsed}
            data={data}
            transparency={transparency}
            alert={alert}
            icon={icon}
            iconPosition={iconPosition}
            size={size}
            width={width}
            height={height}
            isLight={isLight}
            onClick={onClick}
            disabled={disabled}
            className={className} 
            {...props}
        >
            {collapsed ? (
                <StyledSpan className={className}  collapsed={collapsed}  icon={icon} size={size} iconPosition={iconPosition} >{icon}</StyledSpan>
            ) : icon ? (
                iconPosition === 'left' ? (
                    <StyledSpan 
                        icon={icon}
                        collapsed={collapsed}
                        iconPosition={iconPosition}
                        size={size}
                        variant={variant}
                    >
                        {icon}
                        <span>{children}</span>
                    </StyledSpan>
                ) : (
                    <StyledSpan 
                        icon={icon}
                        collapsed={collapsed}
                        iconPosition={iconPosition}
                        size={size}
                        variant={variant}
                    >
                        <span>{children}</span>
                        {icon}
                    </StyledSpan>
                )
            ) : (
                <StyledSpan>{children}</StyledSpan>
            )}
        </StyledButton>
    </>
}

export default Button;

Button.propTypes = {
    data: PropTypes.oneOf(['primary', 'secondary']),
    variant: PropTypes.oneOf(['filled', 'ghost', 'borderless', 'round']),
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    iconPosition: PropTypes.oneOf(['left', 'right']),
    transparency: PropTypes.oneOf(['low', 'medium', 'high']),
}