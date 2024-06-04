import styled, {css} from "styled-components";

export const StyledLoginFormRoot = styled.form`
${({theme}) => css`
    display: grid;
    gap: ${theme.spacing}px;
    width: 100%;
    > a {
        color: rgb(235, 165, 80);
        justify-self: center;
    }
    
`}`

export const StyledLoginRoot = styled.div `
    height: 100vh;
    width: 100%;
    background-image: url(https://www.newworldhotels.com/wp-content/uploads/2014/05/Mobile-NWHBR-Exterior.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;    
    justify-content: flex-end;
`
export const StyledFormRoot = styled.div `
    background-color: white;
    padding: 45px;
    border-radius: 32px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-right: 100px;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
`
export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
`
export const StyledInput = styled.input`
    height: 36px;
    width: 400px;
    padding: 8px;
    border-radius: 8px;
    font-size: 16px;
    border: 1px solid #B1B695;
`
export const StyledButton = styled.button `
    align-self: center;
    width: 416px;
    background-color: #EBA550;
    color: white;
    border: 1px solid #EBA550;
    font-size: 20px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
    &:hover {
        background-color: white;
        color: #EBA550;
        border: 1px solid #EBA550;
    }
`

export const StyledLabel = styled.label `
    font-size: 20px;
    font-weight: 500;
    color: #EBA550;
`

export const StyledHead = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #EBA550;
    > h1 {
        margin: 0 !important;
        font-size: 32px;
    }
    > h4 {
        font-weight: 500;
    }
`