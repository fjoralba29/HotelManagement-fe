import { useTheme } from "styled-components"
export const SuccessIcon = ({
                                stroke = '#18A957',
                                fill = 'none',
                                ...props
                            }) => (
                                
    <svg {...props} viewBox="0 0 24 24" height={'24px'} width={"24px"}>
        <circle
            cx="12"
            cy="12"
            r="11"
            fill={fill}
            stroke={stroke}
            strokeWidth="2"
        />

        <path
            stroke={stroke}
            fill={fill}
            strokeLinecap="round"
            strokeWidth="2"
            d="M9 11.95l2.121 2.121 4.243-4.243"
        />
    </svg>
)


export const CloseIcon = ({ stroke, fill = 'none', ...props }) => {
    const theme = useTheme();
    stroke = stroke ?? theme.palette.neutral.white;

    return (
    <svg {...props} viewBox="0 0 24 26" height={'24px'} width={"24px"}>
        <path
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 6l12.774 12.774M6 18.774L18.774 6"
        />
    </svg>
    )
}


export const AlertIcon = ({ stroke = '#DF1642', fill = 'none', ...props }) => (
    <svg {...props} viewBox="0 0 24 24" height={'24px'} width={"24px"}>
        <circle
            cx="12"
            cy="12"
            r="11"
            stroke={stroke}
            fill={fill}
            strokeWidth="2"
        />
        <path
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 7v5M12 16v.5"
        />
    </svg>
)


export const InfoIcon = ({ stroke, fill = 'none', ...props }) =>{
    const theme = useTheme();
    stroke = stroke ?? theme.palette.warning.text;

return (
    <svg {...props} viewBox="0 0 24 24" height={"24px"} width={"24px"}>
        <path
            stroke={stroke}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 16v-4M12 8h.01"
        />
    </svg>
)}

export const AlertIconBanner = (props = {}) => <svg {...props} viewBox="0 0 24 24" height={'24px'}
>
    <circle cx="12" cy="12" r="12" fill="#fff"/>
    <path
        fill="#ED746F"
        d="M12.606 4.618c-.237-.443-.975-.443-1.212 0l-6.171 11.53a.672.672 0 00.268.907c.103.058.22.088.338.088h12.342a.69.69 0 00.588-.328.671.671 0 00.018-.667l-6.17-11.53zm.08 10.49h-1.371v-1.356h1.371v1.356zm-1.371-2.712V9.005h1.371v3.39h-1.371z"
    />
</svg>

export const DoneIcon = (props = {}) => <svg viewBox="0 0 50 50" height="24px" width="24px" {...props} fill="#18A957">
    <path d="M18.9 35.7 7.7 24.5 9.85 22.35 18.9 31.4 38.1 12.2 40.25 14.35Z"/>
</svg>

export const ArrowDownIcon = ({
    wrapperProps = {},
    fill,
    ...rest
}) =>{
    const theme = useTheme();
    fill = fill ?? theme.palette.neutral.white;

    return(
    <div {...wrapperProps}>
        <svg viewBox="0 0 8 4" fill="none" {...rest}>
            <path
                d="M3.99373 3.99882C3.86044 3.99905 3.73128 3.95838 3.62865 3.88388L0.206069 1.38517C0.0895779 1.30034 0.0163207 1.17845 0.00241378 1.04631C-0.0114932 0.914161 0.0350893 0.782588 0.131913 0.680533C0.228737 0.578477 0.367872 0.514298 0.518708 0.502115C0.669545 0.489931 0.819728 0.530741 0.93622 0.615566L3.99373 2.85441L7.05123 0.695525C7.10958 0.654014 7.17672 0.623014 7.24879 0.604308C7.32085 0.585601 7.39643 0.579558 7.47117 0.586524C7.54591 0.59349 7.61835 0.613328 7.68431 0.644898C7.75027 0.676469 7.80847 0.719149 7.85554 0.770486C7.90778 0.82187 7.94734 0.882152 7.97175 0.947555C7.99616 1.01296 8.00489 1.08207 7.9974 1.15057C7.9899 1.21907 7.96634 1.28547 7.92818 1.34561C7.89003 1.40576 7.83811 1.45836 7.77568 1.50011L4.3531 3.91386C4.24752 3.97659 4.12099 4.0065 3.99373 3.99882Z"
                fill={fill}
            />
        </svg>
    </div>
)}
export const BackArrow = (props = {}) => <svg width="21" {...props} height="21" viewBox="0 0 21 21" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
    <path d="M10.0518 14.2812L6.17578 10.375L10.0518 6.46875" stroke="#5F616D" strokeWidth="1.5625"
          strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.71436 10.375H14.5742" stroke="#5F616D" strokeWidth="1.5625" strokeLinecap="round"
          strokeLinejoin="round"/>
    <path
        d="M19.75 10.375C19.75 5.19922 15.5508 1 10.375 1C5.19922 1 1 5.19922 1 10.375C1 15.5508 5.19922 19.75 10.375 19.75C15.5508 19.75 19.75 15.5508 19.75 10.375Z"
        stroke="#5F616D" strokeWidth="1.5625" strokeMiterlimit="10"/>
