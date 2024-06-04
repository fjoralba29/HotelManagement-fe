import PropTypes from 'prop-types'
import { VerifiedBadgeIcon } from '../../assets/icons/icons'
import {getInitials} from '../../utilities/helpers'
import { StyledFormcardRoot, StyledFormcardImage, StyledFormcardContent, StyledFormcardOverline,StyledFormcardText, StyledFormcardDescription, StyledFormcardAction } from './styles'


const Formcard = ({
    image,
    overline,
    text,
    description,
    children,
    className,
    color,
    hasBadge,
    onClick
}) => {

    return (
        <StyledFormcardRoot className={className} image={image} onClick={onClick}>
            {!!image ? (
                <StyledFormcardImage color={color} image={image}/>
            ) : (
                <StyledFormcardImage color={color} image={image}>{getInitials(text)}</StyledFormcardImage>
            )}
            <StyledFormcardContent>
                <StyledFormcardOverline image={image}>
                    {overline}
                    {hasBadge && <VerifiedBadgeIcon />} 
                </StyledFormcardOverline>
                <StyledFormcardText>{text}</StyledFormcardText>
                {description && (
                    <StyledFormcardDescription>{description}</StyledFormcardDescription>
                )}
            </StyledFormcardContent>
            {children && <StyledFormcardAction>{children}</StyledFormcardAction>}
        </StyledFormcardRoot>
    )
}

export default Formcard

Formcard.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary']),
    hasBadge: PropTypes.bool,
}