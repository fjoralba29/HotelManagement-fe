// import PropTypes from 'prop-types'
// import { VerifiedBadgeIcon } from '../../assets/icons/icons'
// import {getInitials} from '../../utilities/helpers'
// import { StyledFormcardRoot, StyledFormcardImage, StyledFormcardContent, StyledFormcardOverline,StyledFormcardText, StyledFormcardDescription, StyledFormcardAction } from './styles'


// const Formcard = ({
//     image,
//     overline,
//     text,
//     description,
//     children,
//     className,
//     color,
//     hasBadge,
//     onClick
// }) => {

//     return (
//         <StyledFormcardRoot className={className} image={image} onClick={onClick}>
//             {!!image ? (
//                 <StyledFormcardImage color={color} image={image}/>
//             ) : (
//                 <StyledFormcardImage color={color} image={image}>{getInitials(text)}</StyledFormcardImage>
//             )}
//             <StyledFormcardContent>
//                 <StyledFormcardOverline image={image}>
//                     {overline}
//                     {hasBadge && <VerifiedBadgeIcon />} 
//                 </StyledFormcardOverline>
//                 <StyledFormcardText>{text}</StyledFormcardText>
//                 {description && (
//                     <StyledFormcardDescription>{description}</StyledFormcardDescription>
//                 )}
//             </StyledFormcardContent>
//             {children && <StyledFormcardAction>{children}</StyledFormcardAction>}
//         </StyledFormcardRoot>
//     )
// }

// export default Formcard

// Formcard.propTypes = {
//     color: PropTypes.oneOf(['primary', 'secondary']),
//     hasBadge: PropTypes.bool,
// }


import PropTypes from 'prop-types';
import { VerifiedBadgeIcon } from '../../assets/icons/icons';
import { getInitials } from '../../utilities/helpers';

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

    const imageBgColor = color ? `bg-${color}-500` : 'bg-gray-200';
    const textColor = image ? 'text-orange-800' : 'text-orange-400';
    const overlineTextStyle = image ? 'uppercase font-semibold text-sm text-orange-800' : 'text-base text-orange-800';

    return (
        <label 
            className={`relative flex items-center p-4 max-w-md shadow-md rounded-lg cursor-pointer m-4 bg-white transition-transform transform hover:scale-105 ${className}`} 
            onClick={onClick}
        >
            {!!image ? (
                <div className={`flex-shrink-0 w-20 h-20 rounded-full ${imageBgColor}`} style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            ) : (
                <div className={`flex items-center justify-center w-20 h-20 rounded-full ${imageBgColor}`}>
                    <span className="text-xl font-semibold text-white">{getInitials(text)}</span>
                </div>
            )}
            <div className="flex flex-col ml-4">
                <div className={`flex items-center ${overlineTextStyle}`}>
                    <span>{overline}</span>
                    {hasBadge && <VerifiedBadgeIcon className="h-4 ml-1 text-blue-500" />}
                </div>
                <div className={`text-lg font-medium ${textColor}`}>{text}</div>
                {description && (
                    <div className="text-sm text-gray-600 mt-1">{description}</div>
                )}
            </div>
            {children && <div className="absolute right-4 top-4">{children}</div>}
        </label>
    );
};

export default Formcard;

Formcard.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary']),
    hasBadge: PropTypes.bool,
};