</svg>

export const FacebookIcon = ({...props}) => <svg {...props} width="27" height="27" viewBox="0 0 27 27" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
    <path
        d="M25.92 0H1.08C0.482625 0 0 0.482625 0 1.08V25.92C0 26.5174 0.482625 27 1.08 27H25.92C26.5174 27 27 26.5174 27 25.92V1.08C27 0.482625 26.5174 0 25.92 0ZM22.8015 7.88063H20.6449C18.954 7.88063 18.6266 8.68388 18.6266 9.86512V12.4672H22.6631L22.1366 16.5409H18.6266V27H14.418V16.5443H10.8979V12.4672H14.418V9.4635C14.418 5.97712 16.5476 4.077 19.6594 4.077C21.1511 4.077 22.4303 4.18838 22.8049 4.239V7.88063H22.8015Z"
        fill="#4553D2"/>
</svg>

export const YoutubeIcon = ({...props}) => <svg {...props} width="31" height="22" viewBox="0 0 31 22" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
    <path
        d="M30.353 3.32058C30.1765 2.67758 29.8305 2.0912 29.3497 1.62013C28.8688 1.14906 28.2698 0.80982 27.6128 0.63636C25.1944 1.29124e-07 15.5 0 15.5 0C15.5 0 5.80558 -1.29124e-07 3.38716 0.632975C2.72987 0.805872 2.13064 1.14493 1.64966 1.61608C1.16868 2.08724 0.822881 2.67392 0.646986 3.3172C-1.31982e-07 5.68662 0 10.6286 0 10.6286C0 10.6286 -1.31982e-07 15.5705 0.646986 17.9366C1.00335 19.2431 2.05513 20.2721 3.38716 20.6208C5.80558 21.2571 15.5 21.2571 15.5 21.2571C15.5 21.2571 25.1944 21.2571 27.6128 20.6208C28.9483 20.2721 29.9967 19.2431 30.353 17.9366C31 15.5705 31 10.6286 31 10.6286C31 10.6286 31 5.68662 30.353 3.32058ZM12.4208 15.1643V6.09281L20.4475 10.5947L12.4208 15.1643Z"
        fill="black"/>
</svg>
export const ArrowIcon = (props = {}) => <svg {...props} width="10" height="5" viewBox="0 0 10 5" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
    <path
        d="M5.48291 4.50293C5.33263 4.50322 5.187 4.45088 5.07128 4.355L1.21232 1.1392C1.08098 1.03003 0.998382 0.873155 0.982702 0.703087C0.967022 0.533019 1.01954 0.363687 1.12871 0.232343C1.23788 0.100999 1.39476 0.0184016 1.56482 0.00272154C1.73489 -0.0129585 1.90422 0.0395628 2.03557 0.148732L5.48291 3.03009L8.93024 0.251638C8.99603 0.198213 9.07173 0.158317 9.15299 0.134242C9.23424 0.110168 9.31946 0.10239 9.40373 0.111355C9.488 0.12032 9.56967 0.145851 9.64404 0.186482C9.71842 0.227113 9.78403 0.282042 9.8371 0.348112C9.896 0.414242 9.94061 0.491825 9.96813 0.575997C9.99566 0.66017 10.0055 0.749119 9.99704 0.837273C9.98859 0.925427 9.96202 1.01088 9.91901 1.08829C9.87599 1.1657 9.81745 1.23339 9.74706 1.28713L5.8881 4.39359C5.76906 4.47432 5.6264 4.51281 5.48291 4.50293Z"
        fill="#555555"/>
</svg>

