import React, {useEffect, useRef, useState} from 'react'
import { ArrowDownIcon } from '../../assets/icons/icons'
import PropTypes from "prop-types"
import { StyledAccordionRoot, StyledAccordionHead, StyledAccordionTitle, StyledAccordionBody } from './styles'
import { useTheme } from 'styled-components'

const Accordion = ({
    children,
    className,
    headClassName,
    bodyClassName,
    animated = true,
    defaultOpen = false,
    title,
    icon,
    ...rest
}) => {
    const [open, setOpen] = useState(defaultOpen)
    const bodyRef = useRef()
    const [bodyHeight, setBodyHeight] = useState(null)
    const theme = useTheme()

    useEffect(() => {
        setBodyHeight(bodyRef.current?.scrollHeight)
    }, [])
    return (
        <StyledAccordionRoot 
            className={className}
            {...rest}
        >
            <StyledAccordionHead
                className={headClassName}
                onClick={() => setOpen(prevState => !prevState)}
            >
                <StyledAccordionTitle>
                    {icon}
                    <h5>
                        {title}
                    </h5>
                </StyledAccordionTitle>
                <ArrowDownIcon
                    width={16}
                    fill={theme.palette.neutral.black}
                    style={{
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                        ...(animated && {transition: "ease-in-out 400ms"})
                    }}
                />
            </StyledAccordionHead>
            <StyledAccordionBody
                className={bodyClassName}
                ref={bodyRef}
                open = {open}
                animated = {animated}
                bodyHeight = {350}
            >
                <div>
                    {children}
                </div>
            </StyledAccordionBody>
        </StyledAccordionRoot>
    )
}

export default Accordion

Accordion.propTypes = {
    className: PropTypes.string,
    headClassName: PropTypes.string,
    bodyClassName: PropTypes.string,
    animated: PropTypes.bool,
    defaultOpen: PropTypes.bool,
    title: PropTypes.string,
    icon: PropTypes.element
}