export const BackArrowIcon = ({...props}) => <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                  xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd"
          d="M1 8C1 9.85652 1.7375 11.637 3.05025 12.9497C4.36301 14.2625 6.14348 15 8 15C9.85652 15 11.637 14.2625 12.9497 12.9497C14.2625 11.637 15 9.85652 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1C6.14348 1 4.36301 1.7375 3.05025 3.05025C1.7375 4.36301 1 6.14348 1 8ZM16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM11.5 7.5C11.6326 7.5 11.7598 7.55268 11.8536 7.64645C11.9473 7.74021 12 7.86739 12 8C12 8.13261 11.9473 8.25979 11.8536 8.35355C11.7598 8.44732 11.6326 8.5 11.5 8.5H5.707L7.854 10.646C7.90049 10.6925 7.93736 10.7477 7.96252 10.8084C7.98768 10.8692 8.00063 10.9343 8.00063 11C8.00063 11.0657 7.98768 11.1308 7.96252 11.1916C7.93736 11.2523 7.90049 11.3075 7.854 11.354C7.80751 11.4005 7.75232 11.4374 7.69158 11.4625C7.63084 11.4877 7.56574 11.5006 7.5 11.5006C7.43426 11.5006 7.36916 11.4877 7.30842 11.4625C7.24768 11.4374 7.19249 11.4005 7.146 11.354L4.146 8.354C4.09944 8.30755 4.06249 8.25238 4.03729 8.19163C4.01208 8.13089 3.99911 8.06577 3.99911 8C3.99911 7.93423 4.01208 7.86911 4.03729 7.80837C4.06249 7.74762 4.09944 7.69245 4.146 7.646L7.146 4.646C7.23989 4.55211 7.36722 4.49937 7.5 4.49937C7.63278 4.49937 7.76011 4.55211 7.854 4.646C7.94789 4.73989 8.00063 4.86722 8.00063 5C8.00063 5.13278 7.94789 5.26011 7.854 5.354L5.707 7.5H11.5Z"
          fill="#323662"/>
</svg>

export const TwitchIcon = ({...props}) => <svg {...props} width="27" height="27" viewBox="0 0 27 27" fill="none"
                                               xmlns="http://www.w3.org/2000/svg">
    <path
        d="M6.50869 0L1.6875 4.82119V22.1788H7.47394V27L12.2951 22.1788H16.1494L24.8299 13.5V0H6.50869ZM22.9011 12.5364L19.0451 16.3924H15.1875L11.8125 19.7674V16.3924H7.47394V1.92881H22.9011V12.5364Z"
        fill="black"/>
    <path d="M20.0087 5.30322H18.0799V11.0863H20.0087V5.30322ZM14.7049 5.30322H12.7761V11.0863H14.7049V5.30322Z"
          fill="black"/>
</svg>

export const ExitIcon = ({fill,...props}) =>{
    const theme = useTheme ();
    fill = fill ?? theme.palette.neutral.white;
    return (
    <svg {...props} enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill={fill}>
        <g>
            <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
        <g>
            <path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/>
        </g>
    </svg>
    )
}

export const SettingsIcon = ({
    wrapperProps = {},
    fill ,
    ...rest
}) => {
    const theme = useTheme();
    fill = fill ?? theme.palette.neutral.white;
    return(
    <div {...wrapperProps}>
        <svg viewBox="0 0 24 24" fill={fill} {...rest}>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        </svg>
    </div>
)}
export const MenuIcon = ({
    wrapperProps = {},
    fill ,
    ...rest
}) => {
    const theme = useTheme();
    fill = fill ?? theme.palette.neutral.black;

    return (
    <div {...wrapperProps}>
        <svg
            viewBox="0 0 48 48"
            fill={fill}
            {...rest}
        >
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
    </div>
)}


export const ClockIcon = ({
    wrapperProps = {},
    fill ,
    ...rest
}) => {
    const theme = useTheme();
    fill = fill ?? theme.palette.neutral.white;
    return(
    <div {...wrapperProps}>
        <svg viewBox="0 0 24 24" fill={fill} {...rest}>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
    </div>
)}

export const InstagramIcon = ({
    wrapperProps = {},
    fill ,
    ...rest
}) => {
    const theme = useTheme();
    fill = fill ?? theme.palette.neutral.white;
    return(
    <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/></svg>
    </>
)}

export const TwitterIcon = ({
    wrapperProps = {},
    fill ,
    ...rest
}) =>{
    const theme = useTheme();
    fill = fill ?? theme.palette.neutral.white;
    return (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"/></svg>
    </>
)}

export const SnapchatIcon = ({
    wrapperProps = {},
    fill ,
    ...rest
}) => { 
    const theme = useTheme();
    fill = fill ?? theme.palette.neutral.white;
    return (
    <div {...wrapperProps}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill = {fill}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-1.141 17.115c-.065.087-.117.457-.203.749-.098.337-.407.299-.75.232-.499-.097-.945-.125-1.464-.039-.898.149-1.83 1.477-3.393 1.477-1.682 0-2.557-1.321-3.49-1.477-.951-.158-1.497.096-1.826.096-.252 0-.35-.154-.388-.282-.084-.287-.138-.664-.204-.754-.646-.1-2.103-.354-2.141-1.005-.009-.169.11-.318.277-.346 2.139-.352 3.501-2.765 3.279-3.287-.158-.372-.84-.505-1.127-.619-.74-.293-.843-.63-.799-.86.061-.32.451-.535.778-.535.314 0 .869.42 1.301.181-.065-1.123-.223-2.728.177-3.624.763-1.71 2.434-2.555 4.105-2.555 1.683 0 3.366.858 4.123 2.554.399.895.242 2.493.178 3.625.408.225.913-.191 1.265-.191.345 0 .814.233.822.623.006.305-.266.568-.809.782-.292.115-.969.248-1.127.619-.227.535 1.177 2.941 3.279 3.287.167.027.287.176.277.346-.036.65-1.5.903-2.14 1.003z"/></svg>
    </div>
)}

export const TikTokIcon = ({
    wrapperProps = {},
    fill,
    ...rest
}) =>{
    const theme = useTheme();
    fill = fill ?? theme.palette.neutral.white
    return (
    <>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
    </>
)}

export const GoogleIcon = ({
    wrapperProps = {},
    fill,
    ...rest
}) => {
    const theme = useTheme();
    fill = fill ?? theme.palette.neutral.white
    return (
    <>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
    </>
)}

export const InfoCircle = ({props = {}, fill}) => {
    const theme = useTheme();
    fill = fill ?? theme.palette.neutral.black;

return (<svg width="31" {...props} height="30" viewBox="0 0 31 30"
                                               xmlns="http://www.w3.org/2000/svg" fill={fill}>
    <path
        d="M15.5 1.875C8.25195 1.875 2.375 7.75195 2.375 15C2.375 22.248 8.25195 28.125 15.5 28.125C22.748 28.125 28.625 22.248 28.625 15C28.625 7.75195 22.748 1.875 15.5 1.875ZM15.5 25.8984C9.48242 25.8984 4.60156 21.0176 4.60156 15C4.60156 8.98242 9.48242 4.10156 15.5 4.10156C21.5176 4.10156 26.3984 8.98242 26.3984 15C26.3984 21.0176 21.5176 25.8984 15.5 25.8984Z"
    />
    <path
        d="M14.0938 9.84375C14.0938 10.2167 14.2419 10.5744 14.5056 10.8381C14.7694 11.1018 15.127 11.25 15.5 11.25C15.873 11.25 16.2306 11.1018 16.4944 10.8381C16.7581 10.5744 16.9062 10.2167 16.9062 9.84375C16.9062 9.47079 16.7581 9.1131 16.4944 8.84938C16.2306 8.58566 15.873 8.4375 15.5 8.4375C15.127 8.4375 14.7694 8.58566 14.5056 8.84938C14.2419 9.1131 14.0938 9.47079 14.0938 9.84375ZM16.2031 13.125H14.7969C14.668 13.125 14.5625 13.2305 14.5625 13.3594V21.3281C14.5625 21.457 14.668 21.5625 14.7969 21.5625H16.2031C16.332 21.5625 16.4375 21.457 16.4375 21.3281V13.3594C16.4375 13.2305 16.332 13.125 16.2031 13.125Z"
    />
</svg>)}

export const ChatIcon = (props = {}) => <svg {...props} viewBox="0 0 35 32"
>
    <path
        fill="#fff"
        d="M11.258 14.563a2.08 2.08 0 11-4.16 0 2.08 2.08 0 014.16 0zm8.322 0a2.08 2.08 0 11-4.161 0 2.08 2.08 0 014.161 0zm6.241 2.08a2.08 2.08 0 100-4.161 2.08 2.08 0 000 4.161z"
    />
    <path
        fill="#fff"
        d="M5.36 30.796l.042-.008c3.807-.755 6.133-1.752 7.215-2.3a18.85 18.85 0 004.883.637c9.19 0 16.643-6.52 16.643-14.562C34.143 6.52 26.69 0 17.5 0 8.308 0 .856 6.52.856 14.563c0 3.661 1.546 7.01 4.099 9.57a21.713 21.713 0 01-1.09 4.822l-.007.023a22.29 22.29 0 01-.507 1.325c-.165.387.154.82.568.753.482-.079.962-.165 1.442-.26zm1.665-6.466a2.08 2.08 0 00-.597-1.666c-2.205-2.214-3.491-5.047-3.491-8.101 0-6.64 6.25-12.483 14.563-12.483s14.562 5.842 14.562 12.483c0 6.643-6.25 12.482-14.562 12.482a16.768 16.768 0 01-4.344-.566 2.08 2.08 0 00-1.48.154c-.805.408-2.58 1.186-5.48 1.858.405-1.358.683-2.751.829-4.16z"
    />
</svg>

export const EyeOpenIcon = ({
    wrapperProps = {},
    fill ,
    ...rest
}) => {
    const theme = useTheme();
    fill = fill ?? theme.palette.neutral[30];
return(
    <div {...wrapperProps}>
        <svg
            viewBox="0 0 48 48"
            fill={fill}
        
            {...rest}
        >
            <path d="M24 31.5Q27.55 31.5 30.025 29.025Q32.5 26.55 32.5 23Q32.5 19.45 30.025 16.975Q27.55 14.5 24 14.5Q20.45 14.5 17.975 16.975Q15.5 19.45 15.5 23Q15.5 26.55 17.975 29.025Q20.45 31.5 24 31.5ZM24 28.6Q21.65 28.6 20.025 26.975Q18.4 25.35 18.4 23Q18.4 20.65 20.025 19.025Q21.65 17.4 24 17.4Q26.35 17.4 27.975 19.025Q29.6 20.65 29.6 23Q29.6 25.35 27.975 26.975Q26.35 28.6 24 28.6ZM24 38Q16.7 38 10.8 33.85Q4.9 29.7 2 23Q4.9 16.3 10.8 12.15Q16.7 8 24 8Q31.3 8 37.2 12.15Q43.1 16.3 46 23Q43.1 29.7 37.2 33.85Q31.3 38 24 38ZM24 23Q24 23 24 23Q24 23 24 23Q24 23 24 23Q24 23 24 23Q24 23 24 23Q24 23 24 23Q24 23 24 23Q24 23 24 23ZM24 35Q30.05 35 35.125 31.725Q40.2 28.45 42.85 23Q40.2 17.55 35.125 14.275Q30.05 11 24 11Q17.95 11 12.875 14.275Q7.8 17.55 5.1 23Q7.8 28.45 12.875 31.725Q17.95 35 24 35Z"/>
        </svg>
    </div>
)}
export const LockIcon = ({
    wrapperProps = {},
    fill ,
    ...rest
}) => {
    const theme = useTheme();
    fill = fill ?? theme.palette.neutral[30];
    return(
    <div {...wrapperProps}>
        <svg
            viewBox="0 0 48 48"
            fill={fill}
            {...rest}
        >
            <path d="M24 2Q27.95 2 30.725 4.775Q33.5 7.55 33.5 11.5V16.3H37Q38.25 16.3 39.125 17.175Q40 18.05 40 19.3V41Q40 42.25 39.125 43.125Q38.25 44 37 44H11Q9.75 44 8.875 43.125Q8 42.25 8 41V19.3Q8 18.05 8.875 17.175Q9.75 16.3 11 16.3H14.5V11.5Q14.5 7.55 17.275 4.775Q20.05 2 24 2ZM24 5Q21.3 5 19.4 6.9Q17.5 8.8 17.5 11.5V16.3H30.5V11.5Q30.5 8.8 28.6 6.9Q26.7 5 24 5ZM11 41H37Q37 41 37 41Q37 41 37 41V19.3Q37 19.3 37 19.3Q37 19.3 37 19.3H11Q11 19.3 11 19.3Q11 19.3 11 19.3V41Q11 41 11 41Q11 41 11 41ZM24 26.3Q22.4 26.3 21.275 27.525Q20.15 28.75 20.15 30.25Q20.15 31.8 21.275 32.9Q22.4 34 24 34Q25.6 34 26.725 32.9Q27.85 31.8 27.85 30.25Q27.85 28.75 26.725 27.525Q25.6 26.3 24 26.3ZM11 19.3Q11 19.3 11 19.3Q11 19.3 11 19.3V41Q11 41 11 41Q11 41 11 41Q11 41 11 41Q11 41 11 41V19.3Q11 19.3 11 19.3Q11 19.3 11 19.3Z"/>
        </svg>
    </div>
)}

export const HideIcon = ({
    wrapperProps = {},
    fill,
    ...rest
}) => {
    const theme = useTheme();
    fill = fill ?? theme.palette.neutral[30];
return(
    <div {...wrapperProps}>
        <svg
            viewBox="0 0 48 48"
            fill={fill}
            {...rest}
        >
            <path d="M31.45 27.05 29.25 24.85Q30.55 21.3 27.9 18.95Q25.25 16.6 22.15 17.75L19.95 15.55Q20.8 15 21.85 14.75Q22.9 14.5 24 14.5Q27.55 14.5 30.025 16.975Q32.5 19.45 32.5 23Q32.5 24.1 32.225 25.175Q31.95 26.25 31.45 27.05ZM37.9 33.5 35.9 31.5Q38.35 29.7 40.175 27.475Q42 25.25 42.85 23Q40.35 17.45 35.35 14.225Q30.35 11 24.5 11Q22.4 11 20.2 11.4Q18 11.8 16.75 12.35L14.45 10Q16.2 9.2 18.925 8.6Q21.65 8 24.25 8Q31.4 8 37.325 12.075Q43.25 16.15 46 23Q44.7 26.2 42.65 28.85Q40.6 31.5 37.9 33.5ZM40.8 44.8 32.4 36.55Q30.65 37.25 28.45 37.625Q26.25 38 24 38Q16.7 38 10.75 33.925Q4.8 29.85 2 23Q3 20.4 4.775 17.925Q6.55 15.45 9.1 13.2L2.8 6.9L4.9 4.75L42.75 42.6ZM11.15 15.3Q9.3 16.65 7.575 18.85Q5.85 21.05 5.1 23Q7.65 28.55 12.775 31.775Q17.9 35 24.4 35Q26.05 35 27.65 34.8Q29.25 34.6 30.05 34.2L26.85 31Q26.3 31.25 25.5 31.375Q24.7 31.5 24 31.5Q20.5 31.5 18 29.05Q15.5 26.6 15.5 23Q15.5 22.25 15.625 21.5Q15.75 20.75 16 20.15ZM26.4 22.4Q26.4 22.4 26.4 22.4Q26.4 22.4 26.4 22.4Q26.4 22.4 26.4 22.4Q26.4 22.4 26.4 22.4Q26.4 22.4 26.4 22.4Q26.4 22.4 26.4 22.4ZM20.6 25.3Q20.6 25.3 20.6 25.3Q20.6 25.3 20.6 25.3Q20.6 25.3 20.6 25.3Q20.6 25.3 20.6 25.3Q20.6 25.3 20.6 25.3Q20.6 25.3 20.6 25.3Z"/>
        </svg>
    </div>
)}
export const CalendarIcon = ({
    wrapperProps = {},
    fill,
    ...rest
}) => {
    const theme =useTheme();
    fill = fill ?? theme.palette.neutral.white
    return(
    <div {...wrapperProps}>
        <svg viewBox="0 0 20 19" fill={fill} {...rest}>
            <path d="M18.734 2.47852H16.7213V3.71785H18.5792V17.3506H1.23876V3.71785H3.09666V2.47852H1.08393C0.939165 2.48094 0.796291 2.51187 0.663471 2.56955C0.530652 2.62723 0.410489 2.71053 0.309848 2.81468C0.209206 2.91883 0.130056 3.04181 0.0769188 3.17657C0.0237819 3.31134 -0.0023013 3.45526 0.000159192 3.60012V17.4683C-0.0023013 17.6132 0.0237819 17.7571 0.0769188 17.8918C0.130056 18.0266 0.209206 18.1496 0.309848 18.2537C0.410489 18.3579 0.530652 18.4412 0.663471 18.4989C0.796291 18.5566 0.939165 18.5875 1.08393 18.5899H18.734C18.8788 18.5875 19.0216 18.5566 19.1545 18.4989C19.2873 18.4412 19.4074 18.3579 19.5081 18.2537C19.6087 18.1496 19.6879 18.0266 19.741 17.8918C19.7941 17.7571 19.8202 17.6132 19.8178 17.4683V3.60012C19.8202 3.45526 19.7941 3.31134 19.741 3.17657C19.6879 3.04181 19.6087 2.91883 19.5081 2.81468C19.4074 2.71053 19.2873 2.62723 19.1545 2.56955C19.0216 2.51187 18.8788 2.48094 18.734 2.47852Z"/>
            <path d="M3.71594 7.43555H4.95456V8.67493H3.71594V7.43555Z"/>
            <path d="M7.43176 7.43555H8.67038V8.67493H7.43176V7.43555Z"/>
            <path d="M11.1476 7.43555H12.3862V8.67493H11.1476V7.43555Z"/>
            <path d="M14.8634 7.43555H16.102V8.67493H14.8634V7.43555Z"/>
            <path d="M3.71594 10.5342H4.95456V11.7735H3.71594V10.5342Z"/>
            <path d="M7.43176 10.5342H8.67038V11.7735H7.43176V10.5342Z"/>
            <path d="M11.1476 10.5342H12.3862V11.7735H11.1476V10.5342Z"/>
            <path d="M14.8634 10.5342H16.102V11.7735H14.8634V10.5342Z"/>
            <path d="M3.71594 13.6328H4.95456V14.8722H3.71594V13.6328Z"/>
            <path d="M7.43176 13.6328H8.67038V14.8722H7.43176V13.6328Z"/>
            <path d="M11.1476 13.6328H12.3862V14.8722H11.1476V13.6328Z"/>
            <path d="M14.8634 13.6328H16.102V14.8722H14.8634V13.6328Z"/>
            <path d="M4.95464 4.95734C5.11889 4.95734 5.27641 4.89205 5.39255 4.77584C5.5087 4.65963 5.57394 4.50202 5.57394 4.33767V0.619667C5.57394 0.455321 5.5087 0.297706 5.39255 0.181496C5.27641 0.0652861 5.11889 0 4.95464 0C4.79038 0 4.63286 0.0652861 4.51672 0.181496C4.40058 0.297706 4.33533 0.455321 4.33533 0.619667V4.33767C4.33533 4.50202 4.40058 4.65963 4.51672 4.77584C4.63286 4.89205 4.79038 4.95734 4.95464 4.95734Z"/>
            <path d="M14.8634 4.95734C15.0277 4.95734 15.1852 4.89205 15.3014 4.77584C15.4175 4.65963 15.4828 4.50202 15.4828 4.33767V0.619667C15.4828 0.455321 15.4175 0.297706 15.3014 0.181496C15.1852 0.0652861 15.0277 0 14.8634 0C14.6992 0 14.5417 0.0652861 14.4255 0.181496C14.3094 0.297706 14.2441 0.455321 14.2441 0.619667V4.33767C14.2441 4.50202 14.3094 4.65963 14.4255 4.77584C14.5417 4.89205 14.6992 4.95734 14.8634 4.95734Z"/>
            <path d="M6.8125 2.47852H13.0055V3.71783H6.8125V2.47852Z"/>
        </svg>
    </div>
)}
export const MailIcon = ({
    wrapperProps = {},
    fill,
    ...rest
}) => {
    const theme = useTheme();
    fill = fill ?? theme.palette.neutral.black;
    return (
    <div {...wrapperProps}>
        <svg
            viewBox="0 0 48 48"
            fill={fill}
            {...rest}
        >
            <path d="M7 40Q5.8 40 4.9 39.1Q4 38.2 4 37V11Q4 9.8 4.9 8.9Q5.8 8 7 8H41Q42.2 8 43.1 8.9Q44 9.8 44 11V37Q44 38.2 43.1 39.1Q42.2 40 41 40ZM24 24.9 7 13.75V37Q7 37 7 37Q7 37 7 37H41Q41 37 41 37Q41 37 41 37V13.75ZM24 21.9 40.8 11H7.25ZM7 13.75V11V13.75V37Q7 37 7 37Q7 37 7 37Q7 37 7 37Q7 37 7 37Z"/>
        </svg>
    </div>
)}

export const VerifiedBadgeIcon = 
(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" id="verified"><path fill="#4DC4FF" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z"></path>
<path fill="#ECEFF1" fill-rule="evenodd" d="M18.0303 7.96967C18.3232 8.26256 18.3232 8.73744 18.0303 9.03033L11.0303 16.0303C10.8897 16.171 10.6989 16.25 10.5 16.25C10.3011 16.25 10.1103 16.171 9.96967 16.0303L5.96967 12.0303C5.67678 11.7374 5.67678 11.2626 5.96967 10.9697C6.26256 10.6768 6.73744 10.6768 7.03033 10.9697L10.5 14.4393L16.9697 7.96967C17.2626 7.67678 17.7374 7.67678 18.0303 7.96967Z" clip-rule="evenodd"></path>
<path fill="#45B0E5" fill-rule="evenodd" d="M12 1.25V22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25Z" clip-rule="evenodd"></path>
<path fill="#D4D6D8" fill-rule="evenodd" d="M12 12.9393V15.0607L11.0303 16.0303C10.8897 16.171 10.6989 16.25 10.5 16.25C10.3011 16.25 10.1103 16.171 9.96967 16.0303L5.96967 12.0303C5.67678 11.7374 5.67678 11.2626 5.96967 10.9697C6.26256 10.6768 6.73744 10.6768 7.03033 10.9697L10.5 14.4393L12 12.9393Z" clip-rule="evenodd"></path>
</svg>
)

export const SpinnerIcon = () => (
    <svg width="22"
     height="22"
      viewBox="0 0 22 22"
       fill="none" 
       xmlns="http://www.w3.org/2000/svg"
       >
        <animateTransform attributeName='transform' type='rotate'  dur={'1.2s'} from={'0'} to={'360'} repeatCount={'indefinite'}/>
        <path fillRule="evenodd" 
        clipRule="evenodd" 
        d="M11 0.25C11.5523 0.25 12 0.697715 12 1.25V3.75C12 4.30228 11.5523 4.75 11 4.75C10.4477 4.75 10 4.30228 10 3.75V1.25C10 0.697715 10.4477 0.25 11 0.25ZM3.42157 3.50157C3.8121 3.11105 4.44526 3.11105 4.83579 3.50157L6.95711 5.62289C7.34763 6.01342 7.34763 6.64658 6.95711 7.03711C6.56658 7.42763 5.93342 7.42763 5.54289 7.03711L3.42157 4.91579C3.03105 4.52526 3.03105 3.8921 3.42157 3.50157ZM18.3713 3.70868C18.7618 4.0992 18.7618 4.73237 18.3713 5.12289L16.9571 6.53711C16.5666 6.92763 15.9334 6.92763 15.5429 6.53711C15.1524 6.14658 15.1524 5.51342 15.5429 5.12289L16.9571 3.70868C17.3476 3.31816 17.9808 3.31816 18.3713 3.70868ZM0.25 11C0.25 10.4477 0.697715 10 1.25 10H4.75C5.30228 10 5.75 10.4477 5.75 11C5.75 11.5523 5.30228 12 4.75 12H1.25C0.697715 12 0.25 11.5523 0.25 11ZM17.75 11C17.75 10.4477 18.1977 10 18.75 10H20.25C20.8023 10 21.25 10.4477 21.25 11C21.25 11.5523 20.8023 12 20.25 12H18.75C18.1977 12 17.75 11.5523 17.75 11ZM7.45711 14.5429C7.84763 14.9334 7.84763 15.5666 7.45711 15.9571L4.62868 18.7855C4.23815 19.1761 3.60499 19.1761 3.21447 18.7855C2.82394 18.395 2.82394 17.7618 3.21447 17.3713L6.04289 14.5429C6.43342 14.1524 7.06658 14.1524 7.45711 14.5429ZM16.0429 16.0429C16.4334 15.6524 17.0666 15.6524 17.4571 16.0429L18.1642 16.75C18.5547 17.1405 18.5547 17.7737 18.1642 18.1642C17.7737 18.5547 17.1405 18.5547 16.75 18.1642L16.0429 17.4571C15.6524 17.0666 15.6524 16.4334 16.0429 16.0429ZM11 16C11.5523 16 12 16.4477 12 17V21C12 21.5523 11.5523 22 11 22C10.4477 22 10 21.5523 10 21V17C10 16.4477 10.4477 16 11 16Z" 
        fill="black"
        />
    </svg>

)
export const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play" viewBox="0 0 12 12"> <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/> </svg>

)

export const ClickIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-click" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="3" y1="12" x2="6" y2="12" /> <line x1="12" y1="3" x2="12" y2="6" /> <line x1="7.8" y1="7.8" x2="5.6" y2="5.6" /> <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" /> <line x1="7.8" y1="16.2" x2="5.6" y2="18.4" /> <path d="M12 12l9 3l-4 2l-2 4l-3 -9" /> </svg>
)

export const AvatarImage = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 28 28"
  >
    <path
      fill="#464A53"
      d="M14 .667C6.64.667.667 6.64.667 14S6.64 27.333 14 27.333 27.333 21.36 27.333 14 21.36.667 14 .667zm0 4c2.213 0 4 1.786 4 4 0 2.213-1.787 4-4 4s-4-1.787-4-4c0-2.214 1.787-4 4-4zM14 23.6a9.6 9.6 0 01-8-4.293c.04-2.654 5.333-4.107 8-4.107 2.653 0 7.96 1.453 8 4.107a9.6 9.6 0 01-8 4.293z"
    ></path>
  </svg>
